import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatformRoutingModule } from './platform-routing.module';
import { Mt5Component } from './mt5/mt5.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModules } from 'src/app/common/common.module';

@NgModule({
  declarations: [Mt5Component],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    NgbCarouselModule,
    CommonModules,
  ],
})
export class PlatformsModule {}
