function checkEnd() {
    let A = Math.max(
        document.body.scrollHeight, 
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight);
    let B = Math.max(
        window.pageXOffset, 
        document.documentElement.scrollTop);
    let C = document.documentElement.clientHeight;
    if (A==B+C) {
        let hash =  window.location.hash
        hash = hash.split("#glava")[1];
        if(hash<9) {
            hash++;
            console.log(hash);
            makeRequest('glava' + hash + '.html');
        }
        alert('Достигли конца страницы');
    }
    
}

function makeRequest(url) {
    var R = new XMLHttpRequest();
    R.open('GET',url,true);
    R.send();
    R.onreadystatechange = function() { 
        if (R.readyState == 4) {
            if (R.status == 200) {
                document.getElementById('my').innerHTML+=R.responseText;
                window.location.hash = url.split(".")[0];
            }
            else { console.log(R.status);}
        }
    }
}

function checkHash() {
    if (window.location.hash.length > 2) {
        let hash =  window.location.hash
        hash = hash.split("#")[1];
        makeRequest(hash + '.html');
    }
    if (window.location.hash.length == 0) {
        makeRequest('glava1.html');
    }
}