import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {QuestionService} from '../question.service';

declare var jquery: any;
declare var $: any;
@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  constructor(private auth: AuthService,private quiz: QuestionService) {
  }

  ngOnInit() {
    $(document).ready(function () {
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal({
        dismissible: false,
        complete: function() {
          var name = $("#name").val();
          var email = $("#email").val();
          var mob_num = $("#mob_num").val();
          if(name==='' || email==='' || mob_num===''){
            $('#modal1').modal('open');
          }
        }
      });
      $('#modal1').modal('open');
    });
  }

  setuser() {
    var name = $("#name").val();
    var email = $("#email").val();
    var mob_num = $("#mob_num").val();
    this.auth.setUserLoggedIn(name, email, mob_num);
  }

}
