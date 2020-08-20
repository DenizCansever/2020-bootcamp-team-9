import { useHistory } from "react-router-dom";
import {addUser} from '../service/index'

export const signIn = (credentials, x) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();    

        firebase.auth().signInWithEmailAndPassword(
            credentials.userEmail,
            credentials.userPassword

        ).then((resp) => {
            localStorage.setItem('userId', resp.user.uid);
            console.log("response", resp);
            x.push('/profile');
            dispatch({ type: 'LOGIN_SUCCESS' });
            
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch({ type: 'SIGNOUT_SUCCESS' })
            
        });
    }
}

export const signUp = (newUser, x) => {
    
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        
        

        firebase.auth().createUserWithEmailAndPassword(
            newUser.userEmail,
            newUser.userPassword
        ).then((resp) => {

            addUser(resp.user.uid,resp.user.email)
            localStorage.setItem('userId', resp.user.uid);


            
            return firestore.collection('users').doc(resp.user.uid).set({
                userFirstName: newUser.userFirstName,
                userLastName: newUser.userLastName,
                userAge: newUser.userAge,
                initials: newUser.userFirstName[0].toUpperCase() + newUser.userLastName[0].toUpperCase()
            })
        }).then(() => {
            

            x.push('/profile');
            dispatch({ type: 'SIGNUP_SUCCESS' })
          
            
            
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err })
            console.log(err);
        })
    }
}