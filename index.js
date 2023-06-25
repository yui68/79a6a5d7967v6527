function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('element-show');
      }
    });
  }
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.introduction');
  let elements2 = document.querySelectorAll('.functions');
  let elements3 = document.querySelectorAll('.download');
  for (let elm of elements) {
    observer.observe(elm);
  }
  for (let elm of elements2) {
    observer.observe(elm);
  }
  for (let elm of elements3) {
    observer.observe(elm);
  }