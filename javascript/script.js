const sub = document.getElementById("subscribe");
let buttonCounter = 0;

if (sub) {
    sub.addEventListener("click", function(event) {
        event.preventDefault();
        buttonCounter++;
        if (buttonCounter === 1) {
            alert("Thanks for subscribing! Unfortunately, we have sold your data " + buttonCounter + " time.");
            return;
        }
        else if (buttonCounter < 5) {
            alert("Thanks for subscribing again! Unfortunately, we have sold your data " + buttonCounter + " times.");
        }
        else {
            alert("Alright there's no way you have " + buttonCounter + " SSN's, stop clicking the button.");
        }
    });
}