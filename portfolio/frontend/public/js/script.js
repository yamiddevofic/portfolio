function timeOfDay(){
    var date = new Date();
    const hora = date.getHours();
    var color;
    //madrugada
    if (hora>=0 && hora<5){
        color="#020126";
    }
    //mañana
    else if(hora>4 && hora<12){
        color="linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)";
    }
    //tarde
    if (hora>11 && hora<=17){
        color = "linear-gradient(to right, #f83600 0%, #f9d423 100%)";
    }
    //noche
    else if(hora>17){
        color = "#102040";
    }
    return color;
  }

const root = document.getElementById('root');
const container = document.getElementById('container');
const reloj = document.getElementById('reloj');
root.style.backgroundImage=timeOfDay();
container.style.backgroundImage=timeOfDay();
reloj.style.color = timeOfDay();
