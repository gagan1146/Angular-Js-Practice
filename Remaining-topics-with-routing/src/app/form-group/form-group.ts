import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './form-group.html',
  styleUrls: ['./form-group.css'],
})
export class FormGroupComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.form.valid) {
      const { userName, userEmail, userPassword } = this.form.value;

      // Navigate with values
      this.router.navigate(['/profile', { 
        name: userName, 
        email: userEmail, 
        password: userPassword 
      }]);
    }
  }
}
