import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {

  goToLink(url: string){
    window.open(url, "_blank");
  }

  openEmail() {
    window.location.href = "mailto:josuejovel12345@gmail.com"
  }
}
