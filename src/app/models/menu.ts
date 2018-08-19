export class Menu {
  public constructor(
    public id:string
    ,public label:string
    ,public icon:string
    ,public menuorder:string
    ,public ismainmenu:boolean
    ,public parentmenu:string
    ,public menurouterlink:string) {
  }
}
