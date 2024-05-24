import admin from 'firebase-admin';
import serviceAccount from './firebase-service-key.json' assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cookbooked-546b9-default-rtdb.firebaseio.com"
});

export default admin;