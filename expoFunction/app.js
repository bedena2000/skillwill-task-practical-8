function expo(userNumber, userDegree, userCallback) {
    if(userDegree === 1) return userNumber;
    return userNumber * expo(userNumber, userDegree - 1, userCallback);
};  
