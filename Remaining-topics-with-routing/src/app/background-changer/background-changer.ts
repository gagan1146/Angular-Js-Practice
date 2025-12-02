import { Component } from '@angular/core';

@Component({
  selector: 'app-background-changer',
  imports: [],
  templateUrl: './background-changer.html',
  styleUrl: './background-changer.css',
})
export class BackgroundChanger {
  color:string|null=""
  changeBackground(val:string){
    this.color = val;
  }
}
