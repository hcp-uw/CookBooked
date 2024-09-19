import express from 'express';
import { promises as fs } from 'fs';
import { ref, update, get, push, set } from 'firebase/database';
import { db } from "../config/firebaseConfig.js";
var router = express.Router();

// getting the precreated receipt data for now
const pantryJSON = "data/pantry.json"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Prints out the receipt data, returns error code and message if fails
router.get('/', async (req, res) => {
    const uri = req.query.receipt;
    try {
        const data = await fs.readFile(`data/${uri}`);
        const obj = JSON.parse(data);
        const items = obj.receipts[0].items;
        const doNotInclude = [
            "MRPAPER BG FEE",
            "TAX",
            "BALANCE"
        ]

        const map = new Map();
        for (let i = 0; i < items.length; i++) {
            let currItem = obj.receipts[0].items[i].description;
            if (!doNotInclude.includes(currItem)) {
                if (map.has(currItem)) {
                    map.set(currItem, map.get(currItem) + 1);
                } else {
                    map.set(currItem, 1);
                }
            }
        }
        const mapArray = Array.from(map);
        const mapString = mapArray.map(([key, value]) => `${key}: ${value}`).join('\n');
        res.send(mapString);
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
    }
})

// this will add the items on the receipt to the json under user1
router.post('/', async (req, res) => {
    const uri = req.body.uri;
    console.log(uri);
    try {
        const data = await fs.readFile(`data/${uri}`);
        const obj = JSON.parse(data);
        const items = obj.receipts[0].items;
        const doNotInclude = [
            "MRPAPER BG FEE",
            "TAX",
            "BALANCE"
        ]

        const jsonData = await fs.readFile(pantryJSON);
        const user = JSON.parse(jsonData);

        for (let i = 0; i < items.length; i++) {
            let currItem = obj.receipts[0].items[i].description;
            if (!doNotInclude.includes(currItem)) {
                if (user.users.user1.pantry[currItem]) {
                    user.users.user1.pantry[currItem]++;
                } else {
                    user.users.user1.pantry[currItem] = 1;
                }
            }
        }

        await fs.writeFile(pantryJSON, JSON.stringify(user, null, 2));

        res.status(200).json({status: "success"});
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
    }
});

router.get('/read', async (req, res) => {
    let uid = req.query.uid;
    const receiptsRef = ref(db, `users/${uid}/receipts`);
    const snapshot = await get(receiptsRef);
    if (snapshot.exists()) {
        res.status(200).json({receipts : snapshot.val()});
    } else {
        res.status(200).json({receipts: {}});
    }
})

router.post('/add', async (req, res) => {
    try {
        let items = req.body.items
        let store = req.body.store
        let standardizesItems = {}
        for (const item in items) {
            const standardizedItem = capitalizeFirstLetter(item.toLowerCase())
            standardizesItems[standardizedItem] = items[item]
        }
        let uid = req.body.uid;
        const receiptRef = ref(db, `users/${uid}/receipts`);
        const timestamp = new Date().toISOString().substring(0, 10);

        const newReceipt = {
            date: timestamp,
            store: store,
            items: standardizesItems,
        }

        const newReceiptRef = push(receiptRef);
        set(newReceiptRef, newReceipt)
            .then(() => {
                console.log('New receipt added successfully.');
            })
            .catch((error) => {
                console.error('Error adding new receipt:', error);
            });
        res.status(201).json({ message: 'Receipt added successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add receipt.' });
    }
})

export default router;