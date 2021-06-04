function clicked(){
    var btn = document.getElementById('button');

    btn.style.backgroundPosition = "left center";

    setTimeout(()=>{
        btn.style.backgroundPosition = "left bottom";

        change();
    },1000);
    
}

function change(){
    var main = document.getElementById('main');
    main.style.backgroundImage = 'url(./images/background-blur.jpeg)';
    
    var progress = document.getElementById('progress');
    progress.style.display = 'flex';
    
    var curr = 0;
    var bar = document.getElementById('line');
    var itv = setInterval(move, 10);

    function move(){
        if (curr >= 350){
            clearInterval(itv);
            curr = 0;
        } else{
            curr += 1;
            bar.style.width = curr + "px";
        }
    }

    setTimeout(()=>{
        result()
    },3600);
}

function result(){
    var progress = document.getElementById('progress');
    progress.style.display = 'none';

    var result_box = document.getElementById('result');
    result_box.style.display = 'flex';
    result_box.style.opacity = '0%';

    var btn = document.getElementById('button');
    btn.style.opacity = '0%';

    var itv = setInterval(opa, 10);
    var curr = 0;
    
    function opa(){
        if (curr >=100){
            clearInterval(itv);
            curr = 0;
        } else{
            curr += 2;
            result_box.style.opacity = curr + '%';
        }
    }
}

function retry(){
    var result_box = document.getElementById('result');
    result_box.style.display = 'none';

    var btn = document.getElementById('button');
    btn.style.opacity = '100%';
    btn.style.backgroundPosition = "left top";
}