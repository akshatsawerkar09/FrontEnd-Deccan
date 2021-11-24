import { IUser } from "./IUser";

export interface ISports {
    sportsId  : number ;
    membersCharge : number;
    nonMembersCharge : number;
    sportsCategory : string;
    sportsName : string;
    managerId : IUser
}