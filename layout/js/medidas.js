var spanLargura = document.getElementById('largura');
var spanAltura = document.getElementById('altura');

window.onresize = function(){
    altura = window.innerHeight;
     largura = window.innerHeight;
     spanLargura.innerHTML = largura + 'px';
     spanAltura.innerHTML = altura + 'px';
};