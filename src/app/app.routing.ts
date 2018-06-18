import { ChatComponent } from './chat/chat.component';
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    { path: 'chat', component: ChatComponent },
    { path: '', component: LoginComponent},
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
