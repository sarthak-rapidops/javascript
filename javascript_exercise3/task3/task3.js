alert("click me");
changeBox2Color()
function box1Func(){
    bx3 = document.getElementById("box3");
    bx3.firstElementChild.innerHTML="Oops! Somethings wrong.";
}


function changeBox2Color(){
    console.log("changeBox2Color")
    let a=0;
    changeCol2();
}

function changeCol2(){
    console.log("changeCol2")
    let colors = ['red','green','blue'];
    let a=0;
    let tm=3000;
    let i =0;
setTimeout(function run() {
    if(i%4 != 0){
        tm=3000;
        let bx2=document.getElementById("box2");
        bx2.style.transitionProperty='background-color';
        bx2.style.transitionDuration='1s';
        bx2.style.backgroundColor=colors[a];
        a++;
        if(a==3){
            a=0;
        }
    }
    else {
        tm=1;
    }
    (i++)
  setTimeout(run, tm);
}, 1);
}


document.onkeydown = function(event){ 
    let reverse=false;
    if(event.keyCode == 38 || event.keyCode == 39){
        console.log(event.key)
        changeCol4(5000,reverse);
    }
    else if(event.keyCode == 37 || event.keyCode == 40){
        console.log(event.key)
        reverse=true;
        changeCol4(5000,reverse);
    }
    else{

    }
}
let t1,t2;
function changeCol4(tm,rev){
    if(t1!=null && t2!=null){
    clearTimeout(t1);
    clearTimeout(t2);
    }
    
    let colors = ['rebeccapurple','indigo','blue','green','yellow','orangered','red'];
    let a=0;
    let i =0;
    if (rev==true){
        colors=colors.reverse();
    }
 t1 = setTimeout(function run() {
    if(i%6 != 0){
        tm=5000;
        let bx4=document.getElementById("box4");
        bx4.style.transitionProperty='background-color';
        bx4.style.transitionDuration='1s';
        bx4.style.backgroundColor=colors[a];
        a++;
        if(a==7){
            a=0;
        }
    }
    else {
        tm=1;
    }
    (i++)
 t2=setTimeout(run, tm);
}, 1);
}