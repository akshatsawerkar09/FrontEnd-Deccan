import { IBatch } from "./IBatch";
import { IUser } from "./IUser";

export interface IComment{
    commentId : number;
    userId : IUser;
    batchId : IBatch;
    comment : String;
    timestamp : String;
}