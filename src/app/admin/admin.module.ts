import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../core/services/admin.service';
import { MainComponent } from './main/main.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { CommonModules } from '../common/common.module';
import { CategoryComponent } from './category/category.component';
import { BlogsComponent } from './blogs/blogs.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { AngularEditorModule } from '@kolkov/angular-editor';


import { TermsListComponent } from './terms/terms-list.component';
import { TermsFormComponent } from './terms/terms-form.component';
import { UsersComponent } from './users/users.component';
import { NgIconsModule } from '@ng-icons/core';


import {
  matAdd,
  matEdit,
  matVisibility,
  matCheckCircle,
  matDescription,
  matArrowBack,
  matDelete,
} from '@ng-icons/material-icons/baseline';



@NgModule({
  declarations: [
    LoginComponent,
    MainComponent,
    CategoryComponent,
    BlogsComponent,
    BlogsComponent,

    TermsListComponent,
    TermsFormComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LayoutsModule,
    CommonModules,
    NgSelectModule,
    AngularEditorModule,
     NgIconsModule.withIcons({
      matAdd,
      matEdit,
      matVisibility,
      matCheckCircle,
      matDescription,
      matArrowBack,
      matDelete,
    }),
  ],
  providers: [AdminService],
})
export class AdminModule {}
