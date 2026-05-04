const downloadBtn = document.getElementById('downloadBtn');
const fileNote = document.getElementById('fileNote');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');

function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function isSafeApkName(fileName) {
  return /^[a-zA-Z0-9._-]+\.apk$/.test(fileName);
}

const fileFromQuery = getParam('file');
if (fileFromQuery && isSafeApkName(fileFromQuery)) {
  const filePath = `apk/${encodeURIComponent(fileFromQuery)}`;
  downloadBtn.href = filePath;
  downloadBtn.setAttribute('download', fileFromQuery);
  if (fileNote) {
    fileNote.textContent = `Current file: ${filePath}`;
  }
}

// Lightbox functionality
const previews = document.querySelectorAll('.preview');

previews.forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.classList.remove('hidden');
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
  }
});
