/** 
*@func 就地编辑
*@params {id,parent 父节点,value 默认值 }
*@author ysw
*@data 2024-06-12
*/
function EditInPlace(id,parent,value){
    this.id=id;//跨函数共享属性
    this.parent=parent||document.body;
    this.value=value||'这个家伙很懒什么都没留下';
    this.createElement(this.id);

}

EditInPlace.prototype.createElement =function(id){
    console.log(id);
}