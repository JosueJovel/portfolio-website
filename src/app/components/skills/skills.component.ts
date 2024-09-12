import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  showSkillsHeader: boolean = false;
  showSkillsBlock1: boolean = false;
  showSkillsBlock2: boolean = false;
  showSkillsBlock3: boolean = false;

  @HostListener('window:scroll', []) //Listen to scrolling commands
  onWindowScroll() { //When the window is scrolled down
    const st = window.scrollY || document.documentElement.scrollTop; //Get current Y position
    if (st >= 1000) { //If current y position if greather than 1250
      this.showSkillsHeader= true; //render skillsHeader
    } 
    if (st >= 1200) { //If current y position if greather than 1250
      this.showSkillsBlock1 = true; //render skillBlock1
    } 
    if( st >= 1400) {
      this.showSkillsBlock2 = true;
    } 
    if(st >= 1600) {
      this.showSkillsBlock3 = true;
    }
    
  }
}
