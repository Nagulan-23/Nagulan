

let appendNumber=(num)=>{
    // console.log(num);
    document.getElementById("inp").value +=num
}

let appendoperator=(operator)=>{
    document.getElementById("inp").value +=operator
}
let clearscreen=()=>{
    document.getElementById("inp").value=""
}

let calculate=()=>{
    let inputValue= document.getElementById("inp").value
    console.log(eval(inputValue));
    document.getElementById("inp").value = eval(inputValue)
    
}

let backspace=()=>{
    let inputValue= document.getElementById("inp").value

    document.getElementById("inp").value =inputValue.slice(0,-1)
}