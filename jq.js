(function(){
    // var a = 10;
    // function $(a){
    //     alert(a)
    // };
    //window.$ = $ ;给外部预留接口,可以在外部使用 $();
    //(45,89) 定义了一些变量, jQuery = function(){};
    //(91,173) 给jQuery对象添加一些方法和属性;
    //(175,242) extend:jQuery的继承方法
    //(244,511) jQuery.extend();扩展一些工具和方法
    //(556,2679) Sizzle: 复杂选择器的实现
    //(3144,3336) Callbacks:回调对象:对函数的统一管理
    //(3339,3487) Deferred:jQuery 延迟对象:对异步的统一管理
    //(3851,3898) data方法功能: 数据缓存

    //(4036,4100) queue() : 队列管理(入队); dequeue(出队)
        //例如$("#div").animate("left":"100px");$("#div").animate("top":"100px");
        //先将$("#div").animate加入执行队列;当left执行完了以后,调用dequeue;接着执行top
    //(4425,7123) on();trigger();事件操作的相关方法;
    //(7123,7546) attr();addClass();prop();等: 对元素属性的操作;
    // DOM操作: 添加 获取 删除 包装 筛选
    //(9814,9841) window.JQuery = window.$ = jQuery ;
    // support:功能检测:
})();
//匿名函数即执行的好处
//1.var 均为局部函数;
