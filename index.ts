import {Observable} from 'rxjs'

const observable= new Observable(subscriber=>{
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(()=>{
    subscriber.next(4);
    subscriber.complete();
  },2000)
})