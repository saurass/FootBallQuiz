import {Injectable} from '@angular/core';

declare var jquery: any;
declare var $: any;

@Injectable()
export class QuestionService {

  constructor() {
  }

  quiz = [
    {
      question: 'Which Player broke the world record transfer?',
      opt1: {id: 1, ans: 'Paul Pogba'},
      opt2: {id: 2, ans: 'Neymar'},
      opt3: {id: 3, ans: 'Dembele'},
      opt4: {id: 4, ans: 'Messi'},
      answers :[''],
      column: [''],
      question_part1: '',
      question_part2: '',
    },
    {
      question: 'Who came out of managerial retirement to take over Everton?',
      opt1: {id: 1, ans: 'Sam Allardyce'},
      opt2: {id: 2, ans: 'Terry Venables'},
      opt3: {id: 3, ans: 'Alan Curbishley'},
      opt4: {id: 4, ans: 'David Moyes'},
      answers:[''],
      column: [''],
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'Arrange the following in descending order of number of champions league trophies.Drag the options to rearrange them.',
      opt1: {id: 1, ans: ''},
      opt2: {id: 2, ans: ''},
      opt3: {id: 3, ans: ''},
      opt4: {id: 4, ans: ''},
      answers: ['Liverpool', 'Barcelona','Manchester United', 'Athletico Madrid'],
      column: [''],
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'Drag and rearrange the player names in second column to the corresponding club in the first column.',
      opt1: {id: 1, ans: ''},
      opt2: {id: 2, ans: ''},
      opt3: {id: 3, ans: ''},
      opt4: {id: 4, ans: ''},
      column: ['Liverpool', 'Barcelona', 'P.S.G', 'Manchester United'],
      answers: ['Neymar', 'Adam Lallana', 'Sanchez', 'Coutinho'],
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'Fill in the blank for the following line from Liverpool F.C Anthem .',
      opt1: {id: 1, ans: ''},
      opt2: {id: 2, ans: ''},
      opt3: {id: 3, ans: ''},
      opt4: {id: 4, ans: ''},
      question_part1: 'Walk on through the wind, Walk on through the rain Though your',
      question_part2: 'be tossed and blown',
      answers:[''],
      column: ['']
    },
    {
      question: 'Which club has most points in a season in EPL?',
      answers:[''],
      column: [''],
      opt1: {id: 1, ans: ''},
      opt2: {id: 2, ans: ''},
      opt3: {id: 3, ans: ''},
      opt4: {id: 4, ans: ''},
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'Gues the club from the following logo?',
      opt1: {id: 1, ans: 'Chelsea'},
      opt2: {id: 2, ans: 'Man City'},
      opt3: {id: 3, ans: 'Arsenal'},
      opt4: {id: 4, ans: 'Tottenham'},
      answers:[''],
      column: [''],
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'Manchester City signed just one player in January. Who was it?',
      opt1: {id: 1, ans: 'Benjamin Mendy'},
      opt2: {id: 2, ans: 'Gabriel Jesus'},
      opt3: {id: 3, ans: 'Leroy Sane'},
      opt4: {id: 4, ans: 'William Best'},
      answers:[''],
      column: [''],
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'How many managerial departures were there in the Premier League and Football League altogether?',
      opt1: {id: 1, ans: 67},
      opt2: {id: 2, ans: 52},
      opt3: {id: 3, ans: 43},
      opt4: {id: 4, ans: 31},
      answers:[''],
      column: [''],
      question_part1: '',
      question_part2: ''
    },
    {
      question: 'Between them, promoted sides Brighton, Huddersfield and Newcastle signed how many players in the summer transfer window?',
      opt1: {id: 1, ans: 20},
      opt2: {id: 2, ans: 33},
      opt3: {id: 3, ans: 9},
      opt4: {id: 4, ans: 15},
      answers:[''],
      column: [''],
      question_part1: '',
      question_part2: ''
    },
  ];

  multi: number[] = new Array(4);

  visited:number[] = new Array(1);

  answered:number[] = new Array(1);

  replies = [{ans:0}, {ans:[0,0,0,0]}, {ans:[1,2,3,4]}, {ans:[1,2,3,4]}, {ans:''}, {ans:''}, {ans:0}, {ans:0}, {ans:0}, {ans:0}];

  answers = [{ans:1},{ans:[1,3]},{ans:[2,1,4,3]},{ans:[1,3,2,4]},{ans:'text'},{ans:'another'},{ans:3},{ans:4},{ans:1},{ans:2}];

  mandatory = [1,3,5];

  canSubmit = true;

  countMandatory = 0;

  checkMandatory(qno, flag) {
    if (this.mandatory.indexOf(qno) != -1 && flag) {
      this.countMandatory++;
    } else if (this.mandatory.indexOf(qno) != -1 && !flag) {
      this.countMandatory--;
      this.canSubmit = true;
      $('#submit-test').addClass('tooltipped');
    }
    if (this.countMandatory == this.mandatory.length) {
      this.canSubmit = false;
      $('#submit-test').removeClass('tooltipped')
    }
  }
}
