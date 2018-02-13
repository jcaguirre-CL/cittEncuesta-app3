import { Component, OnInit } from '@angular/core';
// import { routerTransition } from '../router.animations';
// import { trigger, style, transition, animate, group } from '@angular/animations';

/////////Try 1
// import { fadeInAnimation } from '../router.animations';
/////////

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
  // animations: [fadeInAnimation],
  // host: { '[@fadeInAnimation]': '' }
  // animations: [routerTransition()],
  // host: { '[@routerTransition]': '' }
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
