let count=0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}
function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
function checkCountValue(){
    if(count==10)
    {
        alert("Your instagram account got 10 followers! Congratulations!!");
    }
    else if(count==20)
    {
        alert("Your instagram account got 20 followers! Congratulations!!");
    }
}