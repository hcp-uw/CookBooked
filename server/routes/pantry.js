import express from 'express';
import { promises as fs } from 'fs';
import { ref, update, get } from 'firebase/database';
import { db } from "../config/firebaseConfig.js";
var router = express.Router();

const pantryJSON = "data/pantry.json"

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// add specific items with quantities to json
router.post('/add', async (req, res) => {
    let item = capitalizeFirstLetter(req.body.item.toLowerCase());
    let quantity = parseInt(req.body.quantity);
    let uid = req.body.uid;

    const pantryRef = ref(db, `users/${uid}/pantry`);
    const itemRef = ref(db, `users/${uid}/pantry/${item}`);
    const snapshot = await get(itemRef);
    const updates = {}
    const timestamp = new Date().toISOString().substring(0, 10);
    console.log(timestamp)
    updates[`${item}`] = {quantity: quantity, last_added: timestamp};
    if (snapshot.exists()) {
        updates[`${item}`].quantity += snapshot.val().quantity;
    }

    await update(pantryRef, updates);
    res.status(200).send('Pantry updated successfully.');

    // const jsonData = await fs.readFile(pantryJSON);
    // const user = JSON.parse(jsonData);

    // if (user.users.user1.pantry[item]) {
    //     user.users.user1.pantry[item] += quantity;
    // } else {
    //     user.users.user1.pantry[item] = quantity;
    // }

    // await fs.writeFile(pantryJSON, JSON.stringify(user, null, 2));
    // res.json({status: "success"});
});

// remove specific items with quantities from json
router.post('/remove', async (req, res) => {
    let item = req.body.item
    let quantity = parseInt(req.body.quantity);

    const jsonData = await fs.readFile(pantryJSON);
    const user = JSON.parse(jsonData);

    if (user.users.user1.pantry[item]) {
        if (user.users.user1.pantry[item] <= quantity) {
            delete user.users.user1.pantry[item];
        } else {
            user.users.user1.pantry[item] -= quantity;
        }
        await fs.writeFile(pantryJSON, JSON.stringify(user, null, 2));
        res.json({status: "success"});
    } else {
        console.log('Item not found:', item);
        res.status(404).json({ error: "Item not found in pantry" });    
    }
});

// prints out whats in the pantry
router.get('/', async (req, res) => {
    let uid = req.query.uid;

    const pantryRef = ref(db, `users/${uid}/pantry`);
    const snapshot = await get(pantryRef);
    if (snapshot.exists()) {
        res.status(200).json({pantry : snapshot.val()});
    } else {
        res.status(200).json({pantry: {}});
    }
    // try {
    //     const jsonData = await fs.readFile(pantryJSON);
    //     const data = JSON.parse(jsonData);

    //     const username = Object.keys(data.users)[0];
    //     const pantry = data.users[username].pantry;

    //     const pantryContents = {
    //         username: username,
    //         pantry: pantry
    //     };

    //     res.json(pantryContents);
    // } catch (error) {
    //     console.error('Error reading pantry data:', error);
    //     res.status(500).json({ error: "Failed to read pantry data" });
    // }
});


export default router;