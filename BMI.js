
        function computeBMI()
        {
            var height=Number(document.getElementById("height").value);
            var heightunit=document.getElementById("heightunit").value;
            var weight=Number(document.getElementById("weight").value);
            var weightunit=document.getElementById("weightunit").value;
            if (heightunit=="inches") height/=39.3700787;
            if (weightunit=="lb") weight/=2.20462;
            var BMI=weight/Math.pow(height,2);
            document.getElementById("output").innerText=Math.round(BMI*100)/100;
            if (output<18.5)
            document.getElementById("comment").value = "Underweight";
            if (output>=18.5 && output<=25)
            document.getElementById("comment").value = "Normal";
            if (output>=25 && output<=30)
            document.getElementById("comment").value = "Obese";
            if (output>30)
            document.getElementById("comment").value = "Overweight";
            document.getElementById("answer").value = output; 
        }