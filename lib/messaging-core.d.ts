declare module fxrialab.messaging.binding {
    class Binding {
    }
}
declare module fxrialab.messaging.queue {
    interface Queue {
        addBinding(binding: messaging.binding.Binding): void;
    }
}
declare module fxrialab.messaging.subscription {
    interface Subscription {
        getQueue(): messaging.queue.Queue;
        setQueue(q: messaging.queue.Queue): void;
        send(): void;
    }
}
