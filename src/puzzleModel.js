export default class PuzzleModel {
    constructor(catergories, hints){
        this.catergories = catergories; 
        this.numEnt = catergories[0].entities.length 

        this.leftRight = []
        for(let i = 0; i < this.catergories.length - 1; i ++){
            this.leftRight.push(catergories[i])
        }

        this.topButtom = []
        this.hints = hints 

        for(let i = this.catergories.length - 1; i > 0; i --){
            this.topButtom.push(catergories[i])
        }

    }
}