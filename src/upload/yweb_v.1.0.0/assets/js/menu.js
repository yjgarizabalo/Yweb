// menu

const btnLoquehacemos = document.getElementById('btn-loquehacemos'),
      btnCerrarMenu = document.getElementById('btn-menu-cerrar'),
	  grid = document.getElementById('grid'),
	  contenedorEnlacesNav = document.querySelector('#menu .contenedor-enlaces-nav'),
	  contenedorSubCategorias = document.querySelector('#grid .contenedor-subcategorias'),
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

// filtro
document.querySelectorAll('#menu .categorias a').forEach((elemento) =>{
	elemento.addEventListener('mouseenter', (e) => {
		if(!esDispositivoMovil()){
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) =>{
				categoria.classList.remove('activo');
				if(categoria.dataset.categoria == e.target.dataset.categoria) {
					categoria.classList.add('activo');
				}
			})
		}
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

// Activar el boton "de lo que hacemos" con un click

btnLoquehacemos.addEventListener('click', (e) => {
	e.preventDefault()
	grid.classList.add('activo')
	btnCerrarMenu.classList.add('activo')
})


// Boton regresar menu de categorias

document.querySelector('#grid .categorias .btn-regresar').addEventListener('click', (e) => {
	e.preventDefault()
	grid.classList.remove('activo')
	btnCerrarMenu.classList.remove('activo')
})

document.querySelectorAll('#menu .categorias a').forEach((elemento) => {
	elemento.addEventListener('click', (e) => {
		if(esDispositivoMovil()) {
			contenedorSubCategorias.classList.add('activo')
			document.querySelectorAll('#menu .subcategoria').forEach((categoria) => {
				categoria.classList.remove('activo')
				if(categoria.dataset.categoria == e.target.dataset.categoria){
					categoria.classList.add('activo');
				}
			})
		}
	})
})

// Boton de regresar en el menu de categorias
document.querySelectorAll('#grid .contenedor-subcategorias .btn-regresar').forEach((boton) => {
	boton.addEventListener('click', (e) => {
		e.preventDefault();
		contenedorSubCategorias.classList.remove('activo');
	});
});