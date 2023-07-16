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
        delta = e.wheelDeltaY;
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
    // see the direction in the console
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
        // this means the direction of the mouse wheel could not be determined
    }
    console.log(dir);// see the direction in the console

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
        const px=document.getElementById("imgl");
        px.style.animationName="";
        px.style.display="block";
        px.style.height="50vh";
        px.style.opacity="1";
            const x=document.getElementById("imgr");
            x.style.animationName="imgrani1";
            x.style.height="80vh";  
            console.log("page1");
            i=1;
    
    }
    else if(i==1&&dir==='up')
    {           const y=document.getElementById("imgl");
    y.style.animationName="";
    y.style.display="block";
    y.style.opacity="1;"
    y.style.height="50vh";
        const x=document.getElementById("imgr");
        x.style.animationName='';
        x.style.height="180vh";
        i=0;
        setTimeout(() => {
            animat1();
        }, 100);
        console.log("page0");
    }
}
function animat2()
{
    if(i==1&&dir==='down')
    {
        const x=document.getElementById("imgl");
        x.style.animationName="";
        x.style.display="block";
        x.style.height="50vh";
        x.style.opacity="1";
        const y=document.getElementById("imgtl");
        y.style.animationName="";
        y.style.height="50vh";
        const svg2=document.querySelectorAll("svg")[1];
        svg2.style.animationName="";
setTimeout(() => {
        const x=document.getElementById("imgl");
        x.style.animationName="imglani2";
        x.style.height="0vh";
        x.style.opacity="0";
        const y=document.getElementById("imgtl");
        y.style.animationName="imglani3";
        y.style.height="100vh";
        const svg2=document.querySelectorAll("svg")[1];
        svg2.style.animationName="svg2ani";
        console.log("page2");
        i=2;
}, 100);
    //toggleScroll("page2");
    }
    else if(i==2&&dir==='up'){
        // const x=document.getElementById("imgl");
        // x.style.animationName="imglani2";
        // x.style.height="50vh";
        // const y=document.getElementById("imgtl");
        // y.style.animationName="imglani3";
        // y.style.opacity="0";
        // y.style.height="50vh";
        // const svg2=document.querySelectorAll("svg")[1];
        // svg2.style.animationName="svg2ani";
        // console.log("page2 rev");
        // i--;
        const x=document.getElementById("imgtl");
        x.style.animationName="";
        x.style.height="50vh";
        const y=document.getElementById("imgr");
        y.style.animationName='';
        y.style.height="180vh";
        i=0;
        
        setTimeout(() => {
            y.style.animationName="imgrani1";
            y.style.height="80vh";  
            console.log("page1");
            i=1
        }, 100);
    }
}
function animat3()
{
    if(i==2&&dir==='down')
    {
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
    //toggleScroll("page2");
    }
    else if(i==3&&dir==='up')
    {
        // const x=document.getElementById("imgr");
        // x.style.animationName="imgrani2";
        // x.style.height="80vh";  
        // const y=document.getElementById("imgtl");
        // y.style.animationName="imglani4";
        // y.style.height="100vh";
        // y.style.left="0vw";
        // const svg3=document.querySelectorAll("svg")[2];
        // svg3.style.animationName="svg3ani";
        // svg3.style.marginTop="0vh";
        // console.log("page3 rev");


        const y=document.getElementById("imgtl");
        y.style.animationName="";
        y.style.height="50vh";
        const svg2=document.querySelectorAll("svg")[1];
        svg2.style.animationName="";
        i=1;
        setTimeout(() => {
            // const x=document.getElementById("imgl");
            // x.style.animationName="imglani2";
            // x.style.height="0vh";
            // x.style.opacity="0";
            const y=document.getElementById("imgtl");
            y.style.animationName="imglani3";
            y.style.height="100vh";
            const svg2=document.querySelectorAll("svg")[1];
            svg2.style.animationName="svg2ani";
            console.log("page2 up");
            i=1;
        }, 100);
    }
}
function animat4()
{
    if(i==3)
    {
        console.log("page4");
        i++;
    //toggleScroll("page2");
    }
    // else if(i==4&&dir==='up')
    // {
    //     console.log("page4 rev");
    //     i--;
    // }

}
function animat5()
{
    if(i==4)
    {
        const btn=document.getElementById("downloadbtn");
        i++;
        setTimeout(() => {
           btn.style.display="block"; 
           btn.style.animationName="btnani";
        }, 3000);
        console.log("page5")
    //toggleScroll("page2");
    }
    // else if(i==5&&dir==='up')
    // {
        
    //     const btn=document.getElementById("downloadbtn");
    //     i++;
    //     btn.style.display="none";
    //     console.log("page5 rev")
    // }

}

if(i==5)
    console.log("end of animation");


// function toggleScroll(x){
    
//     var x=window.scrollX;
//     var y=window.scrollY;
//     const cls=document.getElementById("container");
    
//     window.onscroll=function(){cls.scrollTo(x, y);}
//     setTimeout(() => {
        
//     }, 3000);   
    
// }



 
  