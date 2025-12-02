import { KeyValuePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, ɵInternalFormsSharedModule } from "@angular/forms";

@Component({
  selector: 'app-template-form',
  imports: [ FormsModule,KeyValuePipe],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css',
})
export class TemplateForm {
  // name:string|null = ""; 
  // email:string|null = ""; 
  // password:string|null = ""; 
  addDetails(userForm: NgForm){
    console.log("User Added", userForm.value);
  }
}
