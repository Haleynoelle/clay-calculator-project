
document.addEventListener("DOMContentLoaded", function() {

        const numberInputs = document.querySelectorAll('input[type="number"]');
        numberInputs.forEach(input => {
            input.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9.]/g, '');
            });
            input.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    event.preventDefault();
                    const form = input.form;
                    if (form) {
                        form.dispatchEvent(new Event('submit', { cancelable: true }));
                    }
                }
            });
        });

        function clearInputs() {
            const inputs = document.querySelectorAll('input[type="text"]');
            inputs.forEach(input => {
                input.value = ""; 
            });
            
            // Clear the content of elements with the specified class name
            const resultDivs = document.querySelectorAll('.result');
            resultDivs.forEach(div => {
                div.innerHTML = "";
            });
        }
        document.getElementById("clearPlasticCalculatorButton").addEventListener("click", clearInputs);

        document.getElementById("clearCalculatorButton").addEventListener("click", clearInputs);

});

/* --- PRICE YO WORK CALCULATOR --- */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculatePriceOfWork").addEventListener("click", calculatePrice);
    const inputs = document.querySelectorAll('#pricingForm input');

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculatePrice(); 
            }
        });
    });
});

function calculatePrice() {
    const materialCost = parseFloat(document.getElementById('materialCost').value);
    const laborHours = parseFloat(document.getElementById('laborHours').value);
    const hourlyRate = parseFloat(document.getElementById('hourlyRate').value);
    const overheadCost = parseFloat(document.getElementById('overheadCost').value);
    const profitMargin = parseFloat(document.getElementById('profitMargin').value) / 100;

    if (isNaN(materialCost) || isNaN(laborHours) || isNaN(hourlyRate) || isNaN(profitMargin) || isNaN(overheadCost)) {
        document.getElementById("priceWorkResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    const laborCost = laborHours * hourlyRate;
    const totalCost = materialCost + laborCost + overheadCost;
    const price = totalCost / (1 - profitMargin);

    document.getElementById('priceWorkResult').innerHTML = 
        "Your Cost: $" + totalCost.toFixed(2) + " <br>" +
        "Suggested Retail Price: $" +  price.toFixed(2) + " <br>" +
        "Profit: $" + (price - totalCost).toFixed(2) + " <br>"
    ;
}




/* ----- SHRINK RATE CALCULATORS ----- */



document.addEventListener("DOMContentLoaded", function() {
    // Event listener for the fired-to-plastic calculation
    document.getElementById("calculateShrinkRate").addEventListener("click", calculateShrink);
    
    // Event listener for the plastic-to-fired calculation
    document.getElementById("calculatePlasticToFired").addEventListener("click", calculatePlasticToFired);
    
    // Add event listeners to inputs for 'Enter' key submission
    const inputs = document.querySelectorAll('#clayShrinkRateForm input, #shrinkRateForm input, #plasticDimensionsForm input, #shrinkRateForm2 input');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                calculatePlasticToFired(); 
            }
        });
    });
});

function defaultShapeChoice2() {
    document.getElementById('dimensionForm2').style.display = 'none';
    document.getElementById('dimensionForm1').style.display = 'block';
}

function firedToPlasticDimensionFunction() {
    document.getElementById('dimensionForm2').style.display = 'none';
    document.getElementById('dimensionForm1').style.display = 'block';
}

function plasticToFiredDimensionFunction() {
    document.getElementById('dimensionForm1').style.display = 'none';
    document.getElementById('dimensionForm2').style.display = 'block';

}

