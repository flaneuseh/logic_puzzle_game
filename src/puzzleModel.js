export default class PuzzleModel {
    constructor(categories, hints, solutionString){
        this.categories = categories; 
        this.numEnt = categories[0].entities.length 
        this.solutionString = solutionString

        this.leftRight = []
        for(let i = 0; i < this.categories.length - 1; i ++){
            this.leftRight.push(categories[i])
        }

        this.topBottom = []
        this.hints = hints 

        for(let i = this.categories.length - 1; i > 0; i --){
            this.topBottom.push(categories[i])
        }

    }
}