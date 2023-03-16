function generateRandomNumberBetween(number) {
    let num = Math.floor(Math.random() * number);
    return num;
}

function generate8BallMessage() {
    let messages = ["Yes", "No", "Maybe", "Shake Again","Kyle is a bitch" , "Prepare to Die", "Omae Wa Mou Shin De Ru"];
    document.getElementById("8-ball-message").innerHTML = messages[generateRandomNumberBetween(messages.length)];
}