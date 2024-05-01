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

/* ----- FIRING FEE CALCULATOR ----- */

document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateFeeByWeight");
    calculateVolumeButton.addEventListener("click", calculateWeightFee);
});
document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateFeeByCubicInch");
    calculateVolumeButton.addEventListener("click", calculateCubicInchFee);
});
document.addEventListener("DOMContentLoaded", function() {
    let calculateVolumeButton = document.getElementById("calculateFeeBySquareInch");
    calculateVolumeButton.addEventListener("click", calculateSquareInchFee);
});

function defaultStudioCalculation() {
    document.getElementById('cubicInchForm').style.display = 'none';
    document.getElementById('squareInchForm').style.display = 'none';
    document.getElementById('weightForm').style.display = 'block';
};

function studioPreferenceWeightFunction() {
    document.getElementById('studioPrefersWeight').addEventListener('click', () => {
        document.getElementById('cubicInchForm').style.display = 'none';
        document.getElementById('squareInchForm').style.display = 'none';
        document.getElementById('weightForm').style.display = 'block';
    });
}
function studioPreferenceCubicInchFunction() {
    document.getElementById('studioPrefersCubicInch').addEventListener('click', () => {
        document.getElementById('weightForm').style.display = 'none';
        document.getElementById('squareInchForm').style.display = 'none';
        document.getElementById('cubicInchForm').style.display = 'block';
    });
}
function studioPreferenceSquareInchFunction() {
    document.getElementById('studioPrefersSquareInch').addEventListener('click', () => {
        document.getElementById('weightForm').style.display = 'none';
        document.getElementById('cubicInchForm').style.display = 'none';
        document.getElementById('squareInchForm').style.display = 'block';
    });
}

/* ----- WEIGHT ----- */
function calculateWeightFee() {
    var pounds = parseFloat(document.getElementById("pounds").value);
    var ounces = parseFloat(document.getElementById("ounces").value);
    var feePerPound = parseFloat(document.getElementById("feePerPound").value);
    var fixedCosts = parseFloat(document.getElementById("fixedCosts").value);

    if (isNaN(pounds) || isNaN(ounces) || isNaN(feePerPound)) {
        document.getElementById("feeByWeightResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var ouncesToPounds = (ounces * 0.0625)
    var firingCost = ((pounds + ouncesToPounds) * feePerPound + fixedCosts);

    document.getElementById("feeByWeightResult").innerHTML = "Cost to fire = $" + firingCost.toFixed(2);
};
/* ----- CUBIC INCH ----- */
function calculateCubicInchFee() {
    var feeHeight = parseFloat(document.getElementById("feeHeight").value);
    var feeWidth = parseFloat(document.getElementById("feeWidth").value);
    var feeLength = parseFloat(document.getElementById("feeLength").value);
    var feeSpace = parseFloat(document.getElementById("feeSpace").value);
    var fireFixedCost = parseFloat(document.getElementById("fireFixedCost").value);


    if (isNaN(feeHeight) || isNaN(feeWidth) || isNaN(feeLength) || isNaN(feeSpace) || isNaN(fireFixedCost)) {
        document.getElementById("cubicInchResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var firingCostCI = ((feeHeight * feeWidth * feeLength) * feeSpace + fireFixedCost);

    document.getElementById("cubicInchResult").innerHTML = "Cost to fire = $" + firingCostCI.toFixed(2);
};
/* ----- SQUARE INCH ----- */
function calculateSquareInchFee() {
    var siWidth = parseFloat(document.getElementById("siWidth").value);
    var siLength = parseFloat(document.getElementById("siLength").value);
    var siSpace = parseFloat(document.getElementById("siSpace").value);
    var siFixedCost = parseFloat(document.getElementById("siFixedCost").value);


    if (isNaN(siWidth) || isNaN(siLength) || isNaN(siSpace) || isNaN(siFixedCost)) {
        document.getElementById("squareInchResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var firingCostSI = ((siWidth * siLength) * siSpace + siFixedCost);

    document.getElementById("squareInchResult").innerHTML = "Cost to fire = $" + firingCostSI.toFixed(2);
};





/*experiments

document.getElementById("volumeLink").onclick = changeLinkColor;

function changeLinkColor() {
    document.getElementById("volumeLink").style.color = "red";
}*/