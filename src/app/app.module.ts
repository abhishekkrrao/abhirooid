import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Camera } from '@ionic-native/camera';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SearchPageModule } from '../pages/search/search.module';
import { PersonPageModule } from '../pages/person/person.module';
import { ExplorePageModule } from '../pages/explore/explore.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { TelegramPageModule } from '../pages/telegram/telegram.module';
import { CameraPageModule } from '../pages/camera/camera.module';
import { SingleviewPageModule } from '../pages/singleview/singleview.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { NativeStorage } from '@ionic-native/native-storage';
import { LikesPageModule } from '../pages/likes/likes.module';
import { NotificationPageModule } from '../pages/notification/notification.module';
import { OptionsPageModule } from '../pages/options/options.module';
import { PurchagedPageModule } from '../pages/purchaged/purchaged.module';
import { SavedPageModule } from '../pages/saved/saved.module';
import { SellingPageModule } from '../pages/selling/selling.module';
import { ReceiptsPageModule } from '../pages/receipts/receipts.module';
import { SoldPageModule } from '../pages/sold/sold.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    TabsPageModule,
    SearchPageModule,
    PersonPageModule,
    ExplorePageModule,
    LoginPageModule,
    SignupPageModule,
    TelegramPageModule,
    PersonPageModule,
    CameraPageModule,
    SingleviewPageModule,
    LikesPageModule,
    NotificationPageModule,
    OptionsPageModule,
    PurchagedPageModule,
    SavedPageModule,
    SellingPageModule,
    ReceiptsPageModule,
    SoldPageModule,
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
    AndroidPermissions,
    NativeStorage,
    Camera,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
