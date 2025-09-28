import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  title = "I'm Gauhar";
  subtitle = "I'm UI/UX Designer working in ** company";
  passion = "I’m passionate about front-end development, design, and creating modern web apps.";
  hobbies = "I enjoy experimenting with new technologies and building projects that combine creativity with functionality.";

  photoUrl = 'assets/profile.jpg';

  likes = 0;
  showMessage = false;

  addLike() {
    this.likes++;
  }
  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
  name = '';
  email = '';
  subscribed = false;
  subscribe() {
    if (this.email) {
      this.subscribed = true;
    }
  }
}
