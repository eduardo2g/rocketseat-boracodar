const imageProduct = document.querySelector('img');
const button = document.querySelector('button');
button.addEventListener('click', ({ target }) => {
  const isChanged = imageProduct.hasAttribute('change');

  const icons = Array.from(target.children);

  icons.forEach(icon => {
    if (icon.classList.contains('hidden')) {
      icon.classList.remove('hidden');
    } else {
      icon.classList.add('hidden');
    }
  });

  if (!isChanged) {
    imageProduct.classList.remove('fadeIn');
    imageProduct.setAttribute('change', '');
    imageProduct.setAttribute('src', 'images/product.gif');

    return;
  }

  imageProduct.classList.add('fadeOut');

  setTimeout(() => {
    imageProduct.setAttribute('src', 'images/product.png');
    imageProduct.classList.remove('fadeOut');
    imageProduct.classList.add('fadeIn');
  }, 300);

  imageProduct.removeAttribute('change');
});
