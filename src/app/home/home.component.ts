import { Component, OnInit } from '@angular/core';
import {MessageService} from '..//message.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   message='hello'
  constructor(private messageservice :MessageService) { 
  

  }

  ngOnInit() {
  }
  setMessage(event)
  {
    alert(event.value)
    console.log(event.value)
    this.messageservice.setMessage(event.value)
  }

}
