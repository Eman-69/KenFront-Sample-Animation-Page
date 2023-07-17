const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");


      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});










var i=0;
var dir=false;
function detectMouseWheelDirection( e )
{
    var delta = null;
    
var direction = false;
    if ( !e ) { // if the event is not provided, we get it from the window object
        e = window.event;
    }
    if ( e.wheelDeltaY ) { // will work in most cases
        delta = e.wheelDeltaY/60;
    } else if ( e.detail ) { // fallback for Firefox
        delta = -e.detail / 2;
    }
    if ( delta !== null ) {
        direction = delta > 0 ? 'up' : 'down';
    }

    return direction;
}
function handleMouseWheelDirection( direction )
{
    if ( direction == 'down' ) {
        dir=direction;
        switch(i){
            case 0:
                animat1();
                console.log(i);
                break;
            case 1:
                animat2();
                console.log(i);
                break;
            case 2:
                animat3();
                console.log(i);
                break;
            case 3:
                animat4();
                console.log(i);
                break;
            case 4:
                animat5();
                console.log(i);
                break;
            case 5:
                console.log("end of animation");
                break;
                
        }
    } else if ( direction == 'up' ) {
        dir=direction;
        switch(i){
            case 0:
                console.log(i);
                break;
            case 1:
                animat1();
                console.log(i);
                break;
            case 2:
                animat2();
                console.log(i);
                break;
            case 3:
                animat3();
                console.log(i);
                break;
            case 4:
                animat4();
                console.log(i);
                break;
            case 5:
                animat5()
                console.log("end of animation");
                break;
                
        }
    } else {
    }
    console.log(dir);

}
document.onmousewheel = function( e ) {
    handleMouseWheelDirection( detectMouseWheelDirection( e ) );
};
if ( window.addEventListener ) {
    document.addEventListener( 'DOMMouseScroll', function( e ) {
        handleMouseWheelDirection( detectMouseWheelDirection( e ) );
    });
}
;

function animat1()
{
    if(i==0&&dir==='down')
    {    

            const x=document.getElementById("imgr");
            x.style.animationName="imgrani1";
            x.style.height="80vh";  
            console.log("page1");
            i=1;
    
    }
    else if(i==1&&dir==='up')
    {   
        reset1();
        i=0;
        setTimeout(() => {
        }, 50);
        console.log("page0");
    }
}
function animat2()
{
    if(i==1&&dir==='down')
    {

        const svg2=document.querySelectorAll("svg")[1];
        svg2.style.animationName="";
setTimeout(() => {
        const x=document.getElementById("imgl");
        x.style.animationName="imglani2";
        x.style.height="0vh";
        x.style.opacity="0";
        const y=document.getElementById("imgtl");
        y.style.opacity="1";
        y.style.animationName="imglani3";
        y.style.height="100vh";
        const svg2=document.querySelectorAll("svg")[1];
        svg2.style.animationName="svg2ani";
        console.log("page2");
        i=2;
}, 50);
    }
    else if(i==2&&dir==='up'){
        reset1();
        reset2();
        
        setTimeout(() => {
            const y=document.getElementById("imgr");
            y.style.animationName="imgrani1";
            y.style.height="80vh";  
            console.log("page1 rev");
            i=1;
        }, 50);
    }
}
function animat3()
{
    if(i==2&&dir==='down')
    {
        const svg3=document.querySelectorAll("svg")[2];
        svg3.style.animationName="";
        svg3.style.marginTop="0vh";
        console.log("page3");
        setTimeout(() => {
                    const x=document.getElementById("imgr");
                    x.style.animationName="imgrani2";
                    x.style.height="100vh";  
                    const y=document.getElementById("imgtl");
                    y.style.animationName="imglani4";
                    y.style.height="150vh";
                    y.style.left="-70vw";
                    const svg3=document.querySelectorAll("svg")[2];
                    svg3.style.animationName="svg3ani";
                    svg3.style.marginTop="35vh";
                    console.log("page3");
                    i=3;
        }, 50);
    }
    else if(i==3&&dir==='up')
    {
        reset2();
        reset1();
        const svg2=document.querySelectorAll("svg")[1];
        svg2.style.animationName="";
        setTimeout(() => {
            const x=document.getElementById("imgl");
            x.style.animationName="imglani2";
            x.style.height="0vh";
            x.style.opacity="0";
            const y=document.getElementById("imgtl");
            y.style.animationName="imglani3";
            y.style.opacity="1";
            y.style.height="100vh";
            const svg2=document.querySelectorAll("svg")[1];
            svg2.style.animationName="svg2ani";
            console.log("page2 rev");
            i=2;
        }, 50);
    }
}
function animat4()
{
    if(i==3&&dir==="down")
    {
        console.log("page4");
        const x=document.getElementById("imgtl");
        const y=document.getElementById("imgr");
        x.style.animationName="imglanizoom";
        x.style.animationDuration="3s";
        x.style.animationIterationCount="infinite";
        x.style.animationTimingFunction="ease-in";
        i=4;
    }

    else if(i==4&&dir=="up")
    {
        reset3();
        reset4();
        const svg3=document.querySelectorAll("svg")[2];
        svg3.style.animationName="";
        svg3.style.marginTop="0vh";
        setTimeout(() => {
            const x=document.getElementById("imgr");
            x.style.animationName="imgrani2";
            x.style.height="100vh";  
            const y=document.getElementById("imgtl");
            y.style.animationName="imglani4";
            y.style.height="150vh";
            y.style.left="-70vw";
            const svg3=document.querySelectorAll("svg")[2];
            svg3.style.animationName="svg3ani";
            svg3.style.marginTop="35vh";
            console.log("page3-rev");
            i=3;
        }, 50);
    }

}
function animat5()
{
    if(i==4)
    {
        reset4();
        const btn=document.getElementById("downloadbtn");
        const y=document.getElementById("imgr");
        y.style.animationName="imgranizoom";
        y.style.animationDuration="3s";
        y.style.animationIterationCount="infinite";
        y.style.animationTimingFunction="ease-in";
        i=4;
        i++;
        setTimeout(() => {
           btn.style.display="block"; 
           btn.style.animationName="btnani";
           btn.style.opacity="1";
        }, 3000);
        console.log("page5")
    }
    else if(i==5&&dir==='up')
    {
        i=4;
        reset5();
        console.log("page4 rev");
    }

}

if(i==5)
    console.log("end of animation");

 function reset1(){
    const imgl=document.getElementById("imgl");
        imgl.style.animationName="";
        imgl.style.display="block";
        imgl.style.height="50vh";
        imgl.style.opacity="1";
        const imgr=document.getElementById("imgr");
        imgr.style.animationName='';
        imgr.style.height="180vh";
        
 }
 function reset2(){
    const imgtl=document.getElementById("imgtl");
    imgtl.style.animationName="";
    imgtl.style.height="50vh";
    imgtl.style.opacity="0";
 }
 function reset3(){
    const imgtl=document.getElementById("imgtl");
    imgtl.style.animationName="";
    imgtl.style.height="100vh";
    imgtl.style.opacity="1";
 }
function reset4(){
    const x=document.getElementById("imgtl");
    x.style.animationName="";
    x.style.animationDuration="";
    x.style.animationIterationCount="";
    x.style.animationTimingFunction="";
}
function reset5(){
    const y=document.getElementById("imgr");
    y.style.animationName="";
    y.style.animationDuration="";
    y.style.animationIterationCount="";
    y.style.animationTimingFunction="";        
    const btn=document.getElementById("downloadbtn");
    btn.style.display="none";
    btn.style.opacity="0";
}