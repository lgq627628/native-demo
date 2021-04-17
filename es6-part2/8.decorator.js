
function desc(id){
    console.log('out'+id);
    return function(target,key,descriptor){
        console.log('inner'+id);
    }
}
// 洋葱模型 compose方法 redux koa
class My{
    @desc('1')
    @desc('2')
    my(){}
}
