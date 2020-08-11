const iframeSource = 'https://mycryptobuilds.com/pr/3415/';

// Create the iframe
const iframe = document.createElement('iframe');
iframe.setAttribute('src', iframeSource);
iframe.setAttribute('id', 'the_iframe');
iframe.style.width = 450 + 'px';
iframe.style.height = 200 + 'px';
document.body.appendChild(iframe);

// Send a message to the child iframe
const iframeEl = document.getElementById('the_iframe');

// Send a message to the child iframe
const sendMessage = function(msg) {
  // Make sure you are sending a string, and to stringify JSON
  iframeEl.contentWindow.postMessage(msg, '*');
};

iframe.addEventListener('load', function() {
  const data = window.localStorage.getItem('MYC_Storage');
  if (data) {
    sendMessage({ type: 'migration', data });
  }
});
