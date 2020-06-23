// menu

const btnLoquehacemos = document.getElementById('btn-loquehacemos'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
      esDispositivoMovil = () =>  window.innerWidth <= 800;

btnLoquehacemos.addEventListener('mouseover', () => {
	if(!esDispositivoMovil()){
		grid.classList.add('activo');
	}
});

grid.addEventListener('mouseleave', () => {
	if(!esDispositivoMovil()){
		grid.classList.remove('activo');
	}
});


document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
	elemento.addEventListener('mouseenter', (e) => {
		document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
			categoria.classList.remove('activo');
			if(categoria.dataset.categoria == e.target.dataset.categoria) {
				categoria.classList.add('activo');
			}
		})
	})
})

// Dispositivos moviles

document.querySelector('#btn-menu-barras').addEventListener('click', (e) => {
	e.preventDefault();
	if(contenedorEnlacesNav.classList.contains('activo')){
	   contenedorEnlacesNav.classList.remove('activo');
	   document.querySelector('body').style.overflow = 'visible';
	} else {
		contenedorEnlacesNav.classList.add('activo')
		document.querySelector('body').style.overflow = 'hidden';
	}
});