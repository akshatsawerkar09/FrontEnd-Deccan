import { IUser } from "./IUser";

export  interface IMembership{
    membershipId  : number;
    membershipType  : string;
    regDate : string;
    endDate : Date;
    costPaid : number;
    userId : IUser;
}