import { Component, ElementRef, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  @ViewChild('outro') outroTypewriter!: ElementRef; //Fetching the element

  ngOnInit(): void {
      
  }

  ngAfterViewInit(): void {
    const target3 = this.outroTypewriter.nativeElement; //Assigning our fetched element (div with #tw id) into target

    const writer3 = new Typewriter(target3, { //Creating a new typewriter object, and hooking it up with the above mentioned HTML element reference
      loop: false,
      typeColor: 'white',
      cursorColor: 'white',
      typeSpeed: 20,
      blinkSpeed: 500,
    })
    
    writer3
      .removeCursor()
      .type(`Wether its strictly business or just a casual chat, I would love to hear more from you. Use my socials below to reach out anytime! My email is josuejovel12345@gmail.com`)
      .start()
  }

  openEmail() {
    window.location.href = "mailto:josuejovel12345@gmail.com"
  }
}
