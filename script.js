/* ----- SHRINK RATE CALCULATORS ----- */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateShrinkRate").addEventListener("click", calculateShrink);
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
    
    document.getElementById("result").innerHTML =
                                                     "Width: " + initialWidth.toFixed(2) + " inches<br>" +
                                                     "Length: " + initialLength.toFixed(2) + " inches<br>" +
                                                     "Height: " + initialHeight.toFixed(2) + " inches<br>";
                                                     
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateShrinkTest").addEventListener("click", calculateShrinkTest);
});
function calculateShrinkTest() {
    var plasticClayStage = parseFloat(document.getElementById("plasticClayStage").value);
    var glazewareClayStage = parseFloat(document.getElementById("glazewareClayStage").value);

    if (isNaN(plasticClayStage) || isNaN(glazewareClayStage)) {
        document.getElementById("shrinkTestResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var shrinkRateTest = ((plasticClayStage - glazewareClayStage) / plasticClayStage * 100);
    document.getElementById("shrinkTestResult").innerHTML = shrinkRateTest.toFixed(2) + "%";
}

/* ----- VOLUME CALCULATOR ----- */
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateRVolume").addEventListener("click", calculateRectangleVol);
    document.getElementById("calculateCVolume").addEventListener("click", calculateCylinderVol);
    document.getElementById("calculateFVolume").addEventListener("click", calculateFrustumVol);
    document.getElementById("calculateHVolume").addEventListener("click", calculateHemisphereVol);
    document.getElementById("calculateEVolume").addEventListener("click", calculateEllipsoidVol);
    defaultShapeChoice();

    document.getElementById('shapeChoiceRectangle').addEventListener('click', shapeChoiceRectangleFunction);
    document.getElementById('shapeChoiceCylinder').addEventListener('click', shapeChoiceCylinderFunction);
    document.getElementById('shapeChoiceFrustum').addEventListener('click', shapeChoiceFrustumFunction);
    document.getElementById('shapeChoiceHemisphere').addEventListener('click', shapeChoiceHemisphereFunction);
    document.getElementById('shapeChoiceEllipsoid').addEventListener('click', shapeChoiceEllipsoidFunction);
});

function defaultShapeChoice() {
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'block';
    document.getElementById('frustumVolumeCalculatorForm').style.display = 'none';
    document.getElementById('hemisphereVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolumeCalculatorForm').style.display = 'none';
    document.getElementById('rectangleVolume').style.display = 'block';
    document.getElementById('cylinderVolume').style.display = 'none';
    document.getElementById('ellipsoidVolume').style.display = 'none';
    document.getElementById('frustumVolume').style.display = 'none';
    document.getElementById('hemisphereVolume').style.display = 'none';
}

function shapeChoiceRectangleFunction() {
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
    document.getElementById('frustumVolumeCalculatorForm').style.display = 'none';
    document.getElementById('hemisphereVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolumeCalculatorForm').style.display = 'none';
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'block';
    document.getElementById('rectangleVolume').style.display = 'block';
    document.getElementById('cylinderVolume').style.display = 'none';
    document.getElementById('ellipsoidVolume').style.display = 'none';
    document.getElementById('frustumVolume').style.display = 'none';
    document.getElementById('hemisphereVolume').style.display = 'none';
}

function shapeChoiceCylinderFunction() {
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'none';
    document.getElementById('frustumVolumeCalculatorForm').style.display = 'none';
    document.getElementById('hemisphereVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolumeCalculatorForm').style.display = 'none';
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'block';
    document.getElementById('cylinderVolume').style.display = 'block';
    document.getElementById('ellipsoidVolume').style.display = 'none';
    document.getElementById('frustumVolume').style.display = 'none';
    document.getElementById('rectangleVolume').style.display = 'none';
    document.getElementById('hemisphereVolume').style.display = 'none';
}

function shapeChoiceFrustumFunction() {
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'none';
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
    document.getElementById('hemisphereVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolumeCalculatorForm').style.display = 'none';
    document.getElementById('frustumVolumeCalculatorForm').style.display = 'block';
    document.getElementById('frustumVolume').style.display = 'block';
    document.getElementById('ellipsoidVolume').style.display = 'none';
    document.getElementById('cylinderVolume').style.display = 'none';
    document.getElementById('rectangleVolume').style.display = 'none';
    document.getElementById('hemisphereVolume').style.display = 'none';
}

function shapeChoiceHemisphereFunction() {
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'none';
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
    document.getElementById('frustumVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolumeCalculatorForm').style.display = 'none';
    document.getElementById('hemisphereVolumeCalculatorForm').style.display = 'block';
    document.getElementById('hemisphereVolume').style.display = 'block';
    document.getElementById('frustumVolume').style.display = 'none';
    document.getElementById('ellipsoidVolume').style.display = 'none';
    document.getElementById('cylinderVolume').style.display = 'none';
    document.getElementById('rectangleVolume').style.display = 'none';

}
function shapeChoiceEllipsoidFunction() {
    document.getElementById('rectangleVolumeCalculatorForm').style.display = 'none';
    document.getElementById('cylinderVolumeCalculatorForm').style.display = 'none';
    document.getElementById('frustumVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolumeCalculatorForm').style.display = 'block';
    document.getElementById('hemisphereVolumeCalculatorForm').style.display = 'none';
    document.getElementById('ellipsoidVolume').style.display = 'block';
    document.getElementById('frustumVolume').style.display = 'none';
    document.getElementById('cylinderVolume').style.display = 'none';
    document.getElementById('rectangleVolume').style.display = 'none';
    document.getElementById('hemisphereVolume').style.display = 'none';
}



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

