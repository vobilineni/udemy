import { Component, OnInit } from '@angular/core';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    /*timeout(() => {
      this.allowNewServer = true;
    }, 2000);*/
  }
  ngOnInit() {
  }

}
