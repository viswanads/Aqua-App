import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TankPage } from './tank';

@NgModule({
  declarations: [
    TankPage,
  ],
  imports: [
    IonicPageModule.forChild(TankPage),
  ],
})
export class TankPageModule {}
