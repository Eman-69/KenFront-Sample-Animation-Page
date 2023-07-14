var i=0;
function animat1()
{
    if(i==0)
    {
        const x=document.getElementById("imgr");
        x.style.animationName="imgrani1";
        x.style.height="80vh";  
        console.log("page1");
        i++;
        //toggleScroll("page1");
    }
}
function animat2()
{
    if(i==1)
    {
    const x=document.getElementById("imgl");
    x.style.animationName="imglani2";
    x.style.height="0vh";
    const y=document.getElementById("imgtl");
    y.style.animationName="imglani3";
    y.style.opacity="1";
    y.style.height="100vh";
    console.log("page2");
    i++;
    //toggleScroll("page2");
    }
}
if(i==2)
    console.log("end of animation");


function toggleScroll(x){
    
    var x=window.scrollX;
    var y=window.scrollY;
    const cls=document.getElementById("container");
    
    window.onscroll=function(){cls.scrollTo(x, y);}
    setTimeout(() => {
        
    }, 3000);   
    
}



 
  