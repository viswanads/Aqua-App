import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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
              this.presentInvalidToast('Invalid Input.');
              return false;
            } else {
              if (data.newPassword != data.confPassword) {
                console.log('invalid');
                this.presentInvalidToast('New and confirm password should be same.');
                return false;
              } 
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
