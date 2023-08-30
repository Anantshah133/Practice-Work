function shell1(c1) {
    size = c1.length;
    gap = parseInt(size / 2);

    do {
        do {
            var flag = 0;
            for (i = 0; i < size - gap; i++) {
                n1 = parseInt(c1[i].value);
                n2 = parseInt(c1[gap + i].value);

                if (n1 > n2) {
                    flag = 1;
                    temp = c1[i].value     ;
                    c1[i].value = c1[gap + i].value;
                    c1[gap + i].value = temp;
                }
            }
        } while (flag != 0);
        gap = parseInt(gap / 2);
    } while (gap != 0);
}

var position;

function serch(s1, c1) {
    size = c1.length;
    var src = parseInt(s1.value);
    var l = 0;
    var r = size-1;
    
    while (l <= r) {
        var m = parseInt((l + r) / 2);
        if (src === parseInt(c1[m].value)) {
            $(c1[m]).addClass('light');
            position = c1[m];
            return;
        } else if (src > parseInt(c1[m].value)) {
            l = parseInt(m + 1);
        } else {
            r = parseInt(m - 1);
        }
    }

    alert("Element Not Found !!!");
}

function clean(a1){
    size = a1.length;
    for(i=0; i<size; i++){
        a1[i].value = "";
    }
    $(position).removeClass('light');
}
function fill(a1){
    size = a1.length;
    for(i=0; i<size; i++){
        a1[i].value = parseInt(100 * Math.random());
    }
}

function loop(){
    for(id=0; id<10; id++){
        
    }
}