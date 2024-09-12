//problem3 ----> soution

function checkDigitsInName(name) {

    if (typeof name !== 'string') {
        return 'Invalid Input';
    }

    const chackNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (let number of chackNumbers){
        if (name.includes(number)) {
            return true;
        }
    }
    return false;
}
console.log(checkDigitsInName('akash'))

