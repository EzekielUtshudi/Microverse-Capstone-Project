import instructorData from './index.js';

// instructors
const grid = document.querySelector('.grid');

function createGridItem({
  imgUrl, title, role, info,
}) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid_item');

  gridItem.innerHTML = `
  <div class="in_img">
    <img src="img/${imgUrl}" alt="${title}" />
  </div>
  <div>
    <h3>${title}</h3>
    <p class="italic text_primary styled_text">
    ${role}
    </p>
    <p>
    ${info}
    </p>
  </div>
  `;

  grid.appendChild(gridItem);
}

if (grid) {
  instructorData.forEach((instr) => {
    createGridItem(instr);
  });
}

// hamburger
const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.navbar');

btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('open');
});
