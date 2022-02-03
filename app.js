const seconds=document.querySelector('#seconds');
const tens=document.querySelector('#tens');
const startbtn=document.querySelector('#start');
const stopbtn=document.querySelector('#stop');
const restartbtn=document.querySelector('#reset');
let interval;
let left=00,right=00;

startbtn.addEventListener('click', ()=>
{
    clearInterval(interval);
    interval= setInterval(startTimer,10);
})

const startTimer= ()=>{
    right++;

    if(right<=9)
    {
        tens.innerHTML="0"+right;
    }
    else if(right>9 && right<60)
    {
        tens.innerHTML=right;
    }
    //console.log(right)
    else if(right>=60)
    {
        left++;
        if(left<=9)
          seconds.innerHTML="0"+left;
        else
          seconds.innerHTML=left;
        right=right%60;
        if(right<=9)
        {
            tens.innerHTML="0"+right;
        }
        else 
        {
            tens.innerHTML=right;
        }
    }
}

stopbtn.addEventListener('click',()=>{
    clearInterval(interval);
})

restartbtn.addEventListener('click',()=>{
    clearInterval(interval);
    left=00;
    right=00;
    seconds.innerHTML="00";
    tens.innerHTML="00";
})

