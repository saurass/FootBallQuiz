import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';
import {GetansDirective} from '../getans.directive';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.css']
})
export class ArrangeComponent implements OnInit {
  qno = 0;
  arrs;
  constructor(public quiz: QuestionService) {
  }

  ngOnInit() {
    var reply = this.quiz.replies[this.qno];
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
    var a = this.arrs.split('');
    this.quiz.replies[this.qno] = {ans: a};
    if(this.quiz.answered.indexOf(this.qno)==-1){
      this.quiz.answered.push(this.qno);
      this.quiz.checkMandatory(this.qno+1,true);
    }
  }

  moveOption(e){
    var id = e.target.id;
    var children = $('#items').children();
    for(var i=0;i<4;i++){
     $('#'+children[i].id).removeClass('active');
    }
    $('#'+id).addClass('active');
  }

}


