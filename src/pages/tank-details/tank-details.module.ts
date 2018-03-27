import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TankDetailsPage } from './tank-details';

@NgModule({
  declarations: [
    TankDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TankDetailsPage),
  ],
})
export class TankDetailsPageModule {}
