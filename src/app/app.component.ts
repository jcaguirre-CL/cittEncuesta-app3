import { Component } from '@angular/core';
import { NavigationExtras, Router, RouterLink } from '@angular/router';
import { routerTransition } from './router.animations';
import { trigger, style, transition, animate, group, state } from '@angular/animations';

/////////Try 1
// import { fadeAnimation } from './router.animations';
/////////

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  ///////////////////////////////Intento 1
  animations: [routerTransition()],
  // animations: [routerTransition()],
  // host: { '[@routerTransition]': '' }
  // animations: [fadeAnimation]
  ///////////////////////////////////////

})
export class AppComponent {
  title = 'app';
  tiles = [
    { text: 'One', cols: 2, rows: 1, color: '#142A5C', rowHeight: '10px' },
    { text: 'Two', cols: 1, rows: 1, color: '#B7A0E8', rowHeight: '10px' }
  ];
  answer: string = '';
  answerDisplay: string = '';
  showSpinner: boolean = false;

  bindingVar = '';

  constructor(public router: Router) { }
//////////Try 1
  // public getRouterOutletState(outlet) {
  //   return outlet.isActivated ? outlet.activatedRoute : '';
  // }
//////////

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation
  }
  inicio() { 
    this.fadeOut();
    // this.toggle();
  }

  consultar() {
    this.fadeOut();
    // this.fadeIn();
    // this.toggle();
  }
  
  fadeIn() {
    this.bindingVar = 'fadeIn';
  }
  fadeOut() {
    this.bindingVar = 'fadeOut';
  }
  toggle() {
    this.bindingVar == 'fadeOut' ? this.fadeIn() : this.fadeOut();
  }

  showAnswer() {
    this.showSpinner = true;

    setTimeout(() => {
      this.answerDisplay = this.answer;
      this.showSpinner = false;
    }, 2000);
  }

}
