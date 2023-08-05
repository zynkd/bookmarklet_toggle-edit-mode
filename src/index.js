javascript: (function () {
  document.body.contentEditable =
    document.body.contentEditable === 'true' ? 'false' : 'true';

  // Allowing us to click on the anchor text without being redirected
  let links = document.getElementsByTagName('a');
  for (link of links) {
    if (links.dataset.hrefBackup !== undefined) {
      link.href = link.dataset.hrefBackup;
      delete link.dataset.hrefBackup;
    } else {
      link.dataset.hrefBackup = link.getAttribute('href');
      link.removeAttribute('href');
    }
  }
})();
