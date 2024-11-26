var counter=document.getElementsByClassName("counter");
var plus=document.getElementsByClassName("plus");
var minus=document.getElementsByClassName("minus");


// adding on clicking
// plus.addEventListener("click",function() {counter.value++})
function increment() {
    counter.value++
}

// removing on clicking
minus.addEventListener("click",function() {
    if(counter.value > 0)
        counter.value--})