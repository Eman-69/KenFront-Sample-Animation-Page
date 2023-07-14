var i=0;
function animat1()
{
    if(i==0)
    {
        const x=document.getElementById("imgr");
        x.style.animationName="imgrani1";
        x.style.height="80vh";  
        console.log("page1");
        /*const svg=document.getElementById("eI3TEKXL1DN1");
        svg.style.display="block";*/
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
    const svg2=document.querySelectorAll("svg")[1];
    svg2.style.animationName="svg2ani";
    console.log("page2");
    i++;
    //toggleScroll("page2");
    }
}
function animat3()
{
    if(i==2)
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
        console.log("page3");
        i++;
    //toggleScroll("page2");
    }
}
function animat4()
{
    if(i==3)
    {
        const svg3=document.querySelectorAll("svg")[3];
        svg3.style.animationName="svg4ani";
        console.log("page4");
        i++;
    //toggleScroll("page2");
    }
}
function animat5()
{
    if(i==4)
    {
        const svg3=document.querySelectorAll("svg")[4];
        const btn=document.getElementById("downloadbtn");
        svg3.style.animationName="svg5ani";
        i++;
        setTimeout(() => {
           btn.style.display="block"; 
           btn.style.animationName="btnani";
        }, 3000);
        console.log("page5")
    //toggleScroll("page2");
    }
}

if(i==5)
    console.log("end of animation");


function toggleScroll(x){
    
    var x=window.scrollX;
    var y=window.scrollY;
    const cls=document.getElementById("container");
    
    window.onscroll=function(){cls.scrollTo(x, y);}
    setTimeout(() => {
        
    }, 3000);   
    
}



 
  