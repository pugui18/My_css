function setRotation(el , ang){
    let transform = document.getElementById(el).style.transform;
    let current_angle = parseInt(transform.match(/\d+/));
    transform ? current_angle = parseInt(transform.match(/\d+/))
              :current_angle = 0
              
    let rotations = Math.floor(current_angle/360);
        if((current_angle-360*rotations) != ang){
            let new_angle;
            ang == 0 ? new_angle = 360*(rotations+1)    
                     :new_angle = 360*rotations + ang ;
                     
        document.getElementById(el).style.transform 
                                    = "rotateX(-"+new_angle+"deg)";

        }
}


function tictok(){
    let today = new Date();
    let secondsOne = Math.floor(today.getSeconds()/10);
    let secondsTwo = today.getSeconds() % 10;

    
    let minutesOne = Math.floor(today.getMinutes() / 10);
    let minutesTwo = today.getMinutes() % 10;


    let hoursOne = Math.floor(today.getHours() / 10);
    let hoursTwo = today.getHours() % 10;

    setRotation('hours-one', (hoursOne*36))
    setRotation('hours-two', (hoursTwo * 36))

    setRotation('minutes-one', (minutesOne * 36))
    setRotation('minutes-two', (minutesTwo * 36))


    setRotation('seconds-one', (secondsOne * 36))
    setRotation('seconds-two', (secondsTwo * 36))

    setTimeout("tictok()",1000);
}
tictok();




















/*


function fullRueda(rueda , inicio , limite){

    let  ruedaReloj = document.getElementById(rueda);
    let cadena = "";

    for(let i  =inicio; i<10; i++){
        
        cadena = cadena + "<div class='card c"+i+ " '>"
            if(i<=limite) cadena = cadena + i;
            cadena = cadena + "</div>"
        }


    for (let i = 0; i < inicio; i++) {

        cadena = cadena + "<div class='card c" + i + " '>"
        if (i <= limite) cadena = cadena + i;
        cadena = cadena + "</div>"
    }

    ruedaReloj.innerHTML = cadena
}

let time = new Date();
let hourOne = time.getHours();
while(hourOne%10 != 0  )  hourOne--;
hourOne = hourOne / 10;
   
    fullRueda('hours-one', hourOne, 2)

    let hourTwo = time.getHours();
        hourTwo = hourTwo - (hourOne*10);
fullRueda('hours-two', hourTwo, 9)


let minuteOne = time.getMinutes();
while (minuteOne % 10 != 0) minuteOne--;
minuteOne = minuteOne / 10;

fullRueda('minutes-one', minuteOne, 5)

let minuteTwo = time.getMinutes();
minuteTwo = minuteTwo - (minuteOne * 10);
fullRueda('minutes-two', minuteTwo, 9)


let secondOne = time.getSeconds();
while (secondOne % 10 != 0) secondOne--;
secondOne = secondOne / 10;

fullRueda('seconds-one', secondOne, 5)

let secondTwo = time.getSeconds();
secondTwo = secondTwo - (secondOne * 10);
fullRueda('seconds-two', secondTwo, 9)
*/