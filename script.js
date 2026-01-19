// Warehouse JSON'u GitHub raw linkten çek
fetch('https://raw.githubusercontent.com/Dta1671/geofs-addons-warehouse/main/warehouse.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('addons-list');
    data.entries.forEach(addon => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${addon.id}</strong> by ${addon.author} — Version ${addon.addonVersion} | <a href="${addon.path}" target="_blank">Download</a>`;
      list.appendChild(li);
    });
  });
