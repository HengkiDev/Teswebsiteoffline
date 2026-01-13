// Simpan catatan
const note = document.getElementById('note');
const saveBtn = document.getElementById('save');
const status = document.getElementById('status');

note.value = localStorage.getItem('myNote') || '';

saveBtn.addEventListener('click', () => {
  localStorage.setItem('myNote', note.value);
  status.textContent = 'Tersimpan ✓ ' + new Date().toLocaleTimeString('id-ID');
  setTimeout(() => status.textContent = '', 2000);
});

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker terdaftar', reg))
      .catch(err => console.log('Service Worker gagal', err));
  });
}
