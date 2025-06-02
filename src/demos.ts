import demos from './data.json';

const list = document.getElementById('demo-list')!;

for (const demo of demos) {
  const card = document.createElement('article');
  card.className = 'demo-card';

  // Optional iframe (only if URL is present)
  const iframeHTML = demo.url
    ? `<div class="iframe-preview"><iframe src="${demo.url}" loading="lazy"></iframe></div>`
    : `<img src="${demo.image}" alt="${demo.title}" />`;

  card.innerHTML = `
    <h2>${demo.title}</h2>
    ${iframeHTML}
    <p>${demo.description}</p>
    <div class="links">
      <a href="${demo.url}" target="_blank">🔗 View</a>
      <a href="${demo.repo}" target="_blank">📁 Code</a>
    </div>
  `;

  list.appendChild(card);
}