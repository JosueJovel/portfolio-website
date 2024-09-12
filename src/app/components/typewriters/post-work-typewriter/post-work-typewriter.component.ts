import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-post-work-typewriter',
  templateUrl: './post-work-typewriter.component.html',
  styleUrl: './post-work-typewriter.component.css'
})
export class PostWorkTypewriterComponent implements OnInit, AfterViewInit {
  //Get the elemends from the HTML
  @ViewChild('tw5') typewriterElement5!: ElementRef; //Fetching the element

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    const target5 = this.typewriterElement5.nativeElement; //Assigning our fetched element (div with #tw id) into target

    const writer5 = new Typewriter(target5, { //Creating a new typewriter object, and hooking it up with the above mentioned HTML element reference
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 20,
      blinkSpeed: 500,
    })
    
    writer5
      .removeCursor()
      .addCursor()
      .type(`After my time at STEMCO, I was invited to take part in the FastTrack program, an intensive 8 week course sponsored by Cook Systems, an American IT consulting firm.
            There, I created projects using technologies like Java, Spring Boot, Typescript, and Angular, among others. Additionally, I learned about software paradigms such as RESTful architecture
            and CRUD operations. I led my team through the development of several projects, and the program taught us about expectations and proper communication within an enterprise development environment.`)
      .start()
  }
}
