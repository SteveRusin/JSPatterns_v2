function Observer() {
    const subscribers = [];

    this.subscribe = newSubscriber => subscribers.push(newSubscriber);
    this.unsubscribe = targetSubscriber => {
        const indexOfTarget = subscribers.indexOf(targetSubscriber);
        if(~indexOfTarget) {
            subscribers.splice(indexOfTarget, 1);
        } else {
            console.warn(`Subscriber ${targetSubscriber} not found`);
        }
    }

    this.notify = (data, context = window) => {
        subscribers.forEach((subscriber)=>{
            subscriber.call(context, data);
        })
    }
}

function eventHandler(data) {
    console.log(`Data passed to subscribers: ${data}`)
}

const observable = new Observer();

observable.subscribe(eventHandler);
observable.notify('item 1');
observable.unsubscribe(eventHandler);
observable.notify('item 2');
observable.subscribe(eventHandler);
observable.notify('item 3');
