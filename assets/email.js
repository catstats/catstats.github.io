(() => {
  const trigger = document.getElementById('email-trigger');
  const dialog = document.getElementById('email-dialog');
  const closeButton = document.getElementById('email-close');
  const address = document.getElementById('email-address');
  const copyButton = document.getElementById('email-copy');
  const copyLabel = document.getElementById('email-copy-label');
  const status = document.getElementById('email-copy-status');

  trigger.addEventListener('click', () => {
    copyLabel.textContent = 'Copy';
    status.textContent = '';
    dialog.showModal();
    address.focus();
    address.select();
  });

  closeButton.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => trigger.focus());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialog.close();
    }
  });

  copyButton.addEventListener('click', async () => {
    copyButton.disabled = true;
    let copied = false;
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(address.value);
        copied = true;
      }
    } catch (_) {}

    if (!copied) {
      address.focus();
      address.select();
      try { copied = document.execCommand('copy'); } catch (_) {}
    }

    copyButton.disabled = false;
    copyLabel.textContent = copied ? 'Copied' : 'Copy';
    status.textContent = copied
      ? 'Email address copied.'
      : 'Email selected. Use your device’s Copy action to copy it.';
    if (copied) copyButton.focus();
  });
})();
