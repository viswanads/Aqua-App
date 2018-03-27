import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';
import { TankDetailsPage } from '../tank-details/tank-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tankList = [{'id':1,'name':'Tank name 1'},{'id':2,'name':'Tank name 2'},{'id':3,'name':'Tank name 3'},{'id':4,'name':'Tank name 4'},{'id':5,'name':'Tank name 5'},{'id':6,'name':'Tank name 6'}];
  newTank:any;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private toastCtrl: ToastController) {

  }
  goToTankPage(tankId){
    this.navCtrl.push(TankDetailsPage, {tankId: tankId});
  }
  addAnotherTank(){
    this.presentPrompt();
  }
  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Add Tank',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Tank Name'
        }
      // },
      //   {
      //     name: 'password',
      //     placeholder: 'Password',
      //     type: 'password'
      //   }
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
          text: 'Add',
          handler: data => {
              // if (this.newTank.isValid(data.username, data.password)) {
              // logged in!
              // if(){

              // }
            if (data.username == '') {
              console.log('invalid');
              this.presentInvalidToast('Tank Name should not empty.');
              return false;
            } else {
              this.presentInvalidToast('Tank Name "'+data.username+'" added.');
              this.newTank = {'id':this.tankList.length,'name':data.username};
              this.tankList.push(this.newTank);
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
