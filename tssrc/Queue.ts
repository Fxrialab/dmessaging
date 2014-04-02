///<reference path='reference.ts'/>//
import Binding = fxrialab.messaging.binding.Binding;
import Subscription = fxrialab.messaging.subscription.Subscription;

module fxrialab.messaging.queue {
    export interface Filterable
    {
        getMessageHeader():Object;
    }

    export interface QueueEntry extends Filterable
    {
        getQueue():Queue;
    }

    export interface Queue {

        addBinding(binding:Binding):void;
        removeBinding(binding:Binding):void;
        registerSubscription(subsc:Subscription):void;
        unregisterSubscription(subsc:Subscription):void;
        queue(entry:QueueEntry):void;
        dequeue(entry:QueueEntry):void;
        getMessages()
    }
}
