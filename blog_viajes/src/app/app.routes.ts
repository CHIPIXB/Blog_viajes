import { Routes } from '@angular/router';
import { NewPostComponent } from './Pages/new-post/new-post.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'normas' },
    { path: "newpost", component: NewPostComponent },
    { path: "**", redirectTo: 'normas' }
];
