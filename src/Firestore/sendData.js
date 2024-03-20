import { collection, addDoc } from "firebase/firestore";
import { db } from "./database";
import { getCurrentUser } from "./SignIn";
   
    export const addSubject = async (logicPuzzleExp, gridPuzzleExp) => { 
        console.log(logicPuzzleExp, gridPuzzleExp);

        getCurrentUser().then(async function (user){
            try {
                const docRef = await addDoc(collection(db, "subjects"), {
                  userId: user,
                  logicPuzzleExp: logicPuzzleExp,    
                  gridPuzzleExp: gridPuzzleExp
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        })
       
       
    }