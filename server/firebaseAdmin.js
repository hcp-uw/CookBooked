import admin from 'firebase-admin';
import serviceAccount from './cookbooked-546b9-firebase-adminsdk-2w4ak-dff0277e6d.json' assert { type: "json" };

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cookbooked-546b9-default-rtdb.firebaseio.com"
});

export default admin;