import { from } from "rxjs";

const observable = from([10, 20, 40, 50]);

const subscription = observable.subscribe(x => console.log(x));
subscription.unsubscribe();