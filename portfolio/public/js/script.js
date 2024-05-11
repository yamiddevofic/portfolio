function timeOfDay(){
    var date = new Date();
    const hora = date.getHours();
    var color;
    //madrugada
    if (hora>=0 && hora<5){
        color="linear-gradient(to top,#fceabb,#060152,#111)";
    }
    //mañana
    else if(hora>4 && hora<12){
        color="linear-gradient(to top, #fceabb,#f8b500,#f8b500)";
    }
    //tarde
    if (hora>11 && hora<=17){
        color = "linear-gradient(to top,#f3f3f3,#e7bd03,#e7bd03,#e75703)";
    }
    //noche
    else if(hora>17){
        color = "linear-gradient(to top,#fceabb,#2c015e,#140149)"
    }
    return color;
  }

const root = document.getElementById('root');
const container = document.getElementById('container');
const reloj = document.getElementById('reloj');
root.style.backgroundImage=timeOfDay();
container.style.backgroundImage=timeOfDay();
reloj.style.color = timeOfDay();
