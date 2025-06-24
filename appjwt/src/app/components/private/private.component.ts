import { Component, inject, Inject, signal } from '@angular/core';
import { KeycloakService } from '../../services/keycloak.service';

@Component({
  selector: 'app-private',
  imports: [],
  templateUrl: './private.component.html',
  styleUrl: './private.component.css'
})
export class PrivateComponent {
  private service= inject(KeycloakService);
  nameUser=signal<string>("");

  constructor(){
     this.nameUser.set(this.service.getUserName()??"");
  }


}
