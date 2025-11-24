import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  imports: [],
  templateUrl: './conditional.html',
  styleUrl: './conditional.css',
})
export class Conditional {
  Count:number = 0;
  a:boolean = true;
  colorVal:string = "red"
  Increment(){
    this.Count=this.Count+1;
  }
  Show(a:boolean){
    this.a = a;
  }
  Toggle(c:string){
    this.colorVal = c;
  }
}
