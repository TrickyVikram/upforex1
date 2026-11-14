import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TermsDisplayComponent } from './components/terms-display/terms-display.component';
import { LegelDocumentPgeComponent } from './legel-document-pge/legel-document-pge.component';

const loadComponentsModule = () =>
  import('./components/components.module').then((m) => m.ComponentsModule);

const routes: Routes = [
  ...['hi', 'ar', 'fr', 'es', 'de', 'zh-cn', 'zh-tw', 'ja', 'pt', 'ru'].map(
    (path) => ({
      path,
      component: NavbarComponent,
      loadChildren: loadComponentsModule,
    })
  ),
  {
    path: '',
    component: NavbarComponent,
    loadChildren: loadComponentsModule,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'terms',
    component: TermsDisplayComponent,
  },
  {
    path: 'terms/:version',
    component: TermsDisplayComponent,
  },
    {
    path: 'legal-documents',                     // <-- legal-doc 
    component: LegelDocumentPgeComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
