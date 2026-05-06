const sub = document.getElementById("subscribe");
let buttonCounter = 0;

if (sub) {
    sub.addEventListener("click", function(event) {
        const email = document.getElementById("email").value.trim();
        const name = document.getElementById("name").value.trim();
        const maidenName = document.getElementById("maidenName").value.trim();
        const ssn = document.getElementById("ssn").value.trim();

        if (!email || !name || !maidenName || !ssn) {
            event.preventDefault();
            alert("Please fill in ALL fields before subscribing.");
            return;
        }

        buttonCounter++;
        if (buttonCounter === 1) {
            alert("Thanks for subscribing! Unfortunately, we have sold your data " + buttonCounter + " time.");
        }
        else if (buttonCounter < 5) {
            alert("Thanks for subscribing again! Unfortunately, we have sold your data " + buttonCounter + " times.");
        }
        else {
            alert("Alright there's no way you have " + buttonCounter + " SSN's, stop clicking the button.");
        }
    });
}