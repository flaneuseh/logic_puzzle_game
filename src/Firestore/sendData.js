import { collection, addDoc } from "firebase/firestore";
import { db } from "./database";
   
    export const addSubject = async (logicPuzzleExp, gridPuzzleExp) => { 
       
        try {
            const docRef = await addDoc(collection(db, "subject"), {
              logicPuzzleExp: logicPuzzleExp,    
              gridPuzzleExp: gridPuzzleExp
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }