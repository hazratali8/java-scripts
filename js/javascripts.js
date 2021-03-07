function name(a) {
    var first = a*100;
    var second = 200+ (a*80);
    var last = 800+ (a*50);

    
    if (a<=10){
        document.write(first);
    }

    else if (a<=20){
        document.write(second);
    }
    else if(a>20){
        document.write(last)
    }


}

var result=name(13);







