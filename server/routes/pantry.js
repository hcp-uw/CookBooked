import express from 'express';
import { promises as fs } from 'fs';
var router = express.Router();

const pantryJSON = "data/pantry.json"

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

router.get('/', async (req, res) => {
    console.log('TODO Jeewon: print out json contents in nice way');
    res.send("TODO Jeewon: print out json contents in nice way")
});


export default router;