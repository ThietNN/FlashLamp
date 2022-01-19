class Battery {
    setBattery(energy) {
    this.energy = energy;
    }
    getBatteryInfo(){
        return this.energy;
    }
    decreaseEnergy(){
        if(this.energy>0){
            this.energy --;
        }
    }
}

class FlashLamp{
    setBattery(battery) {
        this.battery = battery;
    }
    getBatteryInfo() {
        return this.energy;
    }
    light(){
        if(this.status){
            alert("On");
        }
        else{
            alert("Off")
        }
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}

let battery = new Battery();
battery.setBattery(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();