import axios from 'axios';
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')

  browser.tabs.executeScript({
    file: 'content-script.js',
  });
  if(request.message=='check_isbn'){
    console.log('given isbn: ',request.isbn)
    console.log('json param',JSON.stringify({isbn: request.isbn, accountName:'Acirassi Books, LTD.',user:'acirassi_books', password:'aC1ra$$i'}))

    var bodyFormData = new FormData();
    bodyFormData.append('AccountName','Acirassi Books, LTD.')
    bodyFormData.append('User','acirassi_books')
    bodyFormData.append('Password','aC1ra$$i')
    bodyFormData.append('Isbn',request.isbn)

    axios({
      method: "post",
      url: "https://ps.betterworldbooks.com/screen/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    }).then(function (response) {
      //handle success
      console.log(response.data);
      if(response.data.isAccepted===true){
        console.log('isbn matched')
        chrome.tabs.executeScript(sender.tab.id,{
          file:'js/play-beep.js'
        })
      }
      else{
        console.log('isbn did not matched')
      }
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
  }
})
