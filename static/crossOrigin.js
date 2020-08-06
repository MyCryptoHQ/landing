const iframeSource =
  'https://gist.github.com/pbojinov/8965299/raw/fadf2c4058b6481646e7244994c1890f2ad81b60/iframe.html';

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

window.onload(function() {
  const data = window.localStorage.getItem('MYC_Storage');
  if (data) {
    sendMessage(data);
  }
});
