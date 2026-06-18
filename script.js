const links = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

 window.addEventListener('scroll', () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute('id');
        }
      });
 links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    });


const track = document.getElementById('track');
const total = track.children.length;
const indicatorsEl = document.getElementById('indicators');
let current = 0;

// Cria os dots automaticamente
for (let i = 0; i < total; i++) {
  const dot = document.createElement('button');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  indicatorsEl.appendChild(dot);
}

function goTo(index) {
  current = (index + total) % total;
  track.style.transform = `translateX(-${current * 100}%)`;
  document.querySelectorAll('.dot').forEach((d, i) =>
    d.classList.toggle('active', i === current)
  );
}

document.getElementById('prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('next').addEventListener('click', () => goTo(current + 1));