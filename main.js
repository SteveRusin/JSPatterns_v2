function Mediator() {
    const topics = {};

    this.subscribe = function (topic, fn) {
        if(!topics[topic]) {
            topics[topic] = [];
        }

        topics[topic].push({
            context: this,
            callback: fn
        })

        return this;
    }

    this.publish = function(topic) {
        let args;

        if(!topic[topic]) {
            return false;
        }

        args = Array.prototype.slice.call(arguments, 1);

        for (let i = 0, l = topics[topic].length; i < l; i++) {
            const subscription = topics[topic][i];
            subscription.callback.apply(subscription.context, args);
        }

        return this;
    }

    this.installTo = function (obj) {
        obj.subscribe = this.subscribe;
        obj.publish = this.publish;
    }
}