function calculateFrustumVol() {
    var frustumHeight = parseFloat(document.getElementById("frustumHeight").value);
    var frustumBaseRadius = parseFloat(document.getElementById("frustumBaseRadius").value);
    var frustumTopRadius = parseFloat(document.getElementById("frustumTopRadius").value);

    if (isNaN(frustumHeight) || isNaN(frustumBaseRadius) || isNaN(frustumTopRadius)) {
        document.getElementById("frustumResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }
    var frustumVolume = ((1/3) * Math.PI * frustumHeight * (Math.pow(frustumTopRadius, 2) + frustumTopRadius * frustumBaseRadius + Math.pow(frustumBaseRadius, 2)) * 0.554113);

    document.getElementById("frustumResult").innerHTML = "Volume in oz = " + frustumVolume.toFixed(2);
};

function calculateHemisphereVol() {
    var hemisphereRadius = parseFloat(document.getElementById("hemisphereRadius").value);

    if (isNaN(hemisphereRadius)) {
        document.getElementById("hemisphereResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }
    
    var hemisphereVolume = (2/3 * Math.PI * Math.pow(hemisphereRadius, 3) * 0.554113);

    document.getElementById("hemisphereResult").innerHTML = "Volume in oz = " + hemisphereVolume.toFixed(2);

}

function calculateEllipsoidVol() {
    var ellipsoidHeightRadius = parseFloat(document.getElementById("ellipsoidHeightRadius").value);
    var ellipsoidLengthRadius = parseFloat(document.getElementById("ellipsoidLengthRadius").value);
    var ellipsoidWidthRadius = parseFloat(document.getElementById("ellipsoidWidthRadius").value);

    if (isNaN(ellipsoidHeightRadius) || isNaN(ellipsoidLengthRadius) || isNaN(ellipsoidWidthRadius)) {
        document.getElementById("ellipsoidResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var ellipsoidVolume = ((4/3 * Math.PI * ellipsoidHeightRadius * ellipsoidLengthRadius * ellipsoidWidthRadius) * 0.554113);
    var halfEllipsoidVolume = ((4/3 * Math.PI * ellipsoidHeightRadius * ellipsoidLengthRadius * ellipsoidWidthRadius) * 0.554113/2);


    document.getElementById("ellipsoidResult").innerHTML = "Full ellipsoid volume in oz = " + ellipsoidVolume.toFixed(2) +
                                                            " <br> Half ellipsoid volume in oz = " + halfEllipsoidVolume.toFixed(2);

};

/* ----- FIRING FEE CALCULATOR ----- */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateFeeByWeight").addEventListener("click", calculateWeightFee);
    document.getElementById("calculateFeeByCubicInch").addEventListener("click", calculateCubicInchFee);
    document.getElementById("calculateFeeBySquareInch").addEventListener("click", calculateSquareInchFee);
    defaultShapeChoice();

    document.getElementById('studioPrefersWeight').addEventListener('click', studioPreferenceWeightFunction);
    document.getElementById('studioPrefersCubicInch').addEventListener('click', studioPreferenceCubicInchFunction);
    document.getElementById('studioPrefersSquareInch').addEventListener('click', studioPreferenceSquareInchFunction);
});

function defaultStudioCalculation() {
    document.getElementById('cubicInchForm').style.display = 'none';
    document.getElementById('squareInchForm').style.display = 'none';
    document.getElementById('weightForm').style.display = 'block';
};

function studioPreferenceWeightFunction() {
        document.getElementById('cubicInchForm').style.display = 'none';
        document.getElementById('squareInchForm').style.display = 'none';
        document.getElementById('weightForm').style.display = 'block';
}
function studioPreferenceCubicInchFunction() {
        document.getElementById('weightForm').style.display = 'none';
        document.getElementById('squareInchForm').style.display = 'none';
        document.getElementById('cubicInchForm').style.display = 'block';
}
function studioPreferenceSquareInchFunction() {
        document.getElementById('weightForm').style.display = 'none';
        document.getElementById('cubicInchForm').style.display = 'none';
        document.getElementById('squareInchForm').style.display = 'block';
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

    document.getElementById("feeByWeightResult").innerHTML = "$" + firingCost.toFixed(2);
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

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateCostToFire").addEventListener("click", calculateCostToFire);
});
function calculateCostToFire() {
    var kilnWatts = parseFloat(document.getElementById("kilnWatts").value);
    var costPerKilowattHour = parseFloat(document.getElementById("costPerKilowattHour").value);
    var adjustmentFactor = parseFloat(document.getElementById("adjustmentFactor").value);
    var hoursOfFiring = parseFloat(document.getElementById("hoursOfFiring").value);


    if (isNaN(kilnWatts) || isNaN(costPerKilowattHour) || isNaN(adjustmentFactor) || isNaN(hoursOfFiring)) {
        document.getElementById("costToFireResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var costToFire = ((kilnWatts / 1000) * costPerKilowattHour * adjustmentFactor * hoursOfFiring);
    document.getElementById("costToFireResult").innerHTML = "Your cost to fire is $" + costToFire.toFixed(2);
}

function menuFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("myDropdown");
    var dropdownButton = document.getElementById("dropdownButton");
    if (!event.target.matches('.dropdown-content') && !event.target.matches('#dropdownButton')) {
        dropdown.style.display = 'none';
    }
});

