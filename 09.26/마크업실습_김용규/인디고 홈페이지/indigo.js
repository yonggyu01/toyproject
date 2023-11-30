document.addEventListener('DOMContentLoaded',function(){
    var gnb = document.querySelector('.gnb')
    var yscroll = 0;
    var xscroll =0;
    window.addEventListener('scroll',function(){
        yscroll = window.pageYOffset
       
        console.log(yscroll)
        if(yscroll>100){
            gnb.style.position = 'fixed'
        }else{
            gnb.style.position = 'static'
        }
     
    })
 
    var bugger = document.querySelector('.bugger')
    var topmenu = document.querySelector('.topmenu>ul')
    var tap = 0;
    bugger.addEventListener('click',function(){
        
        if(tap == 0 ){

            topmenu.style.display = 'block'
            tap =  1
        }else{
            tap = 0
            topmenu.style.display = 'none'
        }
    })
    window.addEventListener('resize',function(){
        xscroll = window.innerWidth
        console.log(xscroll)
        if((xscroll>767 && tap== 0)||(xscroll>767 && tap== 1)){
            topmenu.style.display = 'flex'
        }else if(xscroll<767 && tap%2==0){
            topmenu.style.display = 'block'
        }else if(xscroll<767 && tap%2!=0){
            topmenu.style.display = 'none'
        }
    })
})