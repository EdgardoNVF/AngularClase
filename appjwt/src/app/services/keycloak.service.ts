import { Injectable } from '@angular/core';
import Keycloak from 'keycloak-js';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {
  private keycloak: Keycloak;

  constructor() {
    /*inicializamos objeto de keycloak */
    this.keycloak = new Keycloak({
      url: 'http://localhost:8080',
      realm: 'master',
      clientId: 'angularapp'
    });
  }

  init(): Promise<void> {

    return this.keycloak?.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      checkLoginIframe: true
    }).then(() => {
      console.log('Keycloak initialized. Authenticated:', this.isLoggedIn());
    });
  }

  login(): void {
    this.keycloak.login({
      redirectUri: window.location.origin + '/private'
    });
  }

  authenticated(): boolean {
    return this.keycloak?.authenticated || false;
  }

  isLoggedIn(): boolean {
    return !!this.keycloak?.token;
  }

  getToken(): string | undefined {
    return this.keycloak?.token;
  }

  logout() {
    //this.keycloak?.logout();
    this.keycloak?.logout({
      redirectUri: window.location.origin + "/"
    })
  }

  getUserName() {
    return this.keycloak?.tokenParsed?.['preferred_username'];
  }
}
