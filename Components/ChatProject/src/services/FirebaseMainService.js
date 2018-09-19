import User from '../model/user';
import firebase from 'firebase';

/* INITIALIZE FIREBASE */
const firebaseConfig = {
    apiKey: "AIzaSyDG0dCBT7zry5Yxlqnzg7dcPzOZdNDIphk",
    authDomain: "react-redux-chat-b6c16.firebaseapp.com",
    databaseURL: "https://react-redux-chat-b6c16.firebaseio.com",
    projectId: "react-redux-chat-b6c16",
    storageBucket: "react-redux-chat-b6c16.appspot.com",
    messagingSenderId: "866999757969"
};
firebase.initializeApp(firebaseConfig); 


export default{
    
    /* Crea a un usuario con el correo y la contrasenia indicados */
    createUserWithEmailAndPassword: (email, password) => {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    },
    /* Autentifica a un usuario con el correo y la contrasenia indicados */    
    signInWithEmailAndPassword: (email, password) => {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    },
    /* Crea a un usuario en la base de datos */
    createUserInDatabase: (user) => {
        return firebase.database().ref().child('users').push(user);
    },
    /* Actualiza a un usuario en la base de datos */
    updateUserInDatabase: (user) => {
        return firebase.database().ref().child('users').child(user.id).set(user);
    },
    /* Retorna la lista con todos los usuarios en la base de datos */
    getUsers: () => {
        return new Promise((req, rej) => {
            firebase.database().ref().child('users').on('value', (snapshot) => {
                let users = [];    
                snapshot.forEach((snapshotChild) => {
                    let user = new User(snapshotChild.val().id, snapshotChild.val().email, snapshotChild.val().name);
                    users.push(user);
                });
                req(users)    
            });
        });
    }

}