import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  qno = 0;

  constructor(public quiz: QuestionService) {
  }

  ngOnInit() {
    var a = window.location.pathname;
    this.qno = parseInt(a.split('/')[1]);
    this.qno = this.qno-1;
    if(this.quiz.visited.indexOf(this.qno)==-1){
      this.quiz.visited.push(this.qno);
    }
    this.getAnswers();
  }

  storeAnswer(id) {
    var str:string;
    if (this.quiz.replies[this.qno].ans) {
      var flag = false;
      for(var i=1;i<=4;i++){
        if(this.quiz.replies[this.qno].ans[i]==id){
          flag=true;
        }
      }
      if (flag) {
        var count=0;
        var field = document.getElementById(id) as HTMLInputElement;
        field.checked = false;
        this.quiz.replies[this.qno].ans[id]=0;
        for(i=1;i<=4;i++){
            if(this.quiz.replies[this.qno].ans[i]!=0){
              count++;
            }
        }
        if(count==0){
            this.quiz.checkMandatory(this.qno+1,false);
        }
      }
    }

    var a = [];
    for (var i = 1; i <= 4; i++) {
      var str:string;
      str = String(i);
      var elem = document.getElementById(str) as HTMLInputElement;
      if (elem.checked) {
        a.push(i);
      }
    }
    if(this.quiz.answered.indexOf(this.qno)==-1){
      this.quiz.answered.push(this.qno);
      this.quiz.checkMandatory(this.qno+1,true);
    }
    this.quiz.replies[this.qno] = {ans: a};
  }

  getAnswers() {
    if (this.quiz.replies[this.qno].ans) {

      for (var i = 0; i < 4; i++) {
        var val  = this.quiz.replies[this.qno].ans[i];
        if(val){
          var str:string;
          str=String(val);
          var field  = document.getElementById(str) as HTMLInputElement;
          field.checked = true;
        }
      }
    }
  }


}
