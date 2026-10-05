import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'auth-link',
    templateUrl: './auth-link.component.html',
    styleUrls: ['./auth-link.component.scss'],
})
export class AuthLinkComponent implements OnInit {

  @Input() value = '';
  @Input() link = '';

  constructor(
  ) {}

  ngOnInit(): void {

  }
}
