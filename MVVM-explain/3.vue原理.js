class Water{
  constructor(options){
    this._data = options.data;
    this.observe(this._data);
  }
  defineReactive(data,key,value){
    let val = value;
    this.observe(val);
    Object.defineProperty(data,key,{
      enumerable:true,
      configurable:true,
      get(){
        return val
      },
      set(newVal){
        if(val !== newVal ){
          val = newVal;
          console.log('更新');
        }
      }
    })
  }
  observe(data){
    if(!data&&typeof data !== 'object') return
    Object.keys(data).forEach(key=>{
      this.defineReactive(data,key,data[key])
    })
  }
}
let vm = new Water({
  data:{name:{name:1}}
});
vm._data.name.name = 2;
