importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
  const firebaseConfig = {
   apiKey: "AIzaSyBMxpUNXI6tjaPmOHZNK-yCX-43jhm_x8k",
          authDomain: "ketshopapp.firebaseapp.com",
          projectId: "ketshopapp",
          storageBucket: "ketshopapp.appspot.com",
          messagingSenderId: "494428643173",
          appId: "1:494428643173:web:155fd0dae2d16035be4b8c",
          measurementId: "G-S8FEFTG9CE"
 };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });