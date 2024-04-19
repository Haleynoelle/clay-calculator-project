/* ----- SHRINK RATE CALCULATOR ----- */

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

/* ----- VOLUME CALCULATOR ----- */

document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateRVolume");
    calculateVolumeButton.addEventListener("click", calculateRectangleVol);
});
document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateCVolume");
    calculateVolumeButton.addEventListener("click", calculateCylinderVol);
});

function defaultShapeChoice() {
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'block';
};

function shapeChoiceRectangleFunction() {
    document.getElementById('shapeChoiceRectangle').addEventListener('click', () => {
        document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
        document.getElementById('rectangleVolumeCalculatorForm').style.display = 'block';
    });
}
function shapeChoiceCylinderFunction() {
    document.getElementById('shapeChoiceCylinder').addEventListener('click', () => {
        document.getElementById('rectangleVolumeCalculatorForm').style.display = 'none';
        document.getElementById('cylinderVolumeCalculatorForm').style.display = 'block';
    });
}

/* ----- RECTANGLE ----- */

function calculateRectangleVol() {
    var rectangleWidth = parseFloat(document.getElementById("rectangleWidth").value);
    var rectangleHeight = parseFloat(document.getElementById("rectangleHeight").value);
    var rectangleLength = parseFloat(document.getElementById("rectangleLength").value);

    if (isNaN(rectangleWidth) || isNaN(rectangleHeight) || isNaN(rectangleLength)) {
        document.getElementById("rectangleResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var rectangleVolume = ((rectangleWidth *  rectangleHeight * rectangleLength) * 0.554113);

    document.getElementById("rectangleResult").innerHTML = "Volume in oz = " + rectangleVolume.toFixed(2);
};

/* ----- CYLINDER ----- */

function calculateCylinderVol() {
    var cylinderDiameter = parseFloat(document.getElementById("cylinderDiameter").value);
    var cylinderHeight = parseFloat(document.getElementById("cylinderHeight").value);

    if (isNaN(cylinderDiameter) || isNaN(cylinderHeight)) {
        document.getElementById("cylinderResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }
    var cylinderRadius = (cylinderDiameter / 2) 
    var cylinderVolume = ((Math.PI * Math.pow(cylinderRadius, 2) * cylinderHeight) * 0.554113);

    document.getElementById("cylinderResult").innerHTML = "Volume in oz = " + cylinderVolume.toFixed(2);
};

/*FIRING FEE CALCULATOR*/

document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateRVolume");
    calculateVolumeButton.addEventListener("click", calculateRectangleVol);
});
document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateCVolume");
    calculateVolumeButton.addEventListener("click", calculateCylinderVol);
});

function defaultStudioCalculation() {
    document.getElementById('studioPreferenceCubicInchForm').style.display = 'none';
    document.getElementById('studioPreferenceSquareInchForm').style.display = 'none';
    document.getElementById('studioPreferenceWeightForm').style.display = 'block';
};

function studioPreferenceWeightFunction() {
    document.getElementById('studioPreferenceWeight').addEventListener('click', () => {
        document.getElementById('studioPreferenceCubicInchForm').style.display = 'none';
        document.getElementById('studioPreferenceSquareInchForm').style.display = 'none';
        document.getElementById('studioPreferenceWeightForm').style.display = 'block';
    });
}
function studioPreferenceCubicInchFunction() {
    document.getElementById('studioPreferenceCubicInch').addEventListener('click', () => {
        document.getElementById('studioPreferenceWeightForm').style.display = 'none';
        document.getElementById('studioPreferenceSquareInchForm').style.display = 'none';
        document.getElementById('studioPreferenceCubicInchForm').style.display = 'block';
    });
}
function studioPreferenceSquareInchFunction() {
    document.getElementById('studioPreferenceSquareInch').addEventListener('click', () => {
        document.getElementById('studioPreferenceWeightForm').style.display = 'none';
        document.getElementById('studioPreferenceCubicInchForm').style.display = 'none';
        document.getElementById('studioPreferenceSquareInchForm').style.display = 'block';
    });
}

/* ----- WEIGHT ----- */
/* ----- CUBIC INCH ----- */
/* ----- SQUARE INCH ----- */