import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'auth-form',
    templateUrl: './auth-form.component.html',
    styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {

  @Input() title = '';
  @Input() description = '';

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
