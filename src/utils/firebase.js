import firebase from 'firebase';

// Provided by the Firebase console
const config = {
  apiKey: "AIzaSyBEejrcdsvVuATOzKBL9Iz1h-N8ZoD1NDc",
  authDomain: "first-firebase-project-deda5.firebaseapp.com",
  databaseURL: "https://first-firebase-project-deda5.firebaseio.com",
  projectId: "first-firebase-project-deda5",
  storageBucket: "",
  messagingSenderId: "946980286390"
};

// Firebase instance
firebase.initializeApp(config);

// Firebase doesn't return data as an array but as a parent object
//  containing child objects. This utility function will extract
//  the child objects into an array and place the key as 'id'
const firebaseListToArray = (firebaseObjectList) => {
  if (!firebaseObjectList) return [];

  return Object.keys(firebaseObjectList)
    .map(k => {
      const obj = {
        id: k
      };
      for (let key in firebaseObjectList[k]) {
        if (firebaseObjectList[k].hasOwnProperty(key)) {
          obj[key] = firebaseObjectList[k][key];
        }
      }
      return obj;
    });
}

const database = firebase.database();
const auth = firebase.auth();

export { firebase, database, auth };
export { firebaseListToArray };
