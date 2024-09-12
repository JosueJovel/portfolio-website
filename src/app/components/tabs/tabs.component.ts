import {Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent {
  //Create boolean list of values here to represent their ngIf/ngClass condition
  displayValues = [true, false, false, false]

  //The following are grabbing our html elements we will be manipulating (line element and buttons list, using #btn and #line to grab them)
  @ViewChild('line') line!: ElementRef<HTMLDivElement>; //Grabbing just one child, #line (not static)
  @ViewChildren('btn') buttons!: QueryList<ElementRef<HTMLButtonElement>>; //Since we have mutliple #btn, we grab all of them with ViewChildren, as a QueryList
  showAboutMe: boolean = false;
  showTypewriter: boolean = false;
  typedTextBooleans: boolean[] = [false, false, false, false];
  previousFocus: number = 0;

  @HostListener('window:scroll', []) //Listen to scrolling commands
  onWindowScroll() { //When the window is scrolled down
    const st = window.scrollY || document.documentElement.scrollTop; //Get current Y position
    if (st >= 150) { //If current y position if greather than 150
      this.showAboutMe = true; //render about me block
    } 
    if (st >= 500) { //If current y position if greather than 500
      this.showTypewriter = true; //render typewriter block
    } 
  }

  switchFocus(selectionValue: number) {
    this.typedTextBooleans[this.previousFocus] = true;//This is so previous tab doesnt type again
    this.previousFocus = selectionValue;
    //Set all actives to false here by setting all ng flags to false
    this.displayValues.forEach((element, index) => {
      this.displayValues[index] = false;  //First, disable all the booleans on the screen by setting everything to false
    });

    this.displayValues[selectionValue] = true; //Then, make the one we clicked the one to currently be shown (and its button be highlighted)

    //ADJUSTING OUR NEW LINE:
    // Get the position of the clicked button using ViewChildren
    const button = this.buttons.toArray()[selectionValue].nativeElement; //First, grab the specific button we grabbed (known via the index it sends to this method, selectionValue)
    const lineElement = this.line.nativeElement; //We also grab the antive element of our line div

    // Calculate the new left position for the line

    //NOTE ON getBoundingClientRect(): This gives us the SIZE PROPERTIES of a particular element (left, top, right, bottom, x, y, width, and height)
    const rect = button.getBoundingClientRect(); //Here we store the positional info of our button element
    const parentRect = button.parentElement!.getBoundingClientRect(); //Here we store the positional info of the parent that contains the button
    const newLeft = rect.left - parentRect.left; //Calculate how far to move on the x axis.

    // Update the left position of the line (moving it on the x axis)
    lineElement.style.left = `${newLeft}px`;
    lineElement.style.width = `${rect.width}px`; // Adjust the width to match the button's width
  }
}
