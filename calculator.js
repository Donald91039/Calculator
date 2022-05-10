let result=document.getElementById("inputtext");

let calculate=(number)=>{
    result.value+=number;
}

let docalc=()=>{
    try {
        result.value=eval(result.value)
    } catch (error) {
        alert("Enter valid input");
    }
}

function clr() {
    result.value=" ";
}

function del() {
    result.value=result.value.slice(0,-1);
}
