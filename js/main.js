
let now = new Date();


//Ik heb de datum en tijd naar een mooie tekst inverwerkt (bijv. "16/04/2025 14:03")
let formattedTime = now.toLocaleString("nl-NL", {
 day: "2-digit",
 month: "long",
 year: "numeric",
 hour: "2-digit",
 minute: "2-digit"
});

let updatedElement = document.querySelector("#last-updated");

updatedElement.textContent = "Laatste bijgewerkt op: " + formattedTime;

