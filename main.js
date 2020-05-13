function GetEven() {
    var nbr1 = parseFloat(document.getElementById("nbr1").value, 10);
    var nbr2 = parseFloat(document.getElementById("nbr2").value, 10);
    var evenTextarea = document.getElementById( 'resultNumber');
    var change;
    var error = 0;
    var text = "";

    if (nbr1 < 2 || nbr1 > 100){
        text += "Number 1 input "+document.getElementById("nbr1").value+" is not in the range 2 and 100\n";
        error += 1;
    }
    else if (isNaN(nbr1)) {
        text += "Number 1 input "+document.getElementById("nbr1").value+" is not a valid number\n";
        error += 1;
    }

    if (nbr2 < 2 || nbr2 > 100){
        text += "Number 2 input "+document.getElementById("nbr2").value+"  is not in the range 2 and 100";
        error += 1;
    }
    else if (isNaN(nbr2)){
        text += "Number 2 input "+document.getElementById("nbr2").value+" is not a valid number";
        error += 1;
    }

    if (error > 0) {
        evenTextarea.style.color = "red";
        evenTextarea.innerText = text;
        return;
    }
    else {
        if (nbr2 < nbr1){
            change = nbr2;
            nbr2 = nbr1;
            nbr1 = change;
        }

        var value = nbr1, resultPrime = [];
        for (var i = value; i <= nbr2; i++) {
            if (i % 2 == 0)
                resultPrime.push(i);
        }

        var str = "There are "+resultPrime.length+" even numbers :\n"+resultPrime.toString();
        evenTextarea.style.color = "cornflowerblue";
        evenTextarea.innerHTML = str;
    }
}