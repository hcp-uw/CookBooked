// View complete code at: https://github.com/Asprise/receipt-ocr/tree/main/javascript-nodejs-receipt-ocr
console.log("=== JavaScript/Node.js Receipt OCR ===");

var receiptOcrEndpoint = 'https://ocr.asprise.com/api/v1/receipt';
var imageFile = 'receipt.jpg'; // Modify it to use your own file

var fs = require('fs');
var request = require('request');
request.post({
  url: receiptOcrEndpoint,
  formData: {
    api_key: 'TEST',        // Use 'TEST' for testing purpose
    recognizer: 'auto',        // can be 'US', 'CA', 'JP', 'SG' or 'auto'
    ref_no: 'ocr_nodejs_123', // optional caller provided ref code
    file: fs.createReadStream(imageFile) // the image file
  },
}, function(error, response, body) {
  if(error) {
    console.error(error);
  }
  console.log(body); // Receipt OCR result in JSON
});

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');