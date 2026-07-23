importScripts(
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);


importScripts(
"https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);



firebase.initializeApp({

apiKey: "AIzaSyAi9wi_ACJXVt0goYIe6l6bd-xM7O529FY",
authDomain: "medicine-test-63a20.firebaseapp.com",
projectId: "medicine-test-63a20",
storageBucket: "medicine-test-63a20.firebasestorage.app",
messagingSenderId: "607330559858",
appId: "1:607330559858:web:441bc8ac88d6ff88971feb"

});



const messaging =
firebase.messaging();



messaging.onBackgroundMessage(
(payload)=>{

console.log(
"background message",
payload
);


const notificationTitle =
payload.notification.title;


const notificationOptions={

body:
payload.notification.body,

icon:
"/icon.png"

};



self.registration.showNotification(
notificationTitle,
notificationOptions
);


});