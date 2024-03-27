
  const nombreSpan = document.getElementById('lblCartCount');
  const boutonsAjouter = document.querySelectorAll('.ajouter');

  let nombre = 0;

  boutonsAjouter.forEach(bouton => {
    bouton.addEventListener('click', () => {
      nombre++;
      nombreSpan.textContent = nombre;
    });
  })