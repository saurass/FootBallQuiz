import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../question.service';
import {Router} from "@angular/router";
import {AuthService} from '../auth.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  quess = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  user = {
    name:'',
    email:'',
    mob_num:''
  };
  canSubmit:boolean;
  visited:number[];
  answered:number[];
  mandatory:number;

  constructor(public quiz: QuestionService, private router: Router,private auth: AuthService) {
    this.user.name = auth.user.name;
    this.user.email = auth.user.email;
    this.user.mob_num = auth.user.mob_num;
    this.canSubmit = quiz.canSubmit;
    this.visited = quiz.visited;
    this.mandatory = quiz.countMandatory;
    this.answered = quiz.answered;
  }

  name='';
  ngOnInit() {
    var name = this.auth.user.name;
    if(name!=''){
      this.name = name;
    }

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

  process(e){
    var temp:number;
    var str:string;
    var btn_id:number;
    var curr_id = e.target.id.split('-')[1];
    var buttons = document.getElementsByClassName('questions');
    for(var i=0;i<buttons.length;i++){
      btn_id = parseInt(buttons[i].id.split('-')[1]);
      btn_id=btn_id-1;
      str=String(btn_id);
      if(this.quiz.visited.indexOf(btn_id)!=-1){    //question visited
        if(this.quiz.answered.indexOf(btn_id-1)!=-1){ //question answered
          if(curr_id!=btn_id){  //not current
            //console.log(btn_id);
            $('#'+buttons[i].id).removeClass('red');
            $('#'+buttons[i].id).removeClass('yellow');
            $('#'+buttons[i].id).addClass('green');
          }else{
            $('#'+buttons[i].id).removeClass('yellow');
            $('#'+buttons[i].id).removeClass('red');
            $('#'+buttons[i].id).addClass('blue');
          }
        }else{
          if(curr_id!=btn_id){
            $('#'+buttons[i].id).removeClass('red');
            $('#'+buttons[i].id).addClass('yellow');
          }else{
            $('#'+buttons[i].id).removeClass('yellow');
            $('#'+buttons[i].id).addClass('blue');
          }
        }
      }
    }
  }

}
