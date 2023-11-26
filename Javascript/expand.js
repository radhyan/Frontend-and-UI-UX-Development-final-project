setInterval(function() {
    const active = document.getElementsByClassName('active');
    for (let a of active) {
      let next = a.nextElementSibling;
      if (next === null) {
        next = a.parentElement.firstElementChild;
      }
      a.classList.remove('active');
      next.classList.add('active');
    }
  }, 3000);