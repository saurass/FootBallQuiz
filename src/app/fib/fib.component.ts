import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-fib',
  templateUrl: './fib.component.html',
  styleUrls: ['./fib.component.css']
})
export class FibComponent implements OnInit {

  constructor(public quiz: QuestionService) { }
  qno = 0;
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
    var a = $("#fib").val();
    this.quiz.replies[this.qno].ans = a;
    if(this.quiz.answered.indexOf(this.qno)==-1 && a!=''){
      this.quiz.answered.push(this.qno);
      this.quiz.checkMandatory(this.qno+1,true);
    }
    else if(this.quiz.answered.indexOf(this.qno)!=-1 && a==''){
      this.quiz.answered.push(this.qno);
      this.quiz.checkMandatory(this.qno+1,false);
    }
  }

  retrieveAns(){
    if(this.quiz.replies[this.qno].ans){
      $("#fib").val(this.quiz.replies[this.qno].ans);
    }
  }


}
