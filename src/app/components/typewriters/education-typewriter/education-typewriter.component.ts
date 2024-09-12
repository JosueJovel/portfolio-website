import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-education-typewriter',
  templateUrl: './education-typewriter.component.html',
  styleUrl: './education-typewriter.component.css'
})
export class EducationTypewriterComponent  implements OnInit, AfterViewInit {
  //Get the elemends from the HTML
  @ViewChild('tw3') typewriterElement3!: ElementRef; //Fetching the element

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    const target3 = this.typewriterElement3.nativeElement; //Assigning our fetched element (div with #tw id) into target

    const writer3 = new Typewriter(target3, { //Creating a new typewriter object, and hooking it up with the above mentioned HTML element reference
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 20,
      blinkSpeed: 500,
    })
    
    writer3
      .removeCursor()
      .addCursor()
      .type(`I was introduced to the world of software in college. The craft of programming resonated with me, which motivated 
           me to graduate with a Bachelor's in Computer Science and a 3.51 GPA from the University of Texas.
           Not only did I earn valuable knowledge about data structures and algorithms, but I got exposure to cooperating
           with other software engineers via group projects.`)
      .start()
  }
}
