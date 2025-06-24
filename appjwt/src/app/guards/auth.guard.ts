import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { KeycloakService } from '../services/keycloak.service';

export const authGuard: CanActivateFn = (route, state) => {
  const keycloak = inject(KeycloakService);

  const isAuthenticated = keycloak.isLoggedIn();

  if (!isAuthenticated) {
    // Redirige al login de Keycloak
    keycloak.login();
    return false; // Bloquea navegación hasta que el usuario inicie sesión
  }

  return true;
};
