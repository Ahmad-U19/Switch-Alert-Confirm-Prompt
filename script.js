var y=2;

switch(y){
    case 1:
        document.write("Today Is Monday");
        break;
    case 2:
        document.write("Today Is Tuesday");
        break;
    case 3:
        document.write("Today Is Wednesday");
        break;
    case 4:
        document.write("Today Is Thursday");
        break;
    case 5:
        document.write("Today Is Friday");
        break;
    case 6:
        document.write("Today Is Saturday");
        break;
    case 7:
        document.write("Today Is Sunday");
        break;

    default:
        document.write("Enter a Valid Week Days");
}

// alert("Hello Everybody");

var c = confirm("Do U Like this Website");

if(c){
    alert("Thank You")
}else{
    alert("Sorry For InConvenience")
}

var l=prompt("Enter your Name :");
document.write("<br>");
document.write("Hello "+l);