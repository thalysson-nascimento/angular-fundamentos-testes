import { NgModule } from '@angular/core';
import { HomeModule } from '@components/home/home.module';

const baseModules = [HomeModule];

@NgModule({
  imports: [baseModules],
  exports: [baseModules],
  declarations: [],
})
export class SharedModule {}
