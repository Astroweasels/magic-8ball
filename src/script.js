function generateRandomNumberBetween(number) {
    let num = Math.floor(Math.random() * number);
    return num;
}

function generate8BallMessage() {
    let messages = ["Yes", "No", "Maybe", "Shake Again","Love You!" , "It is what it is","Don't count on it :C"];
    document.getElementById("8-ball-message").innerHTML = messages[generateRandomNumberBetween(messages.length)];
}