function Dep() {}

Dep.target = null; // Dep.target 是由谁来改变的

Dep.prototype.watchers = [];

Dep.prototype.depend = function () {
  if (Dep.target) {
    Dep.target.add(this)
  }
};

Dep.prototype.notify = function () {
  this.watchers.forEach((w) => {
    w.update();
  });
};

Dep.prototype.addWatcher = function (watcher) {
  this.watchers.push(watcher);
};

export default Dep;
