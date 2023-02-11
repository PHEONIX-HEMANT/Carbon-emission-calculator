let transfer_size = 0;

chrome.devtools.network.onRequestFinished.addListener(
    function(request) {
        transfer_size += request.respone.bodySize;
    }
  );

let data = document.getElementById("emission");
data.textContent = transfer_size;
