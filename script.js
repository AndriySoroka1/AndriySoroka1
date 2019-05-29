alert("Javacript підключено!");

var block = document.getElementById('sv');
block.onclick = function(){document.body.style.backgroundColor = '#FFC0CB';footer.style.background = '#FFC0CB'; footer.style.color = 'black';
 h1.style.background = '#FFC0CB'; h1.style.color = 'black';}
var block1 = document.getElementById('tm');
block1.onclick = function(){document.body.style.backgroundColor = '#27408B'; footer.style.background = '#27408B'; footer.style.color = '#fff';
 h1.style.background = '#27408B'; h1.style.color = '#fff'; }
var block2 = document.getElementById('st');
block2.onclick = function(){document.body.style.backgroundColor = '#6CA6CD'; footer.style.background = '#6CA6CD'; footer.style.color = '#fff';
 h1.style.background = '#191970'; h1.style.color = '#fff'; }
var block3 = document.getElementById('mt');
block3.onclick = function(){window.open("kl.html"); window.close("index.html"); }

var footer, h1;
footer = document.querySelector('#footer');
h1 = document.querySelector('#h1');

