document.addEventListener('DOMContentLoaded', () => {
  const modal   = document.getElementById('confirmModal');
  const yesBtn  = document.getElementById('confirmYes');
  const noBtn   = document.getElementById('confirmNo');
  let targetUrl = null;

  document.querySelectorAll('.btn-order').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      targetUrl = btn.dataset.whatsapp;
      modal.classList.remove('hidden');
    });
  });

  noBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    targetUrl = null;
  });

  yesBtn.addEventListener('click', () => {
    if (targetUrl) {
      window.open(targetUrl, '_blank');
      modal.classList.add('hidden');
      targetUrl = null;
    }
  });
});