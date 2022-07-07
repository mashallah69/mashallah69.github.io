const adj = ["monkey", "chinky", "coon ass", "sand", "curry munching", "chinaman", "gooky", "filthy jewish", "nasty", "gay ass", "ass riding", "fucking", "filthy mexican", "spook", "wetback", "yellow"];
const bad = ["faggot", "nigga", "nigga balls", "coon bitch", "beaner", "nigger", "dune coon", "gypsy", "pig", "dyke", "jap", "paki", "kike", "niglet", "negro", "baljeet", "raghead", "spic", "tacohead", "twink"];

function genWord(){
    var newWord = getRnd(adj) + " " + getRnd(bad);
	document.body.innerHTML += "<h1>" + newWord + "</h1>";
	var msg = new SpeechSynthesisUtterance(newWord);
	window.speechSynthesis.speak(msg);
}

function getRnd(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}