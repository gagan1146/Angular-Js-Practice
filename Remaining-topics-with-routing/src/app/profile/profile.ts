import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name:string|undefined|null = "";
  email:string|undefined|null = "";
  constructor(route:ActivatedRoute){
    this.name = route.snapshot.paramMap.get('name');
    this.email = route.snapshot.paramMap.get('email');
  }
}
