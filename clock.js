let wake = document.getElementById('woke')
let lunch = document.getElementById('noon');
let nap = document.getElementById('napT');
let night = document.getElementById('slepT');


      //declaring variables for text
    var text1 = wake.options[wake.selectedIndex].text;
    var text2 = lunch.options[lunch.selectedIndex].text;
    var text3 = nap.options[nap.selectedIndex].text;
    var text4 = night.options[night.selectedIndex].text;
       //declaring variables for value in drodown thing
    var demoOne =  wake.options[wake.selectedIndex].value;
    var demoTwo = lunch.options[lunch.selectedIndex].value;
    var demoThree = nap.options[nap.selectedIndex].value;
    var demoFour = night.options[night.selectedIndex].value;
       ///---------onclick function---------
    function giveOptions(){
    demoOne =  wake.options[wake.selectedIndex].value;
    demoTwo = lunch.options[lunch.selectedIndex].value;
    demoThree = nap.options[nap.selectedIndex].value;
    demoFour = night.options[night.selectedIndex].value;


   
     text1 = wake.options[wake.selectedIndex].text;
     text2 = lunch.options[lunch.selectedIndex].text;
     text3 = nap.options[nap.selectedIndex].text;
     text4 = night.options[night.selectedIndex].text;
     //shows the text in options in fuction
     document.getElementById('wake_up').innerText = text1;
     document.getElementById('lunch_time').innerText = text2;
     document.getElementById('nap_time').innerText = text3;
     document.getElementById('night_time').innerText = text4;
};
    // ----------clock function---------
    function displayTime(){
       let dateTime = new Date();
       let hrs = dateTime.getHours();
       let min = dateTime.getMinutes();
       let sec = dateTime.getSeconds();
       let session = document.getElementById('session');
       var realHr = dateTime.getHours();
       
       if(hrs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    
       if(hrs > 12){
        hrs = hrs - 12;
       }
       if((hrs+"").length === 1){
        hrs = "0"+hrs;
    }
    if((min+"").length === 1){
        min = "0"+min;
    }
    if((sec+"").length === 1){
        sec = "0"+sec;
    }
     
    document.getElementById('hour').innerHTML = hrs +" <br>hours";
    document.getElementById('minute').innerHTML = min + "<br>mins";
    document.getElementById('seconds').innerHTML = sec + "<br>secs";

      
    if(demoOne == realHr){
        document.getElementById("greet1").innerText= "GOOD MORNING!! WAKE UP !!"
        document.getElementById("greet_msg").innerText= "GRAB SOME HEALTHY BREAKFAST!!!"
        document.getElementById("images").src= "Curtains.png";
    }
     
   else if(demoTwo == realHr){
        document.getElementById("greet1").innerText= "GOOD AFTERNOON !! TAKE SOME SLEEP";
        document.getElementById("greet_msg").innerText= "LET'S HAVE SOME LUNCH !!";
        document.getElementById("images").src= "normal.png";
    }
    //comparig the value = hours with 24hr
     else if(demoThree == realHr) {
    
        document.getElementById("greet1").innerText= "GOOD EVENING !!";
        document.getElementById("greet_msg").innerText= "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("images").src= "lunch_image.png";
    }
    //comparig the value = hours with 24hr
    else if(demoFour == realHr){
        document.getElementById("greet1").innerText= "GOOD NIGHT !!";
        document.getElementById("greet_msg").innerText= "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("images").src= "sleepS.png";
    }
    else{
        document.getElementById("greet1").innerText= "HIIIIIII !!";
        document.getElementById("greet_msg").innerText= "Clock Project!!!";
        document.getElementById("images").src= "normal.png";
    }
};
setInterval(displayTime,1000);