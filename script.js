
function adjustSize(){
    if(document.getElementById('result').value.length > 16){
        document.getElementById('result').style.fontSize = '2rem';
    }if(document.getElementById('result').value.length > 22){
        document.getElementById('result').style.fontSize = '1.5rem';
    }if(document.getElementById('result').value.length > 32){
        document.getElementById('result').style.fontSize = '1rem';
    }if(document.getElementById('result').value.length < 16){
        document.getElementById('result').style.fontSize = '2.5rem';
    }
}

function insertToCal(val){
    document.getElementById('result').value += val;
    adjustSize();
}

function ClearAll(){
    document.getElementById('result').value = '';
    adjustSize();
}

function Calculate(){
    adjustSize();
    try{
        document.getElementById('result').value = eval(document.getElementById('result').value);
    }catch(err){
        document.getElementById('result').value = 'Error';
    }
}

