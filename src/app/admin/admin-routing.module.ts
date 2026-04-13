import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { authGuard } from '../core/guards/auth.guard';
import { MainComponent } from './main/main.component';
import { loginGuard } from '../core/guards/login.guard';
import { AdminNavbarComponent } from '../layouts/admin-navbar/admin-navbar.component';
import { CategoryComponent } from './category/category.component';
import { BlogsComponent } from './blogs/blogs.component';

import { TermsListComponent } from './terms/terms-list.component';
import { TermsFormComponent } from './terms/terms-form.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [loginGuard],
  },
  {
    path: '',
    component: AdminNavbarComponent,
    children: [
      {
        path: 'home',
        component: MainComponent,
      },
      {
        path: 'category',
        component: CategoryComponent,
      },
      {
        path: 'blogs',
        component: BlogsComponent,
      },

        {
        path: 'terms',
        component: TermsListComponent,
      },
      {
        path: 'terms/create',
        component: TermsFormComponent,
      },
      {
        path: 'terms/edit/:id',
        component: TermsFormComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
