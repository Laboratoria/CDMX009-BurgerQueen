import firebase from 'firebase/app'
import 'firebase/firestore'
//import { setDownData } from './App.js'

let firebaseConfig = {
    apiKey: "AIzaSyCwD2vRMyzzoVSlgMw1ugRcjke2wBCZCMc",
    authDomain: "burguerqueen-f6391.firebaseapp.com",
    databaseURL: "https://burguerqueen-f6391.firebaseio.com",
    projectId: "burguerqueen-f6391",
    storageBucket: "burguerqueen-f6391.appspot.com",
    messagingSenderId: "22715911302",
    appId: "1:22715911302:web:42b667553f3a91a381d507"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore()

export const saveOrderBD = (order) => {

    db.collection('orders')
        .add(order).then(res => console.log(res))
        .catch(err => console.log(err))
}

/* export const getDataBD = () => {
    return db.collection('orders').onSnapshot((snapshot) => {
        const arrayData = []
        console.log(snapshot);
        snapshot.forEach(doc => arrayData.push(({ ...doc.data(), id: doc.id })))
        setDownData(arrayData)
    })
} */



const viewOrders = (listOrder) => {
    const d = db.collection('orders').where('state', '==', 'pending');
    return d.onSnapshot(snapshot => {
        const spellsData = []
        snapshot.forEach(doc => spellsData.push({ ...doc.data(), id: doc.id }));
        listOrder(spellsData);
    });
}

const viewModalPending = (changePending) => {
    const goPending = db.collection('orders').where('state', '==', 'pending').orderBy('date', 'desc');
    return goPending.onSnapshot(snapshotPending => {
        const pendingData = []
        snapshotPending.forEach(doc => pendingData.push({ ...doc.data(), id: doc.id }));
        changePending(pendingData);
    });
}
const viewModalReady = (changeReady) => {
    const goReady = db.collection('orders').where('state', '==', 'ready').orderBy('date', 'desc');
    return goReady.onSnapshot(snapshotReady => {
        const readyData = []
        snapshotReady.forEach(doc => readyData.push({ ...doc.data(), id: doc.id }));
        changeReady(readyData);
    });
}

const ordersSetDelivered = (id) => {
    let onchangeStateD = db.collection("orders").doc(id);
    return onchangeStateD.update({
        "state": "delivered"
    })
}

const onChangeStateReady = (id) => {
    let newDate = new Date;
    let onchangeStateR = db.collection("orders").doc(id);
    onchangeStateR.update({
        "state": "ready",
        "deliveryDate": newDate
    });
}

const onChangeStateCancel = (id) => {
    let onChangeStateC = db.collection("orders").doc(id);
    onChangeStateC.update({
        "state": "cancel"
    })
}
export {
    viewOrders,
    viewModalPending,
    viewModalReady,
    ordersSetDelivered,
    onChangeStateReady,
    onChangeStateCancel
};


db.enablePersistence()
    .catch(function (err) {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    });
// The default cache size threshold is 40 MB. Configure "cacheSizeBytes"
// for a different threshold (minimum 1 MB) or set to "CACHE_SIZE_UNLIMITED"
// to disable clean-up.
db.settings({
    cacheSizeBytes: db.CACHE_SIZE_UNLIMITED
});



db.collection("orders")
    .onSnapshot({ includeMetadataChanges: true }, function (snapshot) {
        snapshot.docChanges().forEach(function (change) {
            if (change.type === "added") {
                //console.log("New city: ", change.doc.data());
            }

            var source = snapshot.metadata.fromCache ? "local cache" : "server";
            //console.log("Data came from " + source);
            console.log(snapshot.metadata);

        });
    });