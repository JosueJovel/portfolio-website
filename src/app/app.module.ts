import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SocialsComponent } from './components/socials/socials.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { IntroductionTypewriterComponent } from './components/typewriters/introduction-typewriter/introduction-typewriter.component';
import { EducationTypewriterComponent } from './components/typewriters/education-typewriter/education-typewriter.component';
import { WorkExperienceTypewriterComponent } from './components/typewriters/work-experience-typewriter/work-experience-typewriter.component';
import { PostWorkTypewriterComponent } from './components/typewriters/post-work-typewriter/post-work-typewriter.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { CopyrightComponent } from './components/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    SocialsComponent,
    SkillsComponent,
    IntroductionTypewriterComponent,
    EducationTypewriterComponent,
    WorkExperienceTypewriterComponent,
    PostWorkTypewriterComponent,
    TabsComponent,
    ProjectsComponent,
    ContactComponent,
    CopyrightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
