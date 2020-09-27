import Subject from './subject';
import Observer from './observer';

function bindProperty(obj, key) {
    var value = obj[key];
    const subject = new Subject();

    return Object.defineProperty(obj, key, {
        configurable: true,
        enumerable: true,

        get: function () {
            subject.register(); // 将当前属性注册到当前组件
            return value;
        },

        set: function (newValue) {
            value = newValue;
            subject.notify();   // 通过所有注册的组件更新
        }
    });
}

function bindData(obj) {
    Object.getOwnPropertyNames(obj).forEach(key => bindProperty(obj, key));
    return obj;
}

export { bindData, bindProperty, Subject, Observer }