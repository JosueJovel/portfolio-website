import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('navbar') navbar!: ElementRef; //Fetching the element
  lastScrollTop = 0;
  navbarHidden = false;

  ngAfterViewInit() {

  }

  @HostListener('window:scroll', []) //Listen to scrolling commands
  onWindowScroll() { //When the window is scrolled down
    const st = window.scrollY || document.documentElement.scrollTop;

    if (st > this.lastScrollTop) {
      // Hide navbar is scrolled down
      console.log("SCROLL DOWN DETECTED, HIDE NAVBAR")
      this.navbarHidden = true;
    } else {
      // Hide navbar if scrolled up
      console.log("SCROLL UP DETECTED, REVEAL NAVBAR")
      this.navbarHidden = false;
    }

    this.lastScrollTop = st <= 0 ? 0 : st; // IMPORTANT: This line will account for scrolling UP

    //Depending on the earlier check if we should hide/show navbar, we adjusut it accordingly
    if (this.navbar) {
      if (this.navbarHidden) { //If we want to hide the navbar
        this.navbar.nativeElement.classList.add('hidden');
      } else { //If we want to reveal the navbar
        this.navbar.nativeElement.classList.remove('hidden');
      }
    }
  }

  scrollToLocation(pixels: number){
    window.scrollTo({
      top: pixels,
      left: 0,
      behavior: "smooth",
    }); //Scroll to the px location of choice
  }

  celebrate() {
    confetti({
      particleCount: 200,
      startVelocity: 30, 
      spread: 360, 
      origin: { x: Math.random(), y: Math.random()},
      zIndex: 9999,
      scalar: .75,
    });
  }
}
