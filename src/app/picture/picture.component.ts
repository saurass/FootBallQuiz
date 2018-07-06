import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {

  constructor(public quiz: QuestionService) { }
  qno=0;
  ngOnInit() {
    var a = window.location.pathname;
    this.qno = parseInt(a.split('/')[1]);
    this.qno = this.qno-1;
    if(this.quiz.visited.indexOf(this.qno)==-1){
      this.quiz.visited.push(this.qno);
    }
    this.getAnswers();
  }

  storeAnswer(id){
    if (this.quiz.replies[this.qno].ans) {
      if (this.quiz.replies[this.qno].ans == id) {
        var field = document.getElementById(id) as HTMLInputElement;
        field.checked = false;
        this.quiz.replies[this.qno].ans = '';
        this.quiz.checkMandatory(this.qno+1,false);
      }
    }
    if(this.quiz.answered.indexOf(this.qno)==-1){
      this.quiz.answered.push(this.qno);
      this.quiz.checkMandatory(this.qno+1,true);
      //console.log(this.quiz.countMandatory);
      //console.log(this.quiz.answered);
    }
    this.quiz.replies[this.qno] = {ans: id};
    //console.log(this.quiz.replies);
  }

  getAnswers(){
    if(this.quiz.replies[this.qno].ans) {
      var str:string;
      str = String(this.quiz.replies[this.qno].ans);
      var field = document.getElementById(str) as HTMLInputElement;
      field.checked = true;
    }
  }

}
