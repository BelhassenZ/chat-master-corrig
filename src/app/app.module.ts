import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {AngularFireDatabaseModule} from "angularfire2/database";
import {MessageComponent} from "../components/message/message";
import { MessagingProvider } from '../providers/messaging/messaging';
import {SendformComponent} from "../components/sendform/sendform";
import { AdherantSerivce } from '../providers/adherant/adherant.service';


const config = {
  apiKey: "AIzaSyCGX1E244MSZ5rBzsNSZH3GOCPWKOA78ew",
  authDomain: "chat-3d025.firebaseapp.com",
  databaseURL: "https://chat-3d025.firebaseio.com",
  projectId: "chat-3d025",
  storageBucket: "chat-3d025.appspot.com",
  messagingSenderId: "700308797648"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MessageComponent,
    SendformComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MessagingProvider,
    AdherantSerivce
  ]
})
export class AppModule {}
