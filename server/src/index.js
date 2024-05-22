// all this will be in client actually, to interact with the buttons, some relative paths might have
// to be changed later
 
import { promises as fs } from 'fs';
// Firebase or supabase for database in the future


//to test use this urL: http://localhost:3000/receipts?receipt=receipt.json
async function previewReceipt() {
    let uri = document.getElementById("receipt_input").value; // doesn't connect to anything rn
    try {
        let response = await fetch("/receipts?receipt=" + uri);
        if (response.ok) {
            let receiptText = await response.text();
            displayText(receiptText);
        } else {
            document.getElementById("url_previews").innerHTML = "Error fetching data";
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

async function postReceipt() {
    let uri = document.getElementById("receipt_input").value; // doesn't connect to anything rn
    try {
        await fetch("/receipts", {
            method: "POST",
            body: {uri: uri}
        });
    } catch (error) {
        console.error('Error posting data:', error);
    }
    document.getElementById("postStatus").innerText = "successfully uploaded"
}

// to test use url like: http://localhost:3000/pantry?item=onions&quantity=2
async function addToPantry() {
    let item = document.getElementById("item_input").value //these don't connect to any front end yet either
    let quantity = document.getElementById("quantity_input").value
    try {
        await fetch("/receipts", {
            method: "POST",
            body: {item: item, quantity: quantity}
        });
    } catch (error) {
        console.error('Error posting data:', error);
    }
}






// display the receipt in the front end
function displayText(receipt){
    document.getElementById("receipt_result").innerHTML = receipt;
}

// get the text for our json specifically (kinda useless)
function getText(uri) {
    console.log(uri);
    fs.readFile('server/data/reciept.json', 'utf-8', function (err, data) {
        if (err) throw err;
    
        var obj = JSON.parse(data);
        const itemsLength = Object.keys(obj.receipts[0].items).length;
        //console.log(obj);
    
        const doNotInclude = [
            "MRPAPER BG FEE",
            "TAX",
            "BALANCE"
        ]
    
    
    
        runParse(obj, doNotInclude, itemsLength);
        addToPantry("Onions", 3);
        removeFromPantry("Celery", 10);
        removeFromPantry("Onions", 1);
        showPantry();
    });
}

// below are all useless since using a map, moving to json file for database

// this is the main function to run a parse of a json (implemented)
function runParse(obj, notIncluded, itemsCount) {
    for (let i = 0; i < itemsCount; i++) {
        let currItem = obj.receipts[0].items[i].description;
        if (!notIncluded.includes(currItem)) {
            if (map.has(currItem)) {
                map.set(currItem, map.get(currItem) + 1);
            } else {
                map.set(currItem, 1);
            }
        }
    }
}

//remove an item from pantry + quantity
function removeFromPantry(item, amount) {
    if (map.has(item)) {
        map.set(item, map.get(item) - amount <= 0? 0 : map.get(item) - amount);
    } else {
        console.log(`Item (${item}) not in pantry, cannot remove`);
    }
}


// add an item to pantry + quantity
function addToPantry(item, amount) {
    if (map.has(item)) {
        map.set(item, map.get(item) + amount);
    } else {
        map.set(item, amount);
    }
}

// print pantry contents (TODO: jeewon)
function showPantry() {
    console.log(map);
}

// experimental of removing a variable in json, 
// most likely do this at the start after we have variables within a json
// OR before we put values within the json which might be hard
function removeJsonVar(obj, itemsCount) {
    for (let i = 0; i < itemsCount; i++){
        if (notIncluded.includes(obj.receipts[0].items[i].description)) {
            delete (obj.receipts[0].items[i].description)
        }
    }
}

