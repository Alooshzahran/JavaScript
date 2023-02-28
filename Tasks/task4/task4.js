
var demo = 0;
let y = 1;

for (i = 1; i <= 10; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(y + " ");
        y += 1;
    }
    document.write("<br>")
}
