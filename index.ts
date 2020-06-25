import { Observable } from "rxjs";

const observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 2000);
});

console.log("I'm about to subscribe");

const subscriber = observable.subscribe({
  next(x) {
    console.log("We got: " + x);
  },
  error(err) {
    console.log("Error is:" + err);
  },
  complete() {
    console.log("COMPLETED!!");
  }
});

subscriber.unsubscribe();
console.log("All DOne");
