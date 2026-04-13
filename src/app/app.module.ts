import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { ToastrModule } from 'ngx-toastr';
import { NgIconsModule } from '@ng-icons/core';
import {
  matClose,
  matError,
  matLocalOffer,
  matCalendarToday,
  matUpdate,
  matPrint,
  matDownload
} from '@ng-icons/material-icons/baseline';
import { CommonModules } from './common/common.module';
import { AuthInterceptor } from './core/auth.interceptor';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { TermsDisplayComponent } from './components/terms-display/terms-display.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LegelDocumentPgeComponent } from './legel-document-pge/legel-document-pge.component';
@NgModule({
  declarations: [AppComponent, TermsDisplayComponent, NotFoundComponent, LegelDocumentPgeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      maxOpened: 2,
      autoDismiss: true,
      preventDuplicates: true,
      countDuplicates: true,
      includeTitleDuplicates: true,
    }),
    NgIconsModule.withIcons({
      matClose,
      matError,
      matLocalOffer,
      matCalendarToday,
      matUpdate,
      matPrint,
      matDownload,
    }),
    CommonModules,
    HttpClientModule,
    RecaptchaV3Module,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage: 'en',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6Le_bmErAAAAADHcya858sj3rvWeAVLNG4D8YZI8',
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
