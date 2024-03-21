import { addDoc, collection,  doc, updateDoc, setDoc , FieldValue} from "firebase/firestore";
import { db} from "./database";
import { getCurrentUser } from "./SignIn";

let attempts = 0; 
   
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
export const createGamePlayInstance = async (pid) => {
  return new Promise((resolve, reject) =>{
    getCurrentUser().then(async function (user){
      try {
        const docRef = await addDoc(collection(db, "gamePlayInstances"), {
          userId: user,
          pid: pid, 
          conceded: true, 
          numAttempts: 1
        });
            attempts = 1; 
            console.log("Document written with ID: ", docRef.id);
            resolve(docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          return -1 
        }
  })
  })


}

export const addPuzzleSurvey = async(pid, puzzleSurveyData) => {
  console.log(pid, puzzleSurveyData);

        getCurrentUser().then(async function (user){
            try {
                const docRef = await addDoc(collection(db, "survey"), {
                  ...puzzleSurveyData, 
                  userId: user,
                  pid:pid
                });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }
        })
}

export const addCellChange = async(instanceId, time, puzzleState, correct, incorrect, solved) => {
  const instance =  doc(db,  "gamePlayInstances", instanceId); 
  const updated = await updateDoc(instance, {totalTime:time, numCorrect:correct, numIncorrect: incorrect, isSolved: solved})
  console.log("instance:", instance);
  let action = doc(instance, "actions", time.toString())
  action = await setDoc(action, {time:time, type:"cellChange", puzzleState:puzzleState, correct: correct, incorrect: incorrect, solved:solved});
}

export const addHintToggle = async(instanceId, time, hint, striked) => {
  const instance =  doc(db,  "gamePlayInstances", instanceId); 
  const updated = await updateDoc(instance, {totalTime:time})
  console.log("instance:", instance);
  let action = doc(instance, "actions", time.toString())
  action = await setDoc(action, {time:time, type:"hintToggle",hint:hint, striked:striked});
}

export const addButtonPress = async(instanceId, time, button) => {
  const instance =  doc(db,  "gamePlayInstances", instanceId); 

  if (button == "reattempt" || button == "clear_reattempt"){
    attempts ++; 
    const updated = await updateDoc(instance, {totalTime:time, numAttempts:attempts})
  }else if (button == "submit"){
    const updated = await updateDoc(instance, {totalTime:time, conceded:false})
  }else{
    const updated = await updateDoc(instance, {totalTime:time})
  }
  
  let action = doc(instance, "actions", time.toString())
  action = await setDoc(action, {time:time, type:"buttonClick",button:button});
}
