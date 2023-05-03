document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
    
    const keyElement = document.getElementById(`key${event.key.toUpperCase()}`);
    if (keyElement && !keyElement.classList.contains('pressed')) {
      keyElement.classList.add('pressed');
    }
  });
  
  document.addEventListener('keyup', (event) => {
    const keyElement = document.getElementById(`key${event.key.toUpperCase()}`);
    if (keyElement) {
      keyElement.classList.remove('pressed');
    }
  });