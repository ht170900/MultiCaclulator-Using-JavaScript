function display(val) 
        { 
            document.getElementById("result").value+=val;
        } 
        function cal() 
        { 
            let a = document.getElementById("result").value;
            let b = eval(a); 
            document.getElementById("result").value = b;
        } 
        function clear() 
        { 
            document.getElementById("result").value = "" 
        } 