import { Routes } from '@angular/router';
import { CharacterListComponentComponent } from './components/character-list-component/character-list-component.component';
import { CharacterFormComponentComponent } from './components/character-form-component/character-form-component.component';

export const routes: Routes = [
    
    {path: 'characters', component: CharacterListComponentComponent},
    {path: 'agregar', component: CharacterFormComponentComponent},
    {path: '', redirectTo: '/characters', pathMatch: 'full'},
    {path: '**', redirectTo: '/characters'}
];
