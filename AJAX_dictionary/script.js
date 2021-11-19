function LoadFile() {
    var currentText = document.getElementById('word').value;
    var letter = currentText[0];
    console.log(letter);

    var R = new XMLHttpRequest();
    R.open('GET', letter + '.txt', true);
    R.send();
    R.onload = function() {
        myData = R.responseText;
        select = document.getElementById('list');
        
        ClearSelect(select);

        if(currentText != "") {
            var words = myData.split('\n');
            var found = false;

            for(i = 0; i < words.length; i++) {
                var word = words[i].split(' ')[0];
                var regex = new RegExp('\D*' + currentText + '\D*', 'i');
                
                if(regex.test(word)) {
                    var option = document.createElement('option');
                    option.value = option.text = words[i];
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

function ClearInput() {
    document.getElementById('word').value = "";
}