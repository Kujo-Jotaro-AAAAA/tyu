function Observer(domElementId, data, render) {
    this._id = Observer.__key__++;
    this._subjects = [];
    this._domElementId = domElementId;
    this._data = data;
    this._render = render.bind(this);
}

Observer.__key__ = 0;
Observer.__target__ = null;

Object.defineProperty(Observer, 'Target', {
    configurable: false,
    enumerable: true,
    get: () => Observer.__target__,
    set: () => null // 禁止外部修改 target 对象
})

Observer.prototype._id = 0;
Observer.prototype._subjects = null;
Observer.prototype._data = null;
Observer.prototype._render = function () {
    console.log();
}

Object.defineProperty(Observer.prototype, 'id', {
    configurable: false,
    enumerable: true,
    get: function () { return this._id; },
    set: () => null,
});

Observer.prototype.observe = function (subject) {
    this._subjects.push(subject);
}

Observer.prototype.init = function () {
    Observer.__target__ = this;
    this.update();
    Observer.__target__ = null;
}

Observer.prototype.destroy = function () {
    this._subjects.forEach(s => {
        s.unregister(this);
    });
    this._subjects = null;
}

Observer.prototype.update = function () {
    const html = this._render(this._data);
    console.log(`Renderer: ${html}`);
    document.getElementById(this._domElementId).innerHTML = html;
}

export default Observer;