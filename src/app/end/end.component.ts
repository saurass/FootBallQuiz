import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';
import {AuthService} from '../auth.service';
import {Router} from "@angular/router";

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrls: ['./end.component.css']
})
export class EndComponent implements OnInit {

  constructor(private quiz: QuestionService, private router: Router,private auth: AuthService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      $('.modal').modal({
        dismissible: false,
      });
      $('#modal1').modal('open');
    });
  }

  testOver() {
    this.auth.user.name = '';
    this.auth.user.email = '';
    this.auth.user.mob_num = '';
    if(this.quiz.visited.length>1){
      this.quiz.visited = new Array(1);
    }
    if(this.quiz.visited.length>1){
      this.quiz.answered = new Array(1);
    }
    window.location.href='/';
  }


}
