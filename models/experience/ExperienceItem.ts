export default class ExperienceItem {
    public color: string;
    public title: string;
    public titleColor: string;
    public company: string;
    public companyLink: string;
    public startDate: Date;
    public toPresent: boolean;
    public endDate: Date;
    public description: string;
    public oppositeText: string;
    public responsibilities: string[];

    constructor(color: string, title: string, titleColor: string, company: string, companyLink: string, description: string,
        startDate: Date, toPresent: boolean, endDate: Date = new Date(), responsibilities: string[]){
            this.color = color;
            this.title = title;
            this.titleColor = titleColor;
            this.company = company;
            this.companyLink = companyLink;
            this.description = description;

            this.startDate = startDate;
            this.toPresent = toPresent;
            this.endDate = endDate;

            this.oppositeText = `${this.startDate.toLocaleString('default', {month: 'long'})} ${this.startDate.getFullYear()}`

            this.responsibilities = responsibilities;
        }
}