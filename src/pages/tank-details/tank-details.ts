import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the TankDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tank-details',
  templateUrl: 'tank-details.html',
})
export class TankDetailsPage {
  tankId:number;
  tabValue = "income";
  tankIncome = {};
  tankExpenses = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
    this.tankId = navParams.get('tankId');
  }
  ionViewDidLoad() {
    this.getEarthquakes(this.tankId);
  }
  submitTankIncome(){
    console.log(this.tankIncome);
  }
  getEarthquakes(tankId){
    console.log('tankId',tankId);
  }
  changePassword() {
    let alert = this.alertCtrl.create({
      title: 'Change Password',
      inputs: [
        {
          name: 'oldPassword',
          type: 'text',
          placeholder: 'Old Password'
        },
        {
          name: 'newPassword',
          type: 'text',
          placeholder: 'New Password'
        },
        {
          name: 'confPassword',
          type: 'text',
          placeholder: 'confirm Password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Change',
          handler: data => {
              // if (this.newTank.isValid(data.username, data.password)) {
              // logged in!
              // if(){

              // }
            if (data.oldPassword == '' || data.newPassword == '' || data.confPassword == '') {
              console.log('invalid');
              this.presentInvalidToast('Invalid Data.');
              return false;
            } else {
              console.log('valid');
              this.presentInvalidToast('Password has been changed.');
            }
            // console.log(data);
          }
        }
      ]
    });
    alert.present();
  }
  presentInvalidToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      // console.log('Dismissed toast');
    });
    toast.present();
  }
}
