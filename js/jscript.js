

function changeDatos(box1,box2){
    var n1=document.getElementById(box1);
    var n2=document.getElementById(box2);

    var e1=n1.value;
    var e2=n2.value;

    n1.value=e2;
    n2.value=e1;
}



function comprobarClick(){
    document.getElementById('btnChange1').onclick=function(){
        changeDatos("nombre1","nombre2");
    }

    document.getElementById('btnChange2').onclick=function(){
    changeDatos("nombre2","nombre3");
    }
}



window.onload=comprobarClick;





