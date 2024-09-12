import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-work-experience-typewriter',
  templateUrl: './work-experience-typewriter.component.html',
  styleUrl: './work-experience-typewriter.component.css'
})
export class WorkExperienceTypewriterComponent implements OnInit, AfterViewInit {
  //Get the elemends from the HTML
  @ViewChild('tw4') typewriterElement4!: ElementRef; //Fetching the element

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    const target4 = this.typewriterElement4.nativeElement; //Assigning our fetched element (div with #tw id) into target

    const writer4 = new Typewriter(target4, { //Creating a new typewriter object, and hooking it up with the above mentioned HTML element reference
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 20,
      blinkSpeed: 500,
    })
    
    writer4
      .removeCursor()
      .addCursor()
      .type(`After graduating, I got real world software engineering experience with STEMCO, an engineering company with customers across the globe. I developed a 
          mobile app to program and communicate with their products, and it is currently available on the Google Play store and App store as
          "STEMCO Fleet Manager". As the main in house developer for most of my time there, I had to learn how to be resourceful and find answers on my own, 
          all while picking up new technologies like the Flutter framework.`)
      .start()
  }
}
