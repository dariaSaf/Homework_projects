var myData;
var select;

function LoadJSON() {
    var R = new XMLHttpRequest();
    R.open('GET', 'pobeda.json', true);
    R.send();
    R.onload = function() {
        myData = JSON.parse(R.responseText);
        select = document.getElementById('list');
        var currentText = document.getElementById('general').value;

        ClearSelect(select);

        if(currentText != "") {
            var found = false;
            for(i = 0; i < myData.generals.person.length; i++) {
                var upperText = currentText.toUpperCase();
                var upperName = myData.generals.person[i].name.toUpperCase();

                if(upperName.includes(upperText)){
                   var option = document.createElement('option');
                   option.value = option.text = myData.generals.person[i].name;
                   select.add(option);
                   found = true;
                }
            }

            if(!found){
                var option = document.createElement('option');
                option.value = option.text = "Ничего не найдено";
                select.add(option);
            }
        }
        else {
            ClearSelect(select);
        }
        
    }
}

function ClearSelect(select){
    while (select.options.length) {
        select.remove(0);
    }
}

function NameClick() {
    var selectedOption = select.options[select.selectedIndex];
    
    for(i = 0; i < myData.generals.person.length; i++) {
        if(selectedOption.text == myData.generals.person[i].name){
            document.location.href = myData.generals.person[i].url;
        }
    }
}

function ClearInput() {
    document.getElementById('general').value = "";
}