import { Component,OnInit ,Input, Output,EventEmitter} from '@angular/core';
import {Movies} from '../App.const'

@Component({
  selector: 'app-newone',
  templateUrl: './newone.component.html',
  styleUrls: ['./newone.component.css'],
})

export class NewoneComponent implements OnInit {
  @Input() parentData:any;
  @Input() xyz:any;
  // @Output() xyz:EventEmitter<any> = new EventEmitter();

  titleNewOne =""
  ngOnInit() {
    // let data= {name:'laksh', age:24}
    // this.xyz.emit(data)
    // this.titleNewOne = 'Card Details5555';
  }
  SendData(){
    let data= {name:'laksh', age:24}
    //  this.xyz.emit(data)
    this.xyz(data);
  }
  MoviesData = Movies
  child = "childs"
  @Input() datesss:any
  @Input() fun:any
}
