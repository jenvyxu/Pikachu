let face=`
.eye{
    position: absolute;  
    width: 60px;
    height: 60px;
    background: #2E2E2E;
    border-radius: 30px;
    border: 2px solid black;  
    top: 65px;  
}
.eye::before{
    content:'';
    display: block;
    background: white;
    width: 30px;
    height: 30px;  
    border-radius: 15px;
    position: absolute;
    top: 0;
    left: 6px;
    border: 2px solid black;
}
.eye-left{
    right: 50%;
    margin-right: 90px;
}
.eye-right{
    left: 50%;
    margin-left: 90px;
}
#nose{
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 100px;
    border: 15px solid transparent;
    border-top-color: black;
    border-radius: 50%;
    margin-left: -15px;    
}
.upperLip{
    position: absolute;
    top: 110px;
    width: 100%;
    display: flex;
    justify-content: center;
    z-index: 1;
}
.upperLip::before{
    content: '';
    display: block;
    background: #FFE600;
    width: 80px;
    height: 30px;
    border: 3px solid black;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 50px 30px ;
    transform: rotateZ(-20deg);  
}
.upperLip::after{
    content: '';
    display: block;
    width: 80px;
    height: 30px;
    border: 3px solid black;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 50px 30px;
    transform: rotateZ(20deg);   
    background: #FFE600;
  }
.lowerLip-wrapper{
    position: absolute;
    overflow: hidden;
    width: 100%;
    top: 120px;
    height: 200px;
}
.lowerLip{
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 1800px;
    border: 5px solid black; 
    background: #FF485F;    
    border-top: none;
    border-bottom-left-radius:100px 900px;
    border-bottom-right-radius:100px 900px;
    border-top-left-radius:100px 100px;
    border-top-right-radius:100px 100px;
    box-shadow:inset 0 1610px 0 20px #9B000A;
  }
.face{
    position: absolute;
    top: 160px;
    background: #FF0000;
    border: 3px solid black;
    width: 90px;
    height: 90px;
    border-radius: 45px;   
}
.face-left{
    right: 50%;
    margin-right: 130px;
}
.face-right{
    left: 50%;
    margin-left: 130px;
}
.eye::before{
    animation: 0.1s whiteInEye 0s infinite alternate ;
}
`
let n=0,posX=0;
let isPlay=false
let speedValue=15
let end=false
let firstPlay=true
styleTag.innerHTML=face
let id=setInterval(() => {
    if(isPlay){
        if(n<face.length){
            console.log(1)
            styleTag.innerHTML=face.substring(0,n+1)  
            n+=1
            posX=236*n/face.length-10
            ball.setAttribute('style',
            'left:' +posX+'px;')
        }else{
            play.setAttribute('style','display:inline-block;')
            pause.setAttribute('style','display:none;')
            end=true
        }       
    }
}, speedValue)
replay.onclick=()=>{ 
    end=false
    isPlay=true
    replay.classList.add('replay') 
    setTimeout(()=>{
        replay.classList.remove('replay') 
    },1000)
    pause.setAttribute('style','display:inline-block;')
    play.setAttribute('style','display:none;')    
    styleTag.innerHTML=''
    n=0
}
play.onclick=()=>{ 
    if(!end){
         isPlay=!isPlay
        if(firstPlay){
        styleTag.innerHTML='' 
        firstPlay=false  
        } 
        pause.setAttribute('style','display:inline-block;')
        play.setAttribute('style','display:none;')           
    }
}

pause.onclick=()=>{ 
    play.setAttribute('style','display:inline-block;')
    pause.setAttribute('style','display:none;')
    isPlay=!isPlay
}


