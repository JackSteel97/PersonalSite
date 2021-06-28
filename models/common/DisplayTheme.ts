export class DisplayTheme {
    public theme: Theme;
    public icon: string;
    public active: boolean;
    public name: string

    constructor(theme: Theme, icon: string, active: boolean = false){
        this.theme = theme;
        this.icon = icon;
        this.active = active;
        this.name = Theme[theme];
    }
}

export enum Theme {
    Dark,
    Light,
    System
}