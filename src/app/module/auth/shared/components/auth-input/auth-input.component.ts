import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'auth-input',
    templateUrl: './auth-input.component.html',
    styleUrls: ['./auth-input.component.scss'],
})
export class AuthInputComponent implements OnInit {

  @Input() id = '';
  @Input() type = '';
  @Input() name = '';
  @Input() label = '';

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
