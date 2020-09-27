import Observer from "./observer"

function Subject() {
    this._observers = new Map();
}

Subject.prototype._observers = null

Subject.prototype.register = function (observer) {
    observer = observer || Observer.Target;

    if (observer && !this._observers.has(observer.id)) {
        this._observers.set(observer.id, observer);
        observer.observe(this);
    }
}

Subject.prototype.unregister = function (observer) {
    if (observer) {
        this._observers.delete(observer.id);
    }
}

Subject.prototype.notify = function () {
    this._observers.forEach((value, key) => {
        console.log(`update: ${key}`);
        value.update();
    })
}

export default Subject;