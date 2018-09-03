import { Component, OnInit } from '@angular/core';
import { Frames } from './frames'

@Component({
  selector: 'app-bowling',
  templateUrl: './bowling.component.html',
  styleUrls: ['./bowling.component.css']
})
export class BowlingComponent implements OnInit {

  private frames:Frames[];
  private throws:any =[];
  private currentScore:number = 0;
  private totalScore: number = 0;
  private throw: any = {};
 
  constructor() { }

  ngOnInit() {
  }

  public addThrow(roll1: number, roll2 : number): void{
     this.throw = {'first': roll1, 'second': roll2 };
     this.throws.push(this.throw);
      this.getScore();
      console.log(this.throws.length)
  
      if (Number(this.throw['first']) == 10) {
          console.log("inside spike")
          this.totalScore +=  20 + this.getSpikeScore();
      } else if (Number(this.throw['first'])+Number(this.throw['second']) == 10) {
          console.log("inside spare")
          this.totalScore +=  10 + this.getSpareScore();
      } else {
        console.log("inside open")
          this.totalScore += this.getOpenScore();
      }
  }

  public getScore(){
    this.currentScore = 0;
    this.throws.forEach(element => {
       let score =  +element['first'] + +element['second'];  
       this.currentScore +=score;    
    });
  }

     getSpikeScore() {
        return +this.throw['first'] + +this.throw['second']
        
  }

    getSpareScore() {
        return +this.throw['first'];
  }

    getOpenScore() {
        return  +this.throw['first'] + +this.throw['second'];
    }
}
