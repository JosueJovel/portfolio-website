import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-introduction-typewriter',
  templateUrl: './introduction-typewriter.component.html',
  styleUrl: './introduction-typewriter.component.css'
})
export class IntroductionTypewriterComponent implements OnInit, AfterViewInit {
  //Get the elemends from the HTML
  @ViewChild('tw2') typewriterElement2!: ElementRef; //Fetching the element

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    const target2 = this.typewriterElement2.nativeElement; //Assigning our fetched element (div with #tw id) into target

    const writer2 = new Typewriter(target2, { //Creating a new typewriter object, and hooking it up with the above mentioned HTML element reference
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 20,
      blinkSpeed: 500,
    })
    
    writer2
      .removeCursor()
      .addCursor()
      .type(`
         I started my journey with technology as a teenager. I learned how to build PCs, which taught me the nuances
         of part compatibility, saving costs, and assembly. I used my newly built rigs to do what any other
         teenager with too much free time would: game to my heart's content.`)
      .start()
  }
}
