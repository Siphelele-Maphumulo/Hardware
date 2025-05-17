import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { SlideComponent } from './slide/slide.component';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [ StartComponent, SlideComponent, LogoComponent],
  imports: [
    CommonModule
  ],
  exports: [ StartComponent, SlideComponent, LogoComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule { }
