var res= document.getElementById("result");
var comp=document.getElementById("computed");

function setResult(num){
    console.log(typeof(num));
    num=num.toString(); // since equals in sending back a number
    var ch=num.charAt(num.length-1);
    if(ch=="+" || ch=="-" || ch=="x" || ch=="/" || ch=="%"){
       console.log("this works");
       console.log(num.length);
    }
    res.innerHTML=num;
}
function getResult(){
    return res.innerHTML;
}
function setComputed(num){
    computed.innerHTML=num; 
}
function getComputed(){
    return computed.innerHTML;
}
function comSet(num){
    var n=Number(num);
    return n.toLocaleString("en");//returns String
}
function comRemove(num){
 return Number(num.replace(/,/g,'')); //returns Number
}
function calculate(){
    var ind=getResult();
    var op;
    var result;
    if(ind.indexOf("+")!=-1){
       var index=ind.indexOf("+");
       op=1;
    }
    else if(ind.indexOf("-")!=-1){
       var index=ind.indexOf("-");
       op=2;
    }
    else if(ind.indexOf("x")!=-1){
      var index=ind.indexOf("x");
      op=3;
    }
    else if(ind.indexOf("/")!=-1){
      var index=ind.indexOf("/");
      op=4;
    }
    else{
      var index=ind.indexOf("%");
      op=5;
    }
     var fnum=(Number(ind.substring(0,index)));
     var snum=(Number(ind.substring(index+1)));

     switch(op){
         case 1:result=fnum+snum;
                break;
         case 2:result=fnum-snum;
                break;
         case 3:result=fnum*snum;
                break;
         case 4:result=fnum/snum;
                break;
         case 5:result=fnum%snum;
                break;
     }
     setComputed(ind);
     return result;
}


var input;
var number=document.getElementsByClassName("num");
var operator=document.getElementsByClassName("op");

for(i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       input=getResult();
       if(input!=NaN && input.length<9)
       input=input+this.id;
       setResult(input);
    });
}
for(i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
       input=getResult();
       var ch=input.charAt(input.length-1);
    //    console.log(typeof(input));
       if(input.length<9){
       if(ch=="+" || ch=="-" || ch=="x" || ch=="/" || ch=="%"){
        //    if(input.length<9)
        input=input.replace(ch,this.id);
       }
       else{
        // if(input.length<9)
        input+=this.id;
       }
    }
    //    if(input.length<9)
    //    input+=this.id;
       setResult(input);
       
    });

}
var equals=document.getElementsByClassName("equals");
equals[0].addEventListener('click',function(){
    var lch=getResult().charAt(getResult().length-1);
    console.log(lch);
 setResult(calculate());

});
var ac=document.getElementsByClassName("ac");
ac[0].addEventListener('click',function(){
    setResult("");
    setComputed("");
});
var ce=document.getElementsByClassName("ce");
ce[0].addEventListener('click',function(){
    setResult(getResult().substring(0,getResult().length-1));
});

