
$(document).ready(function(){
/* BAFFLE */
/* Animation speed value can be increased or decreased. Same with duration */
var b = baffle('.baffle', { characters: '█▓▒░', speed: 150 }).reveal(2500); /* Runs animation only once, upon page load */
var bl = baffle('.baffle-longer', { characters: '█▓▒░', speed: 150, duration: 3000 }).reveal(3000); /* Animation duration set to 3 seconds */
var bp = baffle('.baffle-prolonged', { characters:'█▓▒░', speed: 300, duration: 10000 }).reveal(10000); /* Animation duration set to 10 seconds */
var bf = baffle('.baffle-forever', {characters: '█▓▒░', speed: 150}).start(); /* Animation continues on an endless loop */
});