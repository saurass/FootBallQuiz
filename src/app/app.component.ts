import {Component, OnInit} from '@angular/core';
import {QuestionService} from './question.service';
import {Router} from '@angular/router';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  quess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  qno = 0;

  canSubmit:boolean;
  visited:number[];
  answered:number[];
  mandatory:number;

  constructor(private quiz: QuestionService, private router: Router) {
  this.canSubmit = quiz.canSubmit;
  this.visited = quiz.visited;
  this.mandatory = quiz.countMandatory;
  this.answered = quiz.answered;
  }

  ngOnInit() {

  }

  nextQ() {
    var a = window.location.pathname;
    this.qno = parseInt(a.split('/')[1]);
    this.qno = this.qno-1;
    var q = this.qno + 2;
    this.router.navigate([q]);
  }

  prevQ() {
    var a = window.location.pathname;
    this.qno = parseInt(a.split('/')[1]);
    this.qno = this.qno - 1;
    var q = this.qno;
    this.router.navigate([q]);
  }

  process(e) {
    var curr_id = e.target.id.split('-')[1];
    this.changeColor(curr_id);
  }

  changeColor(curr_id){
    var temp:number;
    var btn_id:number;
    var str:string;
    var buttons = document.getElementsByClassName('questions');
    for (var i = 0; i < buttons.length; i++) {
      str = buttons[i].id.split('-')[1];
      btn_id = parseInt(str)-1;
      temp = this.quiz.visited.indexOf(btn_id);
      if ( temp!= -1) {    //question visited
        temp = this.quiz.answered.indexOf(btn_id);
        if (temp!= -1) { //question answered
          if (curr_id != btn_id) {  //not current
            $('#' + buttons[i].id).removeClass('red');
            $('#' + buttons[i].id).removeClass('yellow');
            $('#' + buttons[i].id).addClass('green');
          } else {
            $('#' + buttons[i].id).removeClass('yellow');
            $('#' + buttons[i].id).removeClass('red');
            $('#' + buttons[i].id).addClass('blue');
          }
        } else {
          if (curr_id != btn_id) {
            $('#' + buttons[i].id).removeClass('red');
            $('#' + buttons[i].id).addClass('yellow');
          } else {
            $('#' + buttons[i].id).removeClass('yellow');
            $('#' + buttons[i].id).addClass('blue');
          }
        }
      }
    }
  }


}
$(document).ready(function () {
    $('.tooltipped').tooltip({delay: 50});
    $('.button-collapse').sideNav({
        menuWidth: 350, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
      }
    );
  }
);
