async function makeapple(){
   await delay(2000)
     return '바나나등장';
}


function delay(time){
  return new Promise(resolve=>setTimeout(resolve,time))
}
 let poper = makeapple()
poper.then(console.log)



let prom = new Promise(function(resolve,reject){
    console.log('일하는중')
   return setTimeout(()=> resolve(55), 5000)
})





prom.then((num) => num + 45)
.then((num) => num * 2)
.then((num)=> {
    return new Promise((resolve)=>{setTimeout(resolve(num + 1),2000)})
})
.then((num)=> console.log(num))
