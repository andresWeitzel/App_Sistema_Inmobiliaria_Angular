import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today : Date = new Date();
  githubProfile : string = "https://github.com/andresWeitzel/andresWeitzel";

  constructor() { }

  ngOnInit() {
  }

}
