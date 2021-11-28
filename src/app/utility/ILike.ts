import { IBatch } from "./IBatch";
import { IUser } from "./IUser";

export interface ILike{
    likeId : number;
    userId : IUser;
    batchId : IBatch;
    timestamp : String;
}