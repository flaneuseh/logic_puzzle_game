export default class Category{
    constructor(name, entities){
        this.entities = entities;
        this.name = name; 
        this.length = entities.length;
    }
}