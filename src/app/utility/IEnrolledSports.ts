import { IBatch } from "./IBatch";
import { ISports } from "./ISports";
import { IUser } from "./IUser";

export interface IEnrolledSports{
    enrolledId : number;
    enrolledStatus : number;
    fees : number;
    userId : IUser;
    sportsId : ISports;
    batchId : IBatch;
    paymentStatus : number;
}