
import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  imports: [ɵInternalFormsSharedModule],
  templateUrl: './form-using-ng.html',
  styleUrl: './form-using-ng.css',
})
export class FormUsingNg {
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
