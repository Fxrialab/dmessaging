///<reference path='reference.ts'/>//
import Queue = fxrialab.messaging.queue.Queue;
import Filterable = fxrialab.messaging.queue.Filterable;

module fxrialab.messaging.subscription
{
    export interface Subscription extends Filterable
    {
        getQueue():Queue;
        setQueue(q:Queue):void;
        send():void;
    }
}