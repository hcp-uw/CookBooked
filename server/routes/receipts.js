import express from 'express';
import { promises as fs } from 'fs';
var router = express.Router();

// getting the precreated receipt data for now
const pantryJSON = "data/pantry.json"

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

export default router;