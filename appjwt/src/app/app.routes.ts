import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PrivateComponent } from './components/private/private.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'private', component:PrivateComponent, canActivate:[authGuard]}
];
