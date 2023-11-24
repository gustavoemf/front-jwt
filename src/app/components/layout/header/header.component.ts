import { Component, inject } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  loginService = new LoginService();

  userIsAdmin = this.loginService.hasPermission('ADMIN');
  userIsUser = this.loginService.hasPermission('USER');
}
