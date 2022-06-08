// Code your solution in this file!

function  distanceFromHqInBlocks(distanceDifference){
        if(distanceDifference >= 42){
            return distanceDifference - 42;
        } else {
            return  42 - distanceDifference;
        }
}


function  distanceFromHqInFeet(distanceDifference){
    if(distanceDifference >= 42){
        return (distanceDifference - 42)* 264;
    } else {
        return  (42 - distanceDifference)*264;
    }
}


function distanceTravelledInFeet(start, destination){
    
    if (destination > start){
        return (destination - start)*264;
    }else {
        return (start - destination)*264;
    }
}


function calculatesFarePrice(start, destination){
    let newDistance = distanceTravelledInFeet(start, destination);
    if (newDistance <= 400){
        return newDistance * 0;
    } else if (newDistance > 400 && newDistance <= 2000){
        return (newDistance- 400) * 0.02;
    }else if (newDistance > 2000 && newDistance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

