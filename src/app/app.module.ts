import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule
} from '@angular/core';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  FormsModule
} from '@angular/forms';

// PrimeNG
import {
  AccordionModule
} from 'primeng/primeng';
import {
  PanelModule
} from 'primeng/primeng';
import {
  ButtonModule
} from 'primeng/primeng';
import {
  RadioButtonModule
} from 'primeng/primeng';
import {
  MenubarModule
} from 'primeng/menubar';
import {
  CardModule
} from 'primeng/card';
import {
  InputTextareaModule
} from 'primeng/inputtextarea';

// Firebase
import {
  AngularFirestoreModule
} from 'angularfire2/firestore';
import {
  AngularFireModule
} from 'angularfire2';

// Angular
import {
  AppComponent
} from './app.component';
import {
  environment
} from '../environments/environment';
import {
  RouterModule,
  Routes
} from '@angular/router';

// Pages
import {
  NavigationComponent
} from './components/shared/layout/navigation/navigation.component';
import {
  FooterComponent
} from './components/shared/layout/footer/footer.component';
import {
  ContactUsPageComponent
} from './components/contact-us-page/contact-us-page.component';
import {
  HomeComponent
} from './components/home/home.component';

// Routes
const appRoutes: Routes = [{
    path: 'home',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'contact-us',
    component: ContactUsPageComponent
  },
  //   { path: 'hero/:id',      component: HeroDetailComponent },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  //   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    ContactUsPageComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    // Router
    RouterModule.forRoot(
      appRoutes, {
        enableTracing: true
      } // <-- debugging purposes only
    ),
    // PrimeNG
    AccordionModule,
    PanelModule,
    ButtonModule,
    RadioButtonModule,
    MenubarModule,
    CardModule,
    InputTextareaModule,
    // Firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
