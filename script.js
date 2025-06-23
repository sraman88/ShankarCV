expertiseBoxes.forEach(box => {
  box.addEventListener('click', () => {
    const target = box.getAttribute('data-target');
    const detail = document.querySelector(`.expertise-detail[data-target="${target}"]`);
    const isActive = detail.style.display === 'block';
    detail.style.display = isActive ? 'none' : 'block';
    box.classList.toggle('active');
  });
});
