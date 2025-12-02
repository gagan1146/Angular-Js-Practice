import { Component } from '@angular/core';
import { Child } from "../child/child";

@Component({
  selector: 'app-parent-to-child-data',
  imports: [Child],
  templateUrl: './parent-to-child-data.html',
  styleUrl: './parent-to-child-data.css',
})
export class ParentToChildData {
  userName:string|null="Sam";
}
