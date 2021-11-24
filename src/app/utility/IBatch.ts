import {  ISports } from "./ISports"; 

export interface IBatch{
    batchId : number;
    batchStrength : number;
    batchName : string;
    coachName : string;
    offer  : string;
    discountOffered : number;
    sportsId : ISports;
    startTime : string;
    endTime : string;
    timestamp : string;
}