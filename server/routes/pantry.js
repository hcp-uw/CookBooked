import express from 'express';
import { promises as fs } from 'fs';
var router = express.Router();

const pantryJSON = "data/pantry.json"

// add specific items with quantities to json
router.post('/add', async (req, res) => {
    let item = req.body.item
    let quantity = parseInt(req.body.quantity);

    const jsonData = await fs.readFile(pantryJSON);
    const user = JSON.parse(jsonData);

    if (user.users.user1.pantry[item]) {
        user.users.user1.pantry[item] += quantity;
    } else {
        user.users.user1.pantry[item] = quantity;
    }

    await fs.writeFile(pantryJSON, JSON.stringify(user, null, 2));
    res.json({status: "success"});
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
    try {
        const jsonData = await fs.readFile(pantryJSON);
        const data = JSON.parse(jsonData);

        const username = Object.keys(data.users)[0];
        const pantry = data.users[username].pantry;

        const pantryContents = {
            username: username,
            pantry: pantry
        };

        res.json(pantryContents);
    } catch (error) {
        console.error('Error reading pantry data:', error);
        res.status(500).json({ error: "Failed to read pantry data" });
    }
});


export default router;