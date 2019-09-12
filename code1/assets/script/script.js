var information = "Hello people";

console.log("Hello");

// alert("Greetings" + " "+information);

document.write("<p>" + information + "</p>");

var attributes = ["Blue", "Green", "Yellow"];

console.log(attributes[1]);

var myMSG = document.getElementsByClassName("boxes");

for(var i = 0; i< attributes.length; i++){

    document.write('<p>' + attributes[i] + '</p>');

for(var i = 0; i< myMSG.length; i++){
    myMSG[i].innerHTML = attributes[i];

}
}