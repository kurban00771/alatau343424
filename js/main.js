const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  menuList.classList.toggle('active');
});

document.querySelectorAll('.menu__list-link').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    menuList.classList.remove('active');
  });
});

const waButton = document.querySelector('.wa-link');
if (waButton) {
  const part1 = waButton.getAttribute('data-phone');
  const part2 = waButton.getAttribute('data-user');
  waButton.href = `https://wa.me/${part1}${part2}`;
}

document.querySelectorAll('.phone-link').forEach(link => {
  const p1 = link.getAttribute('data-p1');
  const p2 = link.getAttribute('data-p2');
  const p3 = link.getAttribute('data-p3');

  link.href = `tel:+${p1}${p2}${p3}`;
});

const swiper = new Swiper('.projects__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: '.projects__arrow-next',
    prevEl: '.projects__arrow-prev',
  },
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') {
      return;
    }

    const target = document.querySelector(id);
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

const requestForm = document.querySelector('.request__form');
if (requestForm) {
  requestForm.addEventListener('submit', (event) => {
    event.preventDefault();
  });
}

