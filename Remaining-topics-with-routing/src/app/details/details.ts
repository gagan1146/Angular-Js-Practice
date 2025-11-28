import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  userName: string = '';

  constructor(private route: ActivatedRoute) {
    this.userName = this.route.snapshot.paramMap.get('name') || '';
  }
}
