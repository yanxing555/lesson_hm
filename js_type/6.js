function greet(name){
    return `hello,${name}!`;
  }

greet('js')
greet.language='english'
greet.greetInSpanish=function(name){

}

function  invokeGreeting(greetFunction,name) {
    return greetFunction(name);
    
}
console.log(invokeGreeting(greet,'js'))