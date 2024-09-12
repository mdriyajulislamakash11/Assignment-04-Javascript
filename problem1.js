// problem1 ---> solition

function calculateTax(income, expenses) {

    if( income < 0 || expenses < 0 || income < expenses){
        return 'Invalid Input'
    }
    
    let grossIncome = income - expenses;
    let savings = grossIncome * .20;

    return savings
}
console.log(calculateTax(10000, 3000));