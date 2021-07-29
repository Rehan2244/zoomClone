import { Component } from '@angular/core';
import {Zoom} from '@ionic-native/zoom/ngx'
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  apiKey:any="EiCGxRJeS5SX5UiqX-Z-5Q"
  apiSecret:any="4r8XgPqiv3cJmZvLkkSlM5loALOhvRzkExNP"
   options:any = {
    "no_driving_mode":true,
    "no_invite":true,
    "no_meeting_end_message":true,
    "no_titlebar":false,
    "no_bottom_toolbar":false,
    "no_dial_in_via_phone":true,
    "no_dial_out_to_phone":true,
    "no_disconnect_audio":true,
    "no_share":true,
    "no_audio":true,
    "no_video":true,
    "no_meeting_error_message":true
    };

   
      userName:any=""
      password:any=""
      meetingNumber:any=""
      meetingPassword:any=""
      displayName:any=""
      zoomAccessToken:any=""
      zoomToken:any=""
      userId:any=""
  constructor(
    private zoom:Zoom,
    private toastCtrl:ToastController
  ) {

  
    this.zoom.initialize(this.apiKey, this.apiSecret)
  .then((success: any) => this.showToast(success))
  .catch((error: any) => this.showToast(error));



  
  }

  login(){ 
    // Log user in with Zoom username and password.
  this.zoom.login(this.userName, this.password)
.then((success: any) => this.showToast(success))
.catch((error: any) => this.showToast(error));
  }

  logout(){
    this.zoom.logout()
  .then((success: boolean) => this.showToast(success))
  .catch((error: any) => this.showToast(error));
  }


  checkLogin(){
    this.zoom.isLoggedIn()
  .then((success: boolean) => this.showToast(success))
  .catch((error: any) => this.showToast(error));
  }

  joinMeeting(){
  this.zoom.joinMeeting(this.meetingNumber, this.meetingPassword, this.displayName, this.options)
  .then((success: any) => this.showToast(success))
  .catch((error: any) => this.showToast(error));
  }

  existingMeetingNonLoggedInUser(){
  this.zoom.startMeetingWithZAK(this.meetingNumber, this.displayName, this.zoomToken, this.zoomAccessToken, this.userId, this.options)
  .then((success: any) => this.showToast(success))
  .catch((error: any) => this.showToast(error));
  }

  existingMeetingForLoggedInUser(){
    this.zoom.startMeeting(this.meetingNumber,this.options)
  .then((success: any) => this.showToast(success))
  .catch((error: any) => this.showToast(error));
  }

//   instantMeetingLoggedInUser(){
//     this.zoom.startInstantMeeting()
// .then((success: any) => this.showToast(success))
//   .catch((error: any) => this.showToast(error));
//   }


// setLanguage(){
// this.zoom.setLanguage("en-US")
//   .then((success: any) => this.showToast(success))
//   .catch((error: any) => this.showToast(error));
// }


  showToast(msg){
    this.toastCtrl.create({
      message:msg,
      duration:4000,
      position:"top"
    }).then(toasty=>{
      toasty.present()
    })
  }


  
}
