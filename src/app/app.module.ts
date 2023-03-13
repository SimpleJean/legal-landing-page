import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SectionHeroComponent } from './components/section-hero/section-hero.component';
import { SectionWhyComponent } from './components/section-why/section-why.component';
import { AchievementComponent } from './components/achievement/achievement.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { LegalConsultantComponent } from './components/legal-consultant/legal-consultant.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionHeroComponent,
    SectionWhyComponent,
    AchievementComponent,
    TestimonialComponent,
    LegalConsultantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
