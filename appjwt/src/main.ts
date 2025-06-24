import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { KeycloakService } from './app/services/keycloak.service';

/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

 const keycloak = new KeycloakService();

 keycloak.init().then(()=>{
   bootstrapApplication(
    AppComponent, {providers:[
      ...(appConfig.providers ?? []),
      {provide: KeycloakService, useValue:keycloak}
    ]}
  )
 });
