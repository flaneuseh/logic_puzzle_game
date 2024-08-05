// import { getAuth, signInAnonymously } from "firebase/auth";


let signIn = () => {
    /* const auth = getAuth();
        signInAnonymously(auth)
        .then(() => {
            // Signed in..
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
         });*/
}

export function getCurrentUser() {
    /*return new Promise((resolve, reject) =>{
        const auth = getAuth();
        let user = auth.currentUser;

        if(user){
            resolve(user.uid);
        }else{
            signInAnonymously(auth).then(() => {
                user = auth.currentUser; 
                resolve(user.uid);
            })
        }
    })*/

    return new Promise((resolved) => resolved(0))


}