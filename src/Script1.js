$(document).ready(function () {

    function transfer() {
        var url = "https://www.google.com";

        
        var inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.value = url;

        
        document.body.appendChild(inputElement);

        
        inputElement.select();

        
        document.execCommand("copy");

        
        document.body.removeChild(inputElement);
    }


    const form1 = document.getElementById('form1');
    const form2 = document.getElementById('form2');


    
    $("#send").click(function () {
        form2.style.display = 'none';
        form1.style.display = 'block';
    });

    $("#help").click(function () {
        transfer();
    });
   
});