function calculatePlasticToFired() {
    var plasticWidth = parseFloat(document.getElementById("plasticWidth").value);
    var plasticHeight = parseFloat(document.getElementById("plasticHeight").value);
    var plasticLength = parseFloat(document.getElementById("plasticLength").value);
    var shrinkRate = parseFloat(document.getElementById("shrinkRate2").value);
    
    if (isNaN(plasticWidth) || isNaN(plasticHeight) || isNaN(plasticLength) || isNaN(shrinkRate)) {
        document.getElementById("dimensionResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    // Calculate the fired dimensions based on the plastic dimensions and shrink rate
    var firedWidth = plasticWidth * (1 - (shrinkRate / 100));
    var firedHeight = plasticHeight * (1 - (shrinkRate / 100));
    var firedLength = plasticLength * (1 - (shrinkRate / 100));

    document.getElementById("dimensionResult").innerHTML =
                                                     "Your project will shrink to these dimensions:<br>" +
                                                     "<br>" +
                                                     "Fired Width: " + firedWidth.toFixed(2) + " inches<br>" +
                                                     "Fired Length: " + firedLength.toFixed(2) + " inches<br>" +
                                                     "Fired Height: " + firedHeight.toFixed(2) + " inches<br>";
}

function calculateShrink() {
    var preferredWidth = parseFloat(document.getElementById("preferredWidth").value);
    var preferredHeight = parseFloat(document.getElementById("preferredHeight").value);
    var preferredLength = parseFloat(document.getElementById("preferredLength").value);
    var shrinkRate = parseFloat(document.getElementById("shrinkRate").value);
    
    if (isNaN(preferredWidth) || isNaN(preferredHeight) || isNaN(preferredLength) || isNaN(shrinkRate)) {
        document.getElementById("dimensionResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }
    
    // Calculate the required initial width, height, and length based on the preferred dimensions and shrink rate
    var initialWidth = preferredWidth / (1 - (shrinkRate / 100));
    var initialHeight = preferredHeight / (1 - (shrinkRate / 100));
    var initialLength = preferredLength / (1 - (shrinkRate / 100));
    
    document.getElementById("dimensionResult").innerHTML =
                                                     "Build to these dimensions:<br>" +
                                                     "<br>" +
                                                     "Width: " + initialWidth.toFixed(2) + " inches<br>" +
                                                     "Length: " + initialLength.toFixed(2) + " inches<br>" +
                                                     "Height: " + initialHeight.toFixed(2) + " inches<br>";
}



document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateShrinkTest").addEventListener("click", calculateShrinkTest);
    const inputs = document.querySelectorAll('#clayShrinkRateTestForm input');

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default action
                calculateShrinkTest(); // Call the calculateShrink function
            }
        });
    });
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
    

    function clearInputs() {
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.value = ""; // Set value to empty string
        });
        
        // Clear the content of elements with the specified class name
        const resultDivs = document.querySelectorAll('.result');
        resultDivs.forEach(div => {
            div.innerHTML = ""; // Set innerHTML to empty string
        });
    }

    // Event listener for the clear buttons
    document.getElementById("clearRectangleCalculatorButton").addEventListener("click", clearInputs);
    document.getElementById("clearCylinderCalculatorButton").addEventListener("click", clearInputs);
    document.getElementById("clearFrustumCalculatorButton").addEventListener("click", clearInputs);
    document.getElementById("clearHemisphereCalculatorButton").addEventListener("click", clearInputs);
    document.getElementById("clearEllipsoidCalculatorButton").addEventListener("click", clearInputs);

    const inputs = document.querySelectorAll('#cylinderVolumeCalculatorForm input, #rectangleVolumeCalculatorForm input, #frustumVolumeCalculatorForm input, #hemisphereVolumeCalculatorForm input, #ellipsoidVolumeCalculatorForm input');

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); 
                switch (input.form.id) {
                    case 'rectangleVolumeCalculatorForm':
                        calculateRectangleVol();
                        break;
                    case 'cylinderVolumeCalculatorForm':
                        calculateCylinderVol();
                        break;
                    case 'frustumVolumeCalculatorForm':
                        calculateFrustumVol();
                        break;
                    case 'hemisphereVolumeCalculatorForm':
                        calculateHemisphereVol();
                        break;
                    case 'ellipsoidVolumeCalculatorForm':
                        calculateEllipsoidVol();
                        break;
                    default:
                        break;
                }
            }
        });
    });

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
    var frustumVolume = ((1/3) * Math.PI * frustumHeight * (Math.pow(frustumTopRadius, 2) + frustumTopRadius * frustumBaseRadius + Math.pow(frustumBaseRadius, 2)) * 0.554112);

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
    defaultStudioCalculation();

    function clearInputs() {
        const inputs = document.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.value = ""; // Set value to empty string
        });
        
        const resultDivs = document.querySelectorAll('.result');
        resultDivs.forEach(div => {
            div.innerHTML = "";
        });
    }
    
    document.getElementById("clearWeightCalculatorButton").addEventListener("click", clearInputs);
    document.getElementById("clearSquareInchCalculatorButton").addEventListener("click", clearInputs);
    document.getElementById("clearCubicInchCalculatorButton").addEventListener("click", clearInputs);

    const inputs = document.querySelectorAll('#cubicInchForm input, #squareInchForm input, #weightForm input');

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default action

                // Identifying the form and calling the appropriate function
                switch (input.form.id) {
                    case 'cubicInchForm':
                        calculateCubicInchFee();
                        break;
                    case 'squareInchForm':
                        calculateSquareInchFee();
                        break;
                    case 'weightForm':
                        calculateWeightFee();
                        break;
                    default:
                        break;
                }
            }
        });
    });

    document.getElementById('studioPrefersWeight').addEventListener('click', studioPreferenceWeightFunction);
    document.getElementById('studioPrefersCubicInch').addEventListener('click', studioPreferenceCubicInchFunction);
    document.getElementById('studioPrefersSquareInch').addEventListener('click', studioPreferenceSquareInchFunction);
});

