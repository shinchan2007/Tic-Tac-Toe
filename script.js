let x = true;
let button1 = document.getElementById('b1')
let button2 = document.getElementById('b2');
let button3 = document.getElementById('b3');
let button4 = document.getElementById('b4');
let button5 = document.getElementById('b5');
let button6 = document.getElementById('b6');
let button7 = document.getElementById('b7');
let button8 = document.getElementById('b8');
let button9 = document.getElementById('b9');
let reset = document.getElementById('reset');
let t = document.getElementById("text");
let count=0;
function button(b){
    let element = document.getElementById(b);

    if(element.textContent==''){
    if(x){
        element.textContent = "X";
        x=false;
        //console.log(b);
    }
    else{
        element.textContent = 'O';
        x=true;
        //console.log(b);
    }
    count++;
    if(count==9){
        t.textContent = "its a Tie";
        console.log(t.textContent);
        count=0;
    }
    let b1 = button1.textContent;
    let b2 = button2.textContent;
    let b3 = button3.textContent;
    let b4 = button4.textContent;
    let b5 = button5.textContent;
    let b6 = button6.textContent;
    let b7 = button7.textContent;
    let b8 = button8.textContent;
    let b9 = button9.textContent;

    let buttons = [button1,button2,button3,button4,button5,button6,button7,button8,button9];
    function fx(){
        t.textContent = "X wins";
        console.log(t.textContent);
        for(i of buttons){
            i.disabled=true;
        }

    }

    function fo(){
        t.textContent = "O wins";
        console.log(t.textContent);
        for(i of buttons){
            i.disabled=true;
        }
    }
   
        if(b1 == b2 && b2 == b3 && b3 == 'X' ){fx();}
    else if(b4 == b5 && b5 == b6 && b6 == 'X'){fx();} 
    else if(b7 == b8 && b8 == b9 && b9 == 'X'){fx();}
    else if(b1 == b4 && b4 == b7 && b7 == 'X'){fx();} 
    else if(b2 == b5 && b5 == b8 && b8 == 'X'){fx();}
    else if(b3 == b6 && b6 == b9 && b9 == 'X'){fx();}
    else if(b1 == b5 && b5 == b9 && b9 == 'X'){fx();}
    else if(b3 == b5 && b5 == b7 && b7 == 'X'){fx();}
    else if(b1 == b2 && b2 == b3 && b3 == 'O'){fo();}
    else if(b4 == b5 && b5 == b6 && b6 == 'O'){fo();}
    else if(b7 == b8 && b8 == b9 && b9 == 'O'){fo();}
    else if(b1 == b4 && b4 == b7 && b7 == 'O'){fo();}
    else if(b2 == b5 && b5 == b8 && b8 == 'O'){fo();}
    else if(b3 == b6 && b6 == b9 && b9 == 'O'){fo();}
    else if(b1 == b5 && b5 == b9 && b9 == 'O'){fo();}
    else if(b3 == b5 && b5 == b7 && b7 == 'O'){fo();}
    else if(count==9){
        t.textContent = "its a Tie";
        console.log(t.textContent);
    }
}
}

reset.addEventListener('click',(event)=>{
    let buttons = [button1,button2,button3,button4,button5,button6,button7,button8,button9];
    count=0;
    t.textContent = '';
    button1.textContent = '';
    button2.textContent = '';
    button3.textContent = '';
    button4.textContent = '';
    button5.textContent = '';
    button6.textContent = '';
    button7.textContent = '';
    button8.textContent = '';
    button9.textContent = '';
   x=true;
   for(i of buttons){
    i.disabled = false;
}
})

