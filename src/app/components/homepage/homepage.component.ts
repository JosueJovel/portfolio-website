import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})

export class HomepageComponent implements OnInit, AfterViewInit{
  //Get the elemends from the HTML
  @ViewChild('tw') typewriterElement!: ElementRef; //Fetching the element
  
  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
      const target = this.typewriterElement.nativeElement; //Assigning our fetched element (div with #tw id) into target

      const writer = new Typewriter(target, { //Creating a new typewriter object, and hooking it up with the above mentioned HTML element reference
        loop: false,
        typeColor: 'white',
        cursorColor: 'white',
        typeSpeed: 23,
        blinkSpeed: 500,
      })
      
      writer
        .rest(1700)
        .type("I am Josue Jovel, a Full Stack Software Engineer seeking out new knowledge, tough problems, and wonderful people.")
        .start()
  }
  
}
