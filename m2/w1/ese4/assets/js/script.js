var menuButton = document.getElementById('menu');
var tendina = document.getElementById('content');
tendina.style.maxHeight = '0px';

menuButton.addEventListener('click', function () {
    if (tendina.style.maxHeight == '0px') {
        tendina.style.maxHeight = '150px';
    } else {
        tendina.style.maxHeight = '0px'
    }
});

var buttons = document.querySelectorAll('.rules');
var titolo = document.getElementById('titolo');

buttons[0].addEventListener('click', function() {
    titolo.style.fontSize = '80px';
}),
buttons[1].addEventListener('click', function() {
    titolo.style.color = 'purple';
}),
buttons[2].addEventListener('click', function() {
    titolo.style.textTransform = 'uppercase';
}),
buttons[3].addEventListener('click', function() {
    titolo.style.visibility= 'hidden';
}),
buttons[4].addEventListener('click', function() {
    titolo.style.visibility= 'visible';
});
// lista decorata
var lista = document.querySelectorAll('li'); 

for ( var i=0; i<lista.length; i++) {
    lista[i].addEventListener('mouseover', function() {
         this.classList.add("mouseOver");
    }),
    lista[i].addEventListener('mouseout', function() {
        this.classList.remove("mouseOver");
   }),

   lista[i].addEventListener('click', function() {
    this.classList.toggle("click");
});
}



