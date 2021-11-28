import { IBatch } from "./IBatch";
import { IComment } from "./IComment";
import { ILike } from "./ILike";

export interface IBatchLikeCommentDTO{
    batch : IBatch;
    likes : ILike[];
    comment : IComment[];
    likeStatus  : boolean;
}