import { Routes } from '@angular/router';
import { NewPostComponent } from './Pages/new-post/new-post.component';
import { HomeComponent } from './Pages/home/home.component';
import { PostComponent } from './Pages/post/post.component';

export const routes: Routes = [
    { path: "", pathMatch: 'full', redirectTo: 'home' },
    { path: "post/:idpost", component: PostComponent },
    { path: "newpost", component: NewPostComponent },
    { path: "home", component: HomeComponent },
    { path: "**", redirectTo: 'normas' }
];
