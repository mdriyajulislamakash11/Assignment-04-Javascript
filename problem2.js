function sendNotification(email) {
    
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }
    
    let str = email.split('@');
    let username = str[0];
    let domainName = str[1];
    

    return username+ " sent you an email from " + domainName;
}

console.log(sendNotification('farhan34@yahoo.com')); 
