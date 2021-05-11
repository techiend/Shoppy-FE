import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {


  birthday = new Date(1988, 3, 15); // April 15, 1988 -- since month parameter is zero-based

  constructor(private router: Router) { }
 
  ngOnInit(): void {
  }

  onSubmit(): void{
    this.router.navigate(['/home']);
  }

}
