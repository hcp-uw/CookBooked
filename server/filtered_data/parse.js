var fs = require('fs');
var map = new Map();
// Firebase or supabase for database in the future

usedJson = "costcoReceipt.json"

fs.readFile(usedJson, 'utf-8', function (err, data) {
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
    // addToPantry("Onions", 3);
    // removeFromPantry("Celery", 10);
    // removeFromPantry("Onions", 1);
    showPantry();
});

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
        console.log("Item not in pantry")
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
function removeJsonVar(obj, itemsCount) { // DID NOT TEST YET
    for (let i = 0; i < itemsCount; i++){
        if (notIncluded.includes(obj.receipts[0].items[i].description)) {
            delete (obj.receipts[0].items[i].description)
        }
    }
}

// map idea: 
// key = item name
// val = item count
// const items = new Map()

// Later, we can use SQLAlchemy to use database with flask which is not too hard to implement