function timeOfDay(){
    var date = new Date();
    const hora = date.getHours();
    var color;
    //madrugada
    if (hora>=0 && hora<5){
        color="linear-gradient(120deg, #0F2027 0%, #203A43 50%, #2C5364 100%)";
    }
    //mañana
    else if(hora>4 && hora<12){
        color="linear-gradient(to bottom, #FFD700, #FF8C00, #00BFFF, #1E90FF)";
    }
    //tarde
    if (hora>11 && hora<=17){
        color = "linear-gradient(120deg, #FF5F6D 0%, #FFC371 100%)";
    }
    //noche
    else if(hora>17){
        color = "linear-gradient(120deg, #1a1c2c 0%, #32004a 50%, #4b0076 100%)"
    }
    return color;
  }
const root = document.getElementById('root');
const container = document.getElementById('container');
const reloj = document.getElementById('reloj');
root.style.backgroundImage=timeOfDay();
container.style.backgroundImage=timeOfDay();
reloj.style.color = timeOfDay();
