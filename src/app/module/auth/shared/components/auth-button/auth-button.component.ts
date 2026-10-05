import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'auth-button',
    templateUrl: './auth-button.component.html',
    styleUrls: ['./auth-button.component.scss'],
})
export class AuthButtonComponent implements OnInit {

  @Input() value = '';

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
