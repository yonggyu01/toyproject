window.onload = function(){
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d');
    let jumping = false;
    let leftm = false;
    let rightm = false;
    canvas.width = window.innerWidth - 100;
    canvas.height = window.innerHeight - 100;
    let mm = new Image();
    mm.src = 'mairom.png'
    let bb = new Image();
    bb.src = 'mariobug.png'
    let bg = new Image();
    bg.src = 'mariomap.png'

    let bgimg = {
        x:0,
        y:0,
        width : 6000,
        height: 450,
        draw(){
            ctx.drawImage(bg,this.x,this.y,this.width,this.height) 
        }
    }
    
    let mmario = {
        x:80,
        y:230,
        width : 90,
        height : 130,
        draw(){
            ctx.fillStyle = 'red'
            // ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.drawImage(mm,this.x,this.y,this.width,this.height)
            
        }
    }
    mmario.draw()
    class Bugs{
        constructor(){
            this.x = 1200;
            this.y = 330;
            this.width = 70;
            this.height = 70;
        }
        draw(){
            ctx.fillStyle = 'blue'
            ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.drawImage(bb,this.x,this.y,this.width,this.height)
        }
    } 
    let bugs = [];
    let timer = 0;
    let jumptimer = 0;   
   function moving (){
    let anime = requestAnimationFrame(moving)
    timer++
    ctx.clearRect(0,0,canvas.width,canvas.height);
 
    bgimg.draw()
    if(timer%140 == 0 ){
        var bug = new Bugs();
        bugs.push(bug)
    }
    bugs.forEach(function(x,idx,i){
        if(x.x<0){
            i.splice(idx,1)
        }
        x.draw();
        mmario.draw()
        mariocrush(mmario,x)
        x.x -= Math.random()*8
        bgimg.x --
    
        function mariocrush (mario,bug){
            let xpo = bug.x - (mario.x+mario.width)
            console.log(xpo)
            let ypo = bug.y -(mario.y+mario.height)
            if(xpo < 0 && ypo < 0 ){
                cancelAnimationFrame(anime)
                ctx.clearRect(0,0,canvas.width,canvas.height);
            }
        }
     

    })

    
   
    console.log(leftm,rightm)
    if(leftm==true){
        mmario.x-=5
    }
    if(rightm==true){
        mmario.x+=5
    }

    if(jumping && mmario.y>80){
        mmario.y-= 5;
        jumptimer++
    }  
    else{
        if(mmario.y<=265 && mmario.y  > 0){
            mmario.y+=5}
        
    }

    if(jumptimer>=40){
        jumping = false;
        jumptimer = 0;
    }



    }

   moving()
   let jumpmode = 0;

   window.onkeydown= function(e){
  
    if((e.code == 'Space') && (jumpmode == 0)){
        jumpmode = 1;
        jumping = true; 
        setTimeout(function(){
            jumpmode = 0;
        },1500)
    } 
    if(e.code== 'KeyA'){
        leftm = true;
        setTimeout(function(){
            leftm = false;
        },500)
    }
    if(e.code == 'KeyD'){
        rightm= true;
        setTimeout(function(){
            rightm = false;
        },500)
    }
    }}