// menu

const btnLoquehacemos = document.getElementById('btn-loquehacemos'),
      grid = document.getElementById('grid');
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

