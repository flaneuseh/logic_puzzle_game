import { addDoc, collection } from "firebase/firestore";
import { db } from "./database";

// logicPuzzle/gridPuzzle Exp: experience with these types of puzzles
export const addSubject = async (initialSurveyResponses) => {

  try {
    const docRef = await addDoc(collection(db, "subject"), initialSurveyResponses);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const addPuzzleSurvey = async(puzzleSurveyData) => {}

export const addAction = async(pid, actionType, actionValue, time) => {}

export const addSolution = async(userSolution) => {}