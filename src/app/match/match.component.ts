import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  qno = 0;
  arrs = 'pdppdppd';
  sort = [1, 2, 3, 4];
  constructor(public quiz: QuestionService) {
  }
  ngOnInit() {
    var a = window.location.pathname;
    this.qno = parseInt(a.split('/')[1]);
    this.qno = this.qno-1;
    if(this.quiz.visited.indexOf(this.qno)==-1){
      this.quiz.visited.push(this.qno);
    }
    $(function () {
      $("#re").hide();
      $("#sortable").sortable({
        stop: function (event, ui) {
          var res = '';
          var children = $("#sortable").children();
          for (var i = 0; i < 4; i++) {
            res = res + children[i].id;
          }
          $('#res').val(res);
        }
      });
      $("#sortable").disableSelection();
    });
  }
  myFun(e) {
    this.arrs = $('#res').val();
    var b = this.arrs.split('').map(Number);
    this.quiz.replies[this.qno].ans = b;
    if(this.quiz.answered.indexOf(this.qno)==-1){
      this.quiz.answered.push(this.qno);
      this.quiz.checkMandatory(this.qno+1,true);
    }
  }
}
