let { AsyncSeriesWaterfallHook } = require('tapable');
class Lesson {
    constructor() {
        this.index = 0;
        this.hooks = {
            arch: new AsyncSeriesWaterfallHook(['name'])
        }
    }
    tap() {//注册监听函数
        this.hooks.arch.tapAsync('node', (name,cb) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('node', name);
                    cb('error','result');
                }, 1000);
            })
        })
        this.hooks.arch.tapAsync('react', (data, cb) => {
                setTimeout(() => {
                    console.log('react', data);
                    cb();
                }, 1000)
            })
    }
    start() {
        this.hooks.arch.callAsync('jw', function () {
            console.log('end');
        })
    }
}
let l = new Lesson();
l.tap();//注册这两个事件
l.start();//启动钩子
