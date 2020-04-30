function Time_calculator(){

    var currentDate =document.getElementById("dateInput").value;
    var d_o_b = new Date(currentDate);
    var currentDate = new Date();
    var year = currentDate.getFullYear()-d_o_b.getFullYear()
    var num_of_days = (currentDate.getTime())/(60*60*24*1000) - (d_o_b.getTime())/(60*60*24*1000)
    var hours = (currentDate.getTime())/(60*60*1000) - (d_o_b.getTime())/(60*60*1000)
    var Minutes = (currentDate.getTime())/(60*1000) - (d_o_b.getTime())/(60*1000)
    var seconds = (currentDate.getTime())/(1000) - (d_o_b.getTime())/(1000)
    var Month;
    if(currentDate.getMonth()>d_o_b.getMonth()){
    Month = (year*12)+(currentDate.getMonth()+1-d_o_b.getMonth()+1)
}
else{
Month = (year*12)-((currentDate.getMonth()+1)-(d_o_b.getMonth()+1))
}
document.getElementById("y").innerHTML = "Year" + " " +year;
document.getElementById("mo").innerHTML = "Months"+ " " +Month;
document.getElementById("d").innerHTML = "Days" + " " +Math.floor(num_of_days);
document.getElementById("h").innerHTML = "Hours" + " " +Math.floor(hours);
document.getElementById("m").innerHTML = "Minutes" + " " +Math.floor(Minutes);
document.getElementById("s").innerHTML = "Seconds" + " " +Math.floor(seconds);
    

}