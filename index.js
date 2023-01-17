let popup = document.getElementById('popup');
let input = document.getElementById('val');
let startTime = null;
let endTime = null;
let right = 0;
let arr = ['b','e','c','a','u','s','e','_','s','i','t','t','i','n','g','_','a','t','_','a','_','c','o','m','p','u','t','e','r','_','i','s','_','t','h','e',
            '_','e','x','a','c','t','_','o','p','p','o','s','i','t','e','_','o','f','_','e','x','e','r','c','i','s','e',',','_','y','o','u','_','s','h','o','u','l','d','_','t','a','k','e','_',
            'a','_','m','o','r','e','_','a','c','t','i','v','e','_','b','r','e','a','k','.'];
popup.addEventListener('click',()=>{
    popup.style.display = "none";
    input.focus();
    startTime = new Date();
})
let count = 0;
input.addEventListener('keydown',(e)=>{
    let letter = e.key;
    console.log(letter);
    let btn = null;
    if(letter == ' '){
        btn = document.getElementById('space');
        letter = '_'
    }else{ 
        btn = document.getElementById(letter);
    }
    btn.style.backgroundColor = 'white';
    let sp = document.getElementById(count);
    if(letter == arr[count]){
        right+=1;
        sp.style.backgroundColor = '#90EE90'
    }else{
        sp.style.backgroundColor = '#FFCCCB'
    }
    if(count===arr.length-1){
        endTime = new Date();
        let difference = endTime.getTime()-startTime.getTime();
        difference = difference/(1000 * 60);
        let speed = 18/difference;
        let typeSpeed  = document.getElementById('speed');
        let acc = document.getElementById('acc');
        typeSpeed.innerHTML += ` - ${speed.toFixed(2)} words/min`;
        acc.innerHTML += ` - ${right}%`;
        let score = document.getElementById('score');
        score.style.visibility = 'visible';
    }
    count+=1;
})
input.addEventListener('keyup',(e)=>{
    let letter1 = e.key;
    let btn = null;
    if(letter1 === ' '){
        btn = document.getElementById('space');
    }else{
        btn = document.getElementById(letter1);
    }
    btn.style.backgroundColor = 'mediumseagreen'
})