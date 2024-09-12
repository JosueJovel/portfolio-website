import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  showProjectHeader: boolean = false;
  showProject1: boolean = false;
  showProject2: boolean = false;
  showProject3: boolean = false;
  showProject4: boolean = false;

  goToLink(url: string){
    window.open(url, "_blank");
  }

  @HostListener('window:scroll', []) //Listen to scrolling commands
  onWindowScroll() { //When the window is scrolled down
    const st = window.scrollY || document.documentElement.scrollTop; //Get current Y position
    if (st >= 1850) { //If current y position if greather than 1850
      this.showProjectHeader = true; //render about me block
    } 
    if (st >= 2250) {
      this.showProject1 = true; //render typewriter block
    }
    if (st >= 2900) {
      this.showProject2 = true; //render typewriter block
    } 
    if (st >= 3450) {
      this.showProject3 = true; //render typewriter block
    }  
    if (st >= 4000) {
      this.showProject4 = true; //render typewriter block
    } 
  }

}