function defaultStudioCalculation() {
    document.getElementById('cubicInchForm').style.display = 'none';
    document.getElementById('squareInchForm').style.display = 'none';
    document.getElementById('weightForm').style.display = 'block';
}

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

    if (isNaN(pounds) || isNaN(ounces) || isNaN(feePerPound) || isNaN(fixedCosts)) {
        document.getElementById("feeByWeightResult").innerHTML = "Please enter valid numbers for all fields.";
        return;
    }

    var ouncesToPounds = (ounces * 0.0625);
    var firingCost = ((pounds + ouncesToPounds) * feePerPound + fixedCosts);

    document.getElementById("feeByWeightResult").innerHTML = "$" + firingCost.toFixed(2);
}

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
}

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
}

/* ----- COST TO FIRE KILN ----- */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("calculateCostToFire").addEventListener("click", calculateCostToFire);
    const inputs = document.querySelectorAll('#costToFireForm input');

    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculateCostToFire(); 
            }
        });
    });
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
    var links = document.getElementById("myLinks");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("myLinks");
    var button = document.querySelector(".icon");

    if (!dropdown.contains(event.target) && !button.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

function showAntiSocialModal() {
    document.getElementById('antiSocialModal').style.display = 'block';
}

function closeAntiSocialModal() {
    document.getElementById('antiSocialModal').style.display = 'none';
}
/* SHARE FUNCTION */
document.addEventListener("DOMContentLoaded", function() {
    const viewBtn = document.querySelector(".view-modal"),
          popup = document.querySelector(".popup"),
          close = popup.querySelector(".close"),
          field = popup.querySelector(".field"),
          input = field.querySelector("input"),
          copy = field.querySelector("button");

    const openModal = () => {
        popup.classList.add("show");
    };

    const closeModal = () => {
        popup.classList.remove("show");
    };

    viewBtn.onclick = openModal;
    close.onclick = closeModal;

    copy.onclick = async () => {
        try {
            await navigator.clipboard.writeText(input.value); // Copy the input value to the clipboard
            field.classList.add("active");
            copy.innerText = "Copied";
            setTimeout(() => {
                field.classList.remove("active");
                copy.innerText = "Copy";
            }, 3000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    document.addEventListener("click", function(event) {
        if (!popup.contains(event.target) && !viewBtn.contains(event.target)) {
            closeModal();
        }
    });
});

/* TRACK SUBMIT FUNCTION */
function updateClickCount() {
    // Retrieve the current count from local storage, or start at 0 if it doesn't exist
    let clickCount = localStorage.getItem('submitClickCount') || 0;
    clickCount = parseInt(clickCount, 10);

    // Increment the count
    clickCount++;

    // Store the updated count back in local storage
    localStorage.setItem('submitClickCount', clickCount);

    // Display the updated count to the user
    document.getElementById('clickCountDisplay').textContent = 
        `${clickCount}x`;
}

// Function to attach event listeners to specific buttons
function attachButtonClickListeners() {
    // IDs of the buttons you want to track
    const buttonIds = [
        'calculateRVolume',
        'calculateCVolume',
        'calculateFVolume',
        'calculateHVolume',
        'calculateEVolume',
        'calculateShrinkRate',
        'calculateFeeBySquareInch',
        'calculateFeeByCubicInch',
        'calculateFeeByWeight',
        'calculateShrinkRate',
        'calculateCostToFire',
        'calculateShrinkTest'
    ];

    // Attach the updateClickCount function to each button
    buttonIds.forEach(buttonId => {
        const button = document.getElementById(buttonId);
        if (button) {
            button.addEventListener('click', updateClickCount);
        }
    });
}

/* Display the current count on page load */
document.addEventListener('DOMContentLoaded', () => {
    let clickCount = localStorage.getItem('submitClickCount') || 0;
    document.getElementById('clickCountDisplay').textContent = 
        `${clickCount}x`;

    // Attach event listeners to the buttons
    attachButtonClickListeners();
});