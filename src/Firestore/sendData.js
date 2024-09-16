import { addDoc, collection,  doc, updateDoc, setDoc , FieldValue, documentId} from "firebase/firestore";
import { db} from "./database"; // removed from git repo for security 
import { getCurrentUser } from "./SignIn";

let attempts = 0;
let clears = 0;
let subject = null;

let DEGUG = false    

export const addSubject = async (path) => {

  getCurrentUser().then(async function (user){
    if (DEGUG){
      console.log("would write user info: " + path)
      return 
    }
    try {
     
        const docRef = await  setDoc(doc(db, "subjects2", user), {
          userId: user,
          path: path
        });
        console.log("Subject Document written with ID: ", docRef.id);
        subject = docRef.id 
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  })
}


export const setTutorialInfo = async (time, slide,  genreOrder, puzzleOrder) => {
  if (DEGUG){
    console.log("would write tutoral info: " + genreOrder)
    return 
  }
  getCurrentUser().then(async function (user){
    if (subject == null){
      console.log("Subject is null")
    }
    const subjectInstance =  doc(db,  "subjects2", user); 
    const updated = updateDoc(subjectInstance, {tutorialTime: time, tutorialSlide:slide, userId:user, narrOrder: puzzleOrder, 
      genreOrder: genreOrder })
  })

}
export const createGamePlayInstance = async (pid, narrative) => {
  if (DEGUG){
    return -1 
  }
  return new Promise((resolve, reject) =>{
    getCurrentUser().then(async function (user){
      try {
        const docRef = await addDoc(collection(db, "gamePlayInstances2"), {
          userId: user,
          pid: pid, 
          mode: narrative,
          conceded: true, 
          numAttempts: 1, 
          numClears: 0, 
          totalTime:0, 
          numIncorrect:0, 
          numCorrect: 0 
        });
            attempts = 1; 
            //console.log("Document written with ID: ", docRef.id);
            resolve(docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          return -1 
        }
  })
  })
}

export const addPuzzleSurvey = async (pid,narMode,  puzzleSurveyData, comment) => {
    if (DEGUG){
      return 
    }

      getCurrentUser().then(async function (user){
          try {
              const docRef = await addDoc(collection(db, "survey2"), {
                ...puzzleSurveyData, 
                userId: user,
                pid:pid,
                narMode:narMode, 
                comment: comment
              });
              console.log("survey written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            }
      })
}

export const addCellChange = async (instanceId, name, time, puzzleState, correct, incorrect, solved) => {
  if (DEGUG){
    return 
  }
  getCurrentUser().then(async function (user){
    const instance =  doc(db,  "gamePlayInstances2", instanceId); 
    const updated = await updateDoc(instance, {totalTime:time, numCorrect:correct, numIncorrect: incorrect, isSolved: solved})
    //console.log("instance:", instance);
    let action = doc(instance, "actions", time.toString())
    action = await setDoc(action, {userId: user, time:time, type:"cellChange", puzzleState:puzzleState, correct: correct, incorrect: incorrect, solved:solved});

    if (name == "Primer Puzzle"){
      const subjectInstance =  doc(db,  "subjects2", user); 
       const updated = updateDoc(subjectInstance, {primerCorrect: solved })
    
    }
  })
}

export const addHintToggle = async (instanceId, time, hint, striked) => {
  if (DEGUG){
    return 
  }
  getCurrentUser().then(async function (user){
    const instance =  doc(db,  "gamePlayInstances2", instanceId); 
    const updated = await updateDoc(instance, {totalTime:time})
    //console.log("instance:", instance);
    let action = doc(instance, "actions", time.toString())
    action = await setDoc(action, {userId: user, time:time, type:"hintToggle",hint:hint, striked:striked});
  }) 
}

export const addButtonPress = async (instanceId, time, button) => {
  if (DEGUG){
    return 
  }
  getCurrentUser().then(async function (user){
    const instance =  doc(db,  "gamePlayInstances2", instanceId); 

    if (button == "check"){
      attempts ++; 
      const updated = await updateDoc(instance, {totalTime:time, numAttempts:attempts})
    }else if(button === "clear"){
      clears ++; 
      const updated = await updateDoc(instance, {totalTime:time, numClears:clears})
    }else{
      const updated = await updateDoc(instance, {totalTime:time})
    }
    
    let action = doc(instance, "actions", time.toString())
    action = await setDoc(action, {userId: user, time:time, type:"buttonClick",button:button});
})
}


export const createRankingInstance = async (diff, narr, enjoyment) => {
  if (DEGUG){
    return -1 
  }
  return new Promise((resolve, reject) =>{
    getCurrentUser().then(async function (user){
      try {
        const docRef = await addDoc(collection(db, "rankings2"), {
          userId: user,
          diff: diff, 
          nar:narr, 
          enjoyment:enjoyment,  
        });
            attempts = 1; 
            console.log("Ranking Document written with ID: ", docRef.id);
            resolve(docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
          return -1 
        }
  })
  })
}


export const updateRankingInstance = async (instanceId, diff, narr, enjoyment) => {
  if (DEGUG){
    return -1 
  }
  return new Promise((resolve, reject) =>{
    getCurrentUser().then(async function (user){
        let instance =  doc(db,  "rankings2", instanceId); 
        const updated = await updateDoc(instance, {
          diff: diff, 
          nar:narr, 
          enjoyment:enjoyment
        })
  })
  })
} 


  export const updateRankingComment = async (instanceId, category, comment) => {
    if (DEGUG){
      return -1 
    }
    return new Promise((resolve, reject) =>{
      getCurrentUser().then(async function (user){
          let instance =  doc(db,  "rankings2", instanceId); 

          if (category == "diff"){
          const updated = await updateDoc(instance, {
            difficultyComment: comment
          })} 

          else if (category == "narrative"){
            const updated = await updateDoc(instance, {
              narrativeComment: comment
          })} 

          else{
            const updated = await updateDoc(instance, {
              enjoymentComment: comment
          })} 
    })
    })
  } 