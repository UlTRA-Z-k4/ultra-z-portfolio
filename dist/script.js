const copyButton = document.querySelector('#copy-discord');
const copyStatus = document.querySelector('#copy-status');
document.querySelector('#year').textContent = new Date().getFullYear();
copyButton.addEventListener('click', async () => {
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText('ultra_z.');
    copyStatus.textContent = 'Pseudo copié : ultra_z.';
    copyButton.textContent = 'Copié !';
    window.setTimeout(() => { copyButton.textContent = 'Copier mon pseudo'; }, 2200);
  } catch {
    copyStatus.textContent = 'Copiez manuellement ce pseudo : ultra_z.';
  }
});
