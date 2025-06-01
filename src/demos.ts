import demos from './data.json';

const list = document.getElementById('demo-list')!;

for (const demo of demos) {
  const card = document.createElement('article');
  card.className = 'demo-card';
  card.innerHTML = `
    <h2>${demo.title}</h2>
    <img src="${demo.image}" alt="${demo.title}" />
    <p>${demo.description}</p>
    <a href="${demo.url}" target="_blank">🔗 View</a>
    <a href="${demo.repo}" target="_blank">📁 Code</a>
  `;
  list.appendChild(card);
}