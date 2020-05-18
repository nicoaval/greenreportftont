import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { InicioComponent } from './inicio/inicio.component';
import { PersonalComponent } from './personal/personal.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: '', component: LoginComponent },
    { path: 'inicio', component: InicioComponent },
    { path: 'personal', component: PersonalComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);