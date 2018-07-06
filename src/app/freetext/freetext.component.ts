import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-freetext',
  templateUrl: './freetext.component.html',
  styleUrls: ['./freetext.component.css']
})
export class FreetextComponent implements OnInit {

  constructor(public quiz: QuestionService) { }
  qno=0;
  ngOnInit() {
    var a = window.location.pathname;
    this.qno = parseInt(a.split('/')[1]);
    this.qno = this.qno-1;
    if(this.quiz.visited.indexOf(this.qno)==-1){
      this.quiz.visited.push(this.qno);
    }
    this.retrieveAns();
  }

  updateAns(){
    var a = $("#free").val();
    this.quiz.replies[this.qno].ans = a;
    if(this.quiz.answered.indexOf(this.qno)==-1 && a!=''){
      this.quiz.answered.push(this.qno);
    }else if(this.quiz.answered.indexOf(this.qno)!=-1 && a==''){
      this.quiz.checkMandatory(this.qno+1,false);
    }
  }

  retrieveAns(){
    if(this.quiz.replies[this.qno].ans){
      $("#free").val(this.quiz.replies[this.qno].ans);
    }
  }

}
