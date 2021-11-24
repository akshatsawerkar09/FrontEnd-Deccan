import { IBatch } from "./IBatch";
import { ISports } from "./ISports";
import { IUser } from "./IUser";

export interface IEnrolledSports{
    enrolledId : number;
    enrolledStatus : number;
    fees : number;
    user : IUser;
    sport : ISports;
    batch : IBatch;
    paymentStatus : number;
}