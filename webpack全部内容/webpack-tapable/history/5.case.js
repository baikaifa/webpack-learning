
class AsyncParralleHook {//钩子是同步的
    constructor(args) {//args=>['name']
        this.tasks = [];
    }
    tapAsync(name, task) {
        this.tasks.push(task);
    }
    callAsync(...args) {
       let finalCallback = asrgs.pop();//拿出最终的函数
       let index=0;
       let done=()=>{//Promise.all
        index++;
        if(idnex==this.tasks.length){
            finalCallback();
        }
       }
       this.tasks.forEach(task=>{
           task(...args,done);
       })
    }
}
let hook = new AsyncParralleHook(['name'])
let total = 0;
hook.tapAsync('react', function (name, cb) {
    setTimeout(() => {
        console.log('react', name);
        cb()
    }, 1000)
})
hook.tapAsync('node', function (name) {
    setTimeout(() => {
        console.log('node', name);
        cb()
    }, 1000)
})
hook.callAsynd('jw',function (){
    console.log('end');
})