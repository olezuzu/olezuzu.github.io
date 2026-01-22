var all_elements_names = ["wasserstoff","helium","lithium","beryllium","bor","kohlenstoff","stickstoff","sauerstoff","fluor","neon","natrium","magnesium","aluminium","silicium","phosphor","schwefel","chlor","argon","kalium","calcium","scandium","titan","vanadium","chrom","mangan","eisen","cobalt","nickel","kupfer","zink","gallium","germanium","arsen","selen","brom","krypton","rubidium","strontium","yttrium","zirkonium","niob","molybdän","technetium","ruthenium","rhodium","palladium","silber","cadmium","indium","zinn","antimon","tellur","iod","xenon","caesium","barium","lanthan","cer","praseodym","neodym","promethium","samarium","europium","gadolinium","terbium","dysprosium","holmium","erbium","thulium","ytterbium","lutetium","hafnium","tantal","wolfram","rhenium","osmium","iridium","platin","gold","quecksilber","thallium","blei","bismut","polonium","astat","radon","francium","radium","actinium","thorium","protactinium","uran","neptunium","plutonium","americium","curium","berkelium","californium","einsteinium","fermium","mendelevium","nobelium","lawrencium","rutherfordium","dubnium","seaborgium","bohrium","hassium","meitnerium","darmstadtium","roentgenium","copernicium","nihonium","flerovium","moscovium","livermorium","tenness","oganesson"]  
var guessed_elements_names = [];
var all_elements_symbols = ["h","he","li","be","b","c","n","o","f","ne","na","mg","al","si","p","s","cl","ar","k","ca","sc","ti","v","cr","mn","fe","co","ni","cu","zn","ga","ge","as","se","br","kr","rb","sr","y","zr","nb","mo","tc","ru","rh","pd","ag","cd","in","sn","sb","te","i","xe","cs","ba","la","ce","pr","nd","pm","sm","eu","gd","tb","dy","ho","er","tm","yt","lu","hf","ta","w","re","os","ir","pt","au","hg","tl","pb","bi","po","at","rn","fr","ra","ac","th","pa","u","np","pu","am","cm","bk","cf","es","fm","md","no","lr","rf","db","sg","bh","hs","mt","ds","rg","cn","nh","fl","mc","lv","ts","og"];
var guessed_elements_symbols = [];
var seconds = 0;
var timer_toggle = 0;
var selecter = 0;
var interval = 0;
var score_toggle = 0;
var main_interval = 0;

function hideall(){
    document.getElementById("input").value = '';
    var elements_p = document.getElementsByTagName('p');
    var elements_h = document.getElementsByTagName('h2');
    score = 0;
    guessed_elements_names = [];
    guessed_elements_symbols = [];
    if (score_toggle === 0){
        document.getElementById("score").innerHTML = score + "/118";
    }
    else if (score_toggle === 1){
        document.getElementById("score").innerHTML = Math.round(score/118 * 100) + "%";
    }
    
    for (var i=0; i<elements_p.length; i++) {
        elements_p[i].style.display = 'none';
    }
    for (var i=0; i<elements_h.length; i++) {
        elements_h[i].style.display = 'none';
    }
}

function showall(){
    document.getElementById("input").value = '';
    var elements_p = document.getElementsByTagName('p');
    var elements_h = document.getElementsByTagName('h2');
    guessed_elements_names = all_elements_names;
    guessed_elements_symbols = all_elements_symbols;
    for (var i=0; i<elements_p.length; i++) {
        elements_p[i].style.display = 'block';
    }
    for (var i=0; i<elements_h.length; i++) {
        elements_h[i].style.display = 'block';
    }
}




function main() {
    if (selecter === 0){
        var input = document.getElementById("input").value.toLowerCase();
        if (all_elements_names.includes(input) && guessed_elements_names.includes(input) === false){
            document.getElementById("input").value = '';
            guessed_elements_names.push(input);
            score ++;
            if (score_toggle === 0){
                document.getElementById("score").innerHTML = score + "/118";
            }
            else if (score_toggle === 1){
                document.getElementById("score").innerHTML = Math.round(score/118 * 100) + "%";
            }
            n = document.getElementsByClassName(input);
            for (var i=0; i<n.length; i++) {
                n[i].style.display = 'block';
            }
        }
        else if (guessed_elements_names.length === 118){
            reset();
        }
    }
    else if (selecter === 1){
        var input = document.getElementById("input").value.toLowerCase();
        if (all_elements_symbols.includes(input) && guessed_elements_symbols.includes(input) === false){
            document.getElementById("input").value = '';
            guessed_elements_symbols.push(input);
            score ++;
            if (score_toggle === 0){
                document.getElementById("score").innerHTML = score + "/118";
            }
            else if (score_toggle === 1){
                document.getElementById("score").innerHTML = Math.round(score/118 * 100) + "%";
            }
            n = document.getElementsByClassName(input);
            for (var i=0; i<n.length; i++) {
                n[i].style.display = 'block';
            }
        }
        else if (guessed_elements_symbols.length === 118){
            reset();
        }
    }
    if (E === 1){
        window.open("../easteregg/", "_blank");
        E = 0;
    }
}


function timer(){
    seconds ++;
    minutes = Math.floor(seconds/60);
    if (seconds < 10){
        document.getElementById("timer").innerHTML = "00:0" + seconds;
    }
    else if (seconds >= 10 && seconds < 60){
        document.getElementById("timer").innerHTML = "00:" + seconds;
    }
    else if (seconds % 60 < 10 && minutes < 10){
        document.getElementById("timer").innerHTML = "0" + minutes + ":0" + seconds % 60;
    }
    else if (seconds % 60 >= 10 && minutes < 10){
        document.getElementById("timer").innerHTML = "0" + minutes + ":" + seconds % 60;
    }
    else if (seconds % 60 < 10 && minutes >= 10){
        document.getElementById("timer").innerHTML = minutes + ":0" + seconds % 60;
    }
    else if (seconds % 60 >= 10 && minutes >= 10){
        document.getElementById("timer").innerHTML = minutes + ":" + seconds % 60;
    }    
}


function start(){
    if (timer_toggle === 0){
        document.getElementById("timer").innerHTML = "00:00";
        interval = setInterval(timer, 1000);
        document.getElementById("timer").style.color = "black"; 
        timer_toggle = 1;
        score = 0;
        hideall();
    }
    else{
        reset();
        start();
    }
}

function reset(){
    clearInterval(interval);
    seconds = 0;
    timer_toggle = 0;
    document.getElementById("timer").style.color = "red";
}


function solve(){
    score = 118;
    if (score_toggle === 0){
        document.getElementById("score").innerHTML = score + "/118";
    }
    else if (score_toggle === 1){
        document.getElementById("score").innerHTML = Math.round(score/118 * 100) + "%";
    }
    showall()
}


function select_mode(){
    guessed_elements_names = all_elements_names;
    guessed_elements_symbols = all_elements_symbols;
    reset();
    seconds = 0;
    document.getElementById("input").value = '';
    if (selecter === 0){
        document.getElementById("select").innerHTML = "Symbol";
        selecter = 1;
    }
    else if (selecter === 1){
        document.getElementById("select").innerHTML = "Name";
        selecter = 0;
    }
}


function setup(){
    var elements_p = document.getElementsByTagName('p');
    var elements_h = document.getElementsByTagName('h2');
    main_interval = setInterval(main, 1)
    score = 0;
    guessed_elements_names = all_elements_names;
    guessed_elements_symbols = all_elements_symbols;
    if (score_toggle === 0){
        document.getElementById("score").innerHTML = score + "/118";
    }
    else if (score_toggle === 1){
        document.getElementById("score").innerHTML = Math.round(score/118 * 100) + "%";
    }
    for (var i=0; i<elements_p.length; i++) {
        elements_p[i].style.display = 'none';
    }
    for (var i=0; i<elements_h.length; i++) {
        elements_h[i].style.display = 'none';
    }
}

function select_score(){
    if (score_toggle === 0){
        score_toggle = 1;
        document.getElementById("score").innerHTML = Math.round(score/118 * 100) + "%";
    }
    else if (score_toggle === 1){
        score_toggle = 0;
        document.getElementById("score").innerHTML = score + "/118";
    }
}





/* Easter-Egg */

var O = 0;
var L = 0;
var E = 0;


function select_O(){
    O = 1;
    L = 0;
    E = 0;
}

function select_L(){
    if (O === 1){
        L = 1;
        E = 0;
    }
    else{
        O = 0;
        L = 0;
        E = 0;
    }
}

function select_E(){
    if (O === 1 && L === 1){
        E = 1;
    }
    else{
        O = 0;
        L = 0;
        E = 0;
    }
}