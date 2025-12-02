import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  imports: [],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  name:string|null = ""; 
  email:string|null = ""; 
  password:string|null = ""; 
  getName(event:Event){
    this.name = (event.target as HTMLInputElement).value;
  }
  getEmail(event:Event){
    this.email = (event.target as HTMLInputElement).value;
  }
  getPassword(event:Event){
    this.password = (event.target as HTMLInputElement).value;
  }
}
