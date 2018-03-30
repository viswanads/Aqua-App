import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController,ModalController } from 'ionic-angular';

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
  tabValue = "expenses";
  tankIncome = {};
  tankExpenses = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private toastCtrl: ToastController,public modalCtrl: ModalController) {
    this.tankId = navParams.get('tankId');
  }
  ionViewDidLoad() {
    this.dataParams(this.tankId);
  }
  submitTankIncome(){
    console.log(this.tankIncome);
  }
  dataParams(tankId){
    console.log('tankId',tankId);
  }
  submitTankExpenses(){
    console.log(this.tankExpenses);
  }
  maintenanceExpenses() {
    let alert = this.alertCtrl.create({
      title: 'Maintenance Expenses',
      inputs: [
        {
          name: 'seeds',
          type: 'number',
          placeholder: 'Seeds'
        },
        {
          name: 'lease',
          type: 'number',
          placeholder: 'Lease'
        },
        {
          name: 'current',
          type: 'number',
          placeholder: 'Current'
        },
        {
          name: 'Diesel',
          type: 'number',
          placeholder: 'diesel'
        },
        {
          name: 'fanSet',
          type: 'number',
          placeholder: 'Fan Set'
        },
        {
          name: 'feed',
          type: 'number',
          placeholder: 'Feed'
        },
        {
          name: 'food',
          type: 'number',
          placeholder: 'Food'
        },
        {
          name: 'generator',
          type: 'number',
          placeholder: 'Generator'
        },
        {
          name: 'labour',
          type: 'number',
          placeholder: 'Labour'
        },
        {
          name: 'maintenance',
          type: 'number',
          placeholder: 'Maintenance'
        },
        {
          name: 'medicines',
          type: 'number',
          placeholder: 'Medicines'
        },
        {
          name: 'salaries',
          type: 'number',
          placeholder: 'Salaries'
        },
        {
          name: 'transport',
          type: 'number',
          placeholder: 'Transport'
        },
        {
          name: 'others',
          type: 'number',
          placeholder: 'Other Amount'
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
