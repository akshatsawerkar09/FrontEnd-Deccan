import { IUser } from "./IUser";

export  interface IMembershihp{
    membershipId  : number;
    membershipType  : string;
    regDate : string;
    endDate : string;
    costPaid : number;
    userId : IUser;
}