        // Change Button Color
        const colorButton = document.getElementById('colorButton');
        colorButton.addEventListener('click', () => {
            const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3FF33', '#FF33F6'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            colorButton.style.backgroundColor = randomColor;
        });

        // Greeting Alert
        function displayGreeting() {
            const hours = new Date().getHours();
            let greeting;

            if (hours < 12) {
                greeting = "Good morning!";
            } else if (hours < 18) {
                greeting = "Good afternoon!";
            } else {
                greeting = "Good evening!";
            }

            alert(greeting);
        }

        // Basic Calculator
        function addNumbers() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);

            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('result').innerText = "Please enter valid numbers!";
            } else {
                document.getElementById('result').innerText = num1 + num2;
            }
        }