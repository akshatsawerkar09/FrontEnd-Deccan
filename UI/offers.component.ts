import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BatchService } from 'src/app/utility/batch.service';
import { CommentService } from 'src/app/utility/comment.service';
import { IBatch } from 'src/app/utility/IBatch';
import { IBatchLikeCommentDTO } from 'src/app/utility/IBatchLikeCommentDTO';
import { IComment } from 'src/app/utility/IComment';
import { ILike } from 'src/app/utility/ILike';
import { IUser } from 'src/app/utility/IUser';
import { LikeService } from 'src/app/utility/like.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {

  user!: IUser;

  batches!: IBatch[];

  likes!: ILike[];

  comments!: IComment[];

  commentObj!: IComment;

  batchLikeCommentDto: any[] = [];
  likesObj: any[] = [];

  flag : any = false;

 // batchLikeCommentDto!: IBatchLikeCommentDTO[];
 // batchLikeCommentDto!: { batch: IBatch; likes: ILike[]; comments : IComment[] }[]; 

  batchLikeCommentDtoObj: any;

  selectedBatch : any;

// batchLikeCommentDtoObj!: { batch: IBatch; likes: ILike[]; comments : IComment[] };

  i!: number;

  newComment!: any;

  newLike : any;

  batchLikeCommentDtoForm= new FormGroup({
    batch : new FormControl('',[Validators.required]),
    likes : new FormControl('',[Validators.required]),
    comment : new FormControl('',[Validators.required])
  });


  constructor(private _batchService : BatchService , private _likeService : LikeService 
    , private _commentService : CommentService ) { }

  ngOnInit(): void {
   // this.batchLikeCommentDto = this.batchLikeCommentDtoForm.value;
    //this.batchLikeCommentDtoObj = this.batchLikeCommentDtoForm.value;

    this.i = 0;

    this.user = JSON.parse(sessionStorage['user']);
    console.log(this.user);

    this._batchService.getOffers().subscribe(
      data => {
        console.log(data);
        this.batches = data;
        console.log(this.batches);

        this._likeService.getAllLikes().subscribe(
          data => {
            console.log(data);
            this.likes = data;
            console.log(this.likes);

            this._commentService.getAllComments().subscribe(
              data => {
                console.log(data);
                this.comments = data;
                console.log(this.comments);

                for (var batch of this.batches) {
                   
                  //this.batchLikeCommentDto[this.i].batch = batch;
             //     console.log(batch);
             //     this.batchLikeCommentDtoObj.batch = batch;
                  //this.batchLikeCommentDto[this.i].likes = this.likes.filter(like => like.batchId.batchId === batch.batchId);
             //     console.log(this.likes.filter(like => like.batchId.batchId === batch.batchId));
             //    this.batchLikeCommentDtoObj.likes = this.likes.filter(like => like.batchId.batchId === batch.batchId);
                 //this.batchLikeCommentDto[this.i].comments = this.comments.filter(comment => comment.batchId.batchId === batch.batchId);
             //     console.log(this.comments.filter(comment => comment.batchId.batchId === batch.batchId));
             //    this.batchLikeCommentDtoObj.comment = this.comments.filter(comment => comment.batchId.batchId === batch.batchId);
                //this.i++;
               this.likesObj = this.likes.filter(like => like.batchId.batchId === batch.batchId)
                for( let like of this.likesObj)
                { 
                  if(like.userId.userId === this.user.userId)
                  {
                    this.flag = true;
                  }
                }

                this.batchLikeCommentDtoObj = {
                  batch : batch,
                  likes : this.likes.filter(like => like.batchId.batchId === batch.batchId) ,
                  comments : this.comments.filter(comment => comment.batchId.batchId === batch.batchId) ,
                  likeStatus : this.flag
                }
                console.log(this.batchLikeCommentDtoObj)
                 this.batchLikeCommentDto.push(this.batchLikeCommentDtoObj);
                 this.flag = false;
                 //console.log(this.batchLikeCommentDto);
              }
               
                 console.log(this.batchLikeCommentDto);
              }
            )
          }
        )
      }
    ) 
  }


  likeForm= new FormGroup({
    userId : new FormControl('',[Validators.required]),
    batchId : new FormControl('',[Validators.required])
  });
  

  commentForm= new FormGroup({
    userId : new FormControl('',[Validators.required]),
    batchId : new FormControl('',[Validators.required]),
    comment : new FormControl('',[Validators.required])
  });

  addComment(commentForm : FormGroup , batchId : number)
  {
    console.log(commentForm.value);
    console.log(batchId);
    this.selectedBatch = this.batches.find(batch => batch.batchId === batchId);
    console.log(this.selectedBatch);

    this.newComment = commentForm.value;
    this.newComment.batchId = this.selectedBatch;
    this.newComment.userId =  this.user;
    console.log(this.newComment);

    this._commentService.addComment(this.newComment).subscribe(
      data => {
        console.log(data);
      }
    )

    window.location.reload();
  }

  addLike( batchId : number)
  {
    this.selectedBatch = this.batches.find(batch => batch.batchId === batchId);

    this.newLike = this.likeForm.value;
    this.newLike.batchId = this.selectedBatch;
    this.newLike.userId = this.user;

    console.log(this.newLike);

    this._likeService.addLike(this.newLike).subscribe(
      data => {
        console.log(data);
      }
    )
    window.location.reload();
  }

  removeLike( batchId : number)
  {
    this.selectedBatch = this.batches.find(batch => batch.batchId === batchId);

    this.newLike = this.likeForm.value;
    this.newLike.batchId = this.selectedBatch;
    this.newLike.userId = this.user;

    console.log(this.newLike);

    this._likeService.removeLike(this.newLike).subscribe(
      data => {
        console.log(data);
      }
    )
    window.location.reload();
  }
}
