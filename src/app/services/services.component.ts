import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  userid: any = '';
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    console.warn('user id is ', this.route.snapshot.paramMap.get('id'));
    this.userid = this.route.snapshot.paramMap.get('id');
  }
}
