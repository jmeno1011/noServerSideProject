import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_F_APIKEY,
  authDomain: process.env.REACT_APP_F_AUTHDOMAIN,
  projectId: process.env.REACT_APP_F_PROJECTID,
  storageBucket: process.env.REACT_APP_F_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_F_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_F_APPID,
  measurementId: process.env.REACT_APP_F_MEASUREMENTID,
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const gettToken = (setTokenFound, setTargetToken) => {
  return getToken(messaging, { vapidKey: process.env.REACT_APP_F_VAPIKEY })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        setTokenFound(true);
        setTargetToken(currentToken);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
