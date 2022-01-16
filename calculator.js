function put(val){
   document.getElementById('screen').innerHTML = document.getElementById('screen').innerHTML + val
}

function AC(){
    document.getElementById('screen').innerHTML = "";
    document.getElementById('past').innerHTML = "";
}

function result(){
    var ans = document.getElementById('screen');
    var past = document.getElementById('past');
    past.innerHTML = ans.innerHTML;
    ans.innerHTML = '= ' + eval(ans.innerHTML);
}