const axios=require('axios')
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')

  browser.tabs.executeScript({
    file: 'content-script.js',
  });
  if(request.message=='check_isbn'){
    axios.post('https://ps.betterworldbooks.com/screen/',JSON.stringify({isbn: request.isbn, accountName:'acirassi_books',user:'acirassi_books', password:'aC1r@SSi'}),{headers: {"Access-Control-Allow-Origin": "*"}}).then(res=>{
      console.log(res.data)
      if(res.data.isAccepted===true){
        chrome.tabs.executeScript(sender.tab.id,{
          file:'js/play-beep.js'
        })
      }
    }).catch(error=>{
      console.log(error)
    })
  }
})

// function httpGet(isbn_num)
// {
//   let response={}
//   console.log(JSON.stringify({isbn: isbn_num, accountName:'acirassi_books',user:'acirassi_books', password:'aC1r@SSi',country:'US',province:'IN'}))
//   axios.post('https://ps.betterworldbooks.com/screen/',JSON.stringify({isbn: isbn_num, accountName:'acirassi_books',user:'acirassi_books', password:'aC1r@SSi'}),{headers: {"Access-Control-Allow-Origin": "*"}}).then(res=>{
//     console.log(res.data)
//     response=res.data
//   }).catch(error=>{
//     console.log(error)
//   })
//   return response
//     // let xmlHttp = new XMLHttpRequest();
//     // xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
//     // xmlHttp.send(JSON.stringify({isbn: '9780679805274', accountName: 'acirassi_books',user: 'acirassi_books', password: 'aC1r@SSi'}));
//     // console.log(xmlHttp.responseText)
//     // return xmlHttp.responseText;
    
// }
