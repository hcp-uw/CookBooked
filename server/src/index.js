import { promises as fs } from 'fs';
var map = new Map();
// Firebase or supabase for database in the future

async function getReceipt() {
    let uri = document.getElementById("receipt_input").value;
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

function displayText(receipt){
    document.getElementById("receipt_result").innerHTML = receipt;
}

function getText(uri) {
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

// this is the main function to run a parse of a json
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

function removeFromPantry(item, amount) {
    if (map.has(item)) {
        map.set(item, map.get(item) - amount <= 0? 0 : map.get(item) - amount);
    } else {
        console.log(`Item (${item}) not in pantry, cannot remove`);
    }
}

function addToPantry(item, amount) {
    if (map.has(item)) {
        map.set(item, map.get(item) + amount);
    } else {
        map.set(item, amount);
    }
}

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

