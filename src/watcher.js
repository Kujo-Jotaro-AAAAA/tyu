function Watcher() {}

Watcher.prototype.deps = []

Watcher.prototype.add = function (dep) {
  deps.push(dep);
  dep.add(this);
}

Watcher.prototype.update = function () {
  console.log('update'); // Update 方法都做了什么
}
