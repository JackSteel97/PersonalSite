export default class Skill{
    public name:string;
    public color: string;
    public rating: number;

    constructor(name: string, color: string, rating: number){
        this.name = name;
        this.color = color;
        this.rating = rating;
    }
}