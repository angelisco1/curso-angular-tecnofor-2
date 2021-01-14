import { Component, OnInit } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-cmp-observables',
  templateUrl: './cmp-observables.component.html',
  styleUrls: ['./cmp-observables.component.css']
})
export class CmpObservablesComponent implements OnInit {

  suscripcionInterval: Subscription;
  constructor() { }

  ngOnInit(): void {
    // this.obsInterval();
    // this.obsIntervalParesPor3();
    this.obsMiObservable();
  }

  obsInterval() {
    this.suscripcionInterval = interval(6000)
      .subscribe((dato) => {
        // console.log('¿Sigues viendo la serie?', dato);
        const siguesViendoLaSerie = confirm('¿Sigues viendo la serie?');
        if (!siguesViendoLaSerie) {
          this.suscripcionInterval.unsubscribe();
        }
      });
  }

  obsIntervalParesPor3() {
    interval(1000)
      .pipe(
        filter((num) => num % 2 == 0),
        map((num) => num * 3)
      )
      .subscribe((num) => {
        console.log(num);
      })
  }

  obsMiObservable() {
    new Observable((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('Hola, que tal?');
      }, 3000)
      setTimeout(() => {
        observer.next('Yo bien...');
      }, 6000)
      setTimeout(() => {
        observer.complete();
      }, 8000)
    })
      .subscribe(
        (msg) => {
          console.log(msg);
        },
        (err) => {
          console.log(err)
        },
        () => {
          console.log('Ya no hay más datos que enviarte');
        }
      )
  }

}
