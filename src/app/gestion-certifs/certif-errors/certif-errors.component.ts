import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-certif-errors',
  templateUrl: './certif-errors.component.html',
  styleUrls: ['./certif-errors.component.css']
})
export class CertifErrorsComponent implements OnInit {
  @Input() validator:any;
  constructor() { }

  ngOnInit(): void {
  }

}
