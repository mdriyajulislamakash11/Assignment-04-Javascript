function calculateFinalScore(obj) {

    if (typeof obj !== 'object' || obj === null ) {
        return 'Invalid Input';
    }

    if (typeof obj.name !== 'string' ||
         typeof obj.testScore !== 'number' || obj.testScore > 50 ||
          typeof obj.schoolGrade !== 'number' || obj.schoolGrade > 30 ||
           typeof obj.isFFamily !== 'boolean') {
        return 'Invalid Input';
    }

    let totallScore = obj.testScore + obj.schoolGrade;

    if (isFFamily){
        totallScore = totallScore + 20;
    }
    return totallScore >= 80;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 50,  schoolGrade: 30, isFFamily : true  }))






















function calculateFinalScore(obj) {
    if (typeof obj !== "object" || obj === null) {
        return "Invalid Input";
    }

    const { name, testScore, schoolGrade, isFFamily } = obj;

    if (typeof name !== "string" || 
        typeof testScore !== "number" || testScore > 50 ||
        typeof schoolGrade !== "number" || schoolGrade > 30 ||
        typeof isFFamily !== "boolean") {
        return "Invalid Input";
    }

    let finalScore = testScore + schoolGrade;
    if (isFFamily) {
        finalScore += 20;
    }

    return finalScore >= 80;
}