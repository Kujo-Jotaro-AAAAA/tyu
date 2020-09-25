import Dep from './dep';

const dep = new Dep();


document.addEventListener("DOMContentLoaded", function () {
  console.log("Program is started.");

  function definePropertyWrapper(obj, key) {
    var value = obj[key];
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    const getter = descriptor && descriptor.get;
    const setter = descriptor && descriptor.set;

    return Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: true,

      get: function () {
        const ret = getter ? getter.call(obj) : value;
        console.log(`get: ${ret}`);
        return ret;
      },

      set: function (newValue) {
        if (setter) {
          setter.call(obj, newValue);
        } else {
          value = newValue;
          console.log(`set: ${value}`);
        }
      },
    });
  }

  var obj = Object.defineProperty({}, "test", {
    enumerable: true,
    configurable: true,
    set: function (val) {
      this._value_ = val;
      console.log(`set111: ${val}`);
    },
    get: function () {
      var val = this._value_;
      console.log(`get111: ${val}`);
      return val;
    },
  });

  var obj2 = definePropertyWrapper(obj, 'test')

  obj2.test = "123";
  console.log(obj2.test);


});
