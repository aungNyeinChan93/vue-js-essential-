import { createApp } from 'vue'
import App from './App.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

createApp(App).mount('#app')

// js essential
let name = "anc";

function getName(){
    console.log(name);
}
getName();

const get_name = function(){
    console.log(`${name} from get_name`); 
}
get_name()

const call_name = (...smt)=>{ //rest parameter
    let data= smt;
    console.log(typeof data);
    console.log(`${name } from arrow function , ${data}  `);
}
call_name(["sdfsad","dasdfasd","sadffsd"],["sadfasdf"]);

let array= ["dasf","adsfsad"];
let array2= ["xsfas","adssdafasdfsad"];

let copy = [...array,...array2];
console.log(copy);

copy.forEach((i)=>console.log(i));
let map = copy.map(i=>i+"mgmg");
console.log(map);
console.log(...map);
let filter = copy.filter(i=>i=="dasf");
console.log(...filter);

// closure
function myFun(fun){
    return fun();
}
console.log(myFun(function(){
    return "aung nyein chan"
}));
