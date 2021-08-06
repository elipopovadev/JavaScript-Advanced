function roadRadar(speed, area) {
    const motorwaySpeedLimit = 130;
    const interstateSpeedLimit = 90;
    const citySpeedLimit = 50;
    const residentialSpeedLimit = 20;

    let output;
    if (area === 'motorway') {
        if (speed > motorwaySpeedLimit && speed <= motorwaySpeedLimit + 20){
            output = 'speeding';
        } else if (speed > motorwaySpeedLimit + 20 && speed <= motorwaySpeedLimit + 40){
            output = 'excessive speeding';
        } else if (speed > motorwaySpeedLimit + 40) {
            output = 'reckless driving';
        }
    }

    if (area === 'interstate') {
        if (speed > interstateSpeedLimit && speed <= interstateSpeedLimit + 20) {
            output = 'speeding';
        } else if (speed > interstateSpeedLimit + 20 && speed <= interstateSpeedLimit + 40) {
            output = 'excessive speeding';
        } else if (speed > interstateSpeedLimit + 40) {
            output = 'reckless driving';
        }
    }

    if (area === 'city') {
        if (speed > citySpeedLimit && speed <= citySpeedLimit + 20) {
            output = 'speeding';
        } else if (speed > citySpeedLimit + 20 && speed <= citySpeedLimit + 40){
            output = 'excessive speeding';
        } else if (speed > citySpeedLimit + 40) {
            output = 'reckless driving';
        }
    }

    if (area === 'residential') {
        if(speed > residentialSpeedLimit && speed <= residentialSpeedLimit + 20) {
            output = 'speeding';
        } else if (speed > residentialSpeedLimit + 20 && speed <= residentialSpeedLimit + 40) {
            output = 'excessive speeding';
        } else if (speed > residentialSpeedLimit + 40) {
            output = 'reckless driving';
        }
    }

        if (output !== undefined) {
            console.log(output);
        }
    }

    roadRadar(200, 'motorway')




