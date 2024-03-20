import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-headre',
  templateUrl: './headre.component.html',
  styleUrl: './headre.component.css'
})
export class HeadreComponent implements OnInit{
  UserLoginOn:boolean=false;
  constructor(){  }

  ngOnInit(): void {
  }
}
