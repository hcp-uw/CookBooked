import express from 'express';
import { promises as fs } from 'fs';
var router = express.Router();

const pantryJSON = "data/pantry.json"

// for not just print out the results of receipt parsing
router.get('/', async (req, res) => {
    const uri = req.query.receipt;
    console.log(uri);
    try {
        const data = await fs.readFile(`data/${uri}`);
        const obj = JSON.parse(data);
        const items = obj.receipts[0].items;
        console.log(items);

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

        res.send(data.toString());
    } catch (err) {
        console.error('Error reading file:', err);
        res.status(500).send('Error reading file');
    }
});


export default router;

// fs.readFile(`data/${uri}`, 'utf-8', function (err, data) {
        // console.log("step 1 getting receipt info")
        // if (err) {
        //     console.error('Error reading file:', err);
        //     res.status(500).send('Error reading file');
        //     return;
        // }
    
        // try {
        //     console.log("step 2 getting receipt info");
        //     const obj = JSON.parse(data);
        //     const items = obj.receipts[0].items;
        //     //console.log(obj);
        
        //     const doNotInclude = [
        //         "MRPAPER BG FEE",
        //         "TAX",
        //         "BALANCE"
        //     ]

        //     const itemCounts = {};

        //     items.forEach(item => {
        //         const currItem = item.description;
        //         if (!doNotInclude.includes(currItem)) {
        //             if (itemCounts[currItem]) {
        //                 itemCounts[currItem]++;
        //             } else {
        //                 itemCounts[currItem] = 1;
        //             }
        //         }
        //     });

        //     fs.readFile(`data/pantry.json`, 'utf-8', function (err, pantryData) {
        //         if (err) {
        //             console.error('Error reading pantry file:', err);
        //             res.status(500).send('Error reading pantry file');
        //             return;
        //         }

        //         try {
        //             const db = JSON.parse(pantryData);
        //             db.users.user1.pantry = itemCounts;

        //             // Write back to pantry.json
        //             fs.writeFile(`data/pantry.json`, JSON.stringify(db, null, 4), 'utf8', (err) => {
        //                 if (err) {
        //                     console.error('Error writing pantry file:', err);
        //                     res.status(500).send('Error writing pantry file');
        //                     return;
        //                 }
        //                 console.log('Pantry file successfully updated.');
        //                 res.send("Success");
        //             });
        //         } catch (error) {
        //             console.error('Error parsing pantry JSON:', error);
        //             res.status(500).send('Error parsing pantry JSON');
        //         }
        //     });
        // } catch (error) {
        //     console.error('Error parsing JSON:', error);
        //     res.status(500).send('Error parsing JSON');
        // }
    // });
