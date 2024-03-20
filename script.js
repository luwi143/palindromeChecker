function getValue(){
    const inputVal = document.getElementById("text-input").value;
    // document.getElementById("res").innerHTML = '<b>'+inputVal+'</b>' + ' is a palindrome.';
    let inputFormat = inputVal.replace(/\W|_/g,"").toLowerCase();
    
    let reverseStr = inputFormat.split("").reverse().join("").toLowerCase();

    if(inputVal == ''){
        alert('Please input a value');
        ocument.getElementById("result").style.display = "none";
    }

    if(inputFormat === reverseStr){
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = '<b>'+inputVal+'</b>' + ' is a palindrome.';
    }else{
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = '<b>'+inputVal+'</b>' + ' is not a palindrome.';
    }

}
