window.alert("Team 505: Brain Not Ready");

const ageInput = document.getElementById('ageInput');
        const checkAgeBtn = document.getElementById('checkAgeBtn');
        const ageResult = document.getElementById('ageResult');

        checkAgeBtn.addEventListener('click', () => {
            const age = Number(ageInput.value);
            if (isNaN(age)) {
                ageResult.textContent = 'Please enter a valid number for age.';
                ageResult.style.color = 'crimson';
                return;
            }

            // Here is the if / else logic: if age is 18 or older, show Adult, otherwise show Minor.
            if (age >= 18) {
                ageResult.textContent = `You are ${age} years old — Adult.`;
                ageResult.style.color = 'green';
            } else {
                ageResult.textContent = `You are ${age} years old — Minor.`;
                ageResult.style.color = 'blue';
            }
        });

        // Example 2: if / else if / else
        const tempInput = document.getElementById('tempInput');
        const tempBtn = document.getElementById('tempBtn');
        const tempResult = document.getElementById('tempResult');

        tempBtn.addEventListener('click', () => {
            const temp = Number(tempInput.value);
            if (isNaN(temp)) {
                tempResult.textContent = 'Please enter a valid temperature.';
                tempResult.style.color = 'crimson';
                return;
            }

            // if / else if / else chain provides multiple branches depending on the temperature
            if (temp <= 0) {
                tempResult.textContent = 'Freezing! Wear a heavy coat.';
                tempResult.style.color = 'navy';
            } else if (temp <= 20) {
                tempResult.textContent = 'Cool weather. Wear a jacket.';
                tempResult.style.color = 'teal';
            } else if (temp <= 30) {
                tempResult.textContent = 'Nice and warm.';
                tempResult.style.color = 'green';
            } else {
                tempResult.textContent = 'Hot — stay hydrated and stay in the shade.';
                tempResult.style.color = 'orange';
            }
        });

        // Example 3: Guess The Color if / else if / else
        const colorInput = document.getElementById('colorInput');
        const colorBtn = document.getElementById('colorBtn');
        const colorResult = document.getElementById('colorResult');

        colorBtn.addEventListener('click', () => {
            const color = colorInput.value.trim().toLowerCase();
            if (!color) {
                colorResult.textContent = 'Please enter a color.';
                colorResult.style.color = 'crimson';
                return;
            }

            if (color === 'red') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'blue') {
                colorResult.textContent = 'Wrong Guess! But you are getting closer.';
                colorResult.style.color = 'red';
            } else if (color === 'green') {
                colorResult.textContent = 'Good Guess, but Wrong!';
                colorResult.style.color = 'red';
            } else if (color === 'yellow') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'pink') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'black') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'white') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'purple') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'orange') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'brown') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'grey') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'cyan') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'magenta') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'lime') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'teal') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'navy') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'olive') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'maroon') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'violet') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'indigo') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'silver') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'gold') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'beige') {
                colorResult.textContent = 'Correct Guess, Congratulations!';
                colorResult.style.color = 'green';
            } else if (color === 'coral') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'salmon') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'turquoise') {
                colorResult.textContent = 'Wrong Guess!';
                colorResult.style.color = 'red';
            } else if (color === 'lapu lapu') {
                colorResult.textcontent = 'Correct Guess,Congratulations!';
                colorResult.style.color = 'red';
            } else {
                colorResult.textContent = `Try again!`;
                colorResult.style.color = 'grey';
            }
        });