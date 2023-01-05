
  const refs = {
    changeLight: document.querySelector('.header-switcher'),
    switch: document.querySelector('.header-switcher__switch'),
  };

  refs.switch.addEventListener('change', toggleModal);
  

  function toggleModal() {
      refs.changeLight.classList.toggle('light');
      console.log(refs.changeLight)
  }
