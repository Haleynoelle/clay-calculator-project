document.addEventListener("DOMContentLoaded", function() {
    var calculateButton = document.getElementById("calculateShrinkRate");
    calculateButton.addEventListener("click", calculateShrink);
});

function calculateShrink() {
    var preferredWidth = parseFloat(document.getElementById("preferredWidth").value);
    var preferredHeight = parseFloat(document.getElementById("preferredHeight").value);
    var preferredLength = parseFloat(document.getElementById("preferredLength").value);
    var shrinkRate = parseFloat(document.getElementById("shrinkRate").value);
    
    if (isNaN(preferredWidth) || isNaN(preferredHeight) || isNaN(preferredLength) || isNaN(shrinkRate)) {
        document.getElementById("result").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }
    
    // Calculate the required initial width, height, and length based on the preferred dimensions and shrink rate
    var initialWidth = preferredWidth / (1 - (shrinkRate / 100));
    var initialHeight = preferredHeight / (1 - (shrinkRate / 100));
    var initialLength = preferredLength / (1 - (shrinkRate / 100));
    
    document.getElementById("result").innerHTML = "Build to these dimensions before firing: <br>" +
                                                     "Width: " + initialWidth.toFixed(2) + " inches<br>" +
                                                     "Length: " + initialLength.toFixed(2) + " inches<br>" +
                                                     "Height: " + initialHeight.toFixed(2) + " inches<br>";
                                                     
}