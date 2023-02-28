
    
    var x = 54;
    if (x < 0) { document.write("please enter correct value , your mark is negative") }
    else if (x >= 0 && x <= 49) {
        document.write("Fail");
    } else if (x >= 50 && x <= 59) {
        document.write("your mark is D");
    } else if (x >= 60 && x <= 69) {
        document.write("your mark is C");
    }
    else if (x >= 70 && x <= 79) {
        document.write("your mark is B");
    } else if (x >= 80 && x <= 89) { document.write("your mark is A"); }
    else if (x >= 90 && x <= 100) { document.write("your mark is A+") }
    else { document.write("please enter correct mark , because you enter mark up 100"); }
