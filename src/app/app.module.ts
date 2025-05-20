import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { FormsModule } from '@angular/forms';
import { ImagePreviewModalModule } from './components/image-preview-modal/image-preview-modal.module';
import { MenuPopoverComponent } from './components/menu-popover/menu-popover.component';

// ✅ Add your ManagementSidebarComponent here
import { ManagementSidebarComponent } from './components/management-sidebar/management-sidebar.component';
import { ReplyModalComponent } from './components/reply-modal/reply-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPopoverComponent,
    ManagementSidebarComponent, // ✅ Declare it here
    ReplyModalComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    IonicModule.forRoot(), // ✅ keep only this, not twice
    AppRoutingModule,
    ImagePreviewModalModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
