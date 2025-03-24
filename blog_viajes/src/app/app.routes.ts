import { Routes } from '@angular/router';
import { NewPostComponent } from './Pages/new-post/new-post.component';
import { HomeComponent } from './Pages/home/home.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'normas' },
    { path: "newpost", component: NewPostComponent },
    { path: "home", component: HomeComponent },
    { path: "**", redirectTo: 'normas' }
];
