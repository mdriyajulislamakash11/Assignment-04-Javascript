function  waitingTime(waitingTimes , serialNumber) {

    if(Array.isArray(waitingTimes) !== true || typeof serialNumber !== 'number'){
        return 'Invalid Input';
    }

    let sumTime = 0 ;
    for(const time of waitingTimes){   
        sumTime += time;
    }

    const avgTime = Math.round(sumTime / waitingTimes.length);

    const herSerialNo = serialNumber - 1;
    const perticipants = herSerialNo - waitingTimes.length;
    const needTime = avgTime * perticipants;

    return needTime;
}

console.log(waitingTime([7, 8, 3, 4, 5], "9"))