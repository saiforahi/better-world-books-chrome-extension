import axios from 'axios';
browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('Hello from the background')

  browser.tabs.executeScript({
    file: 'content-script.js',
  });
  if(request.message=='check_isbn'){
    console.log('given isbn: ',request.isbn)
    console.log('json param',JSON.stringify({isbn: request.isbn, accountName:'acirassi_books',user:'acirassi_books', password:'aC1ra$$i'}))
    // let xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState === 4 && xhr.status===200){
    //       console.log(xhr.responseText)
    //       chrome.tabs.executeScript(sender.tab.id,{
    //         file:'js/play-beep.js'
    //       })
    //     }
    // };
    // xhr.open('POST', 'https://ps.betterworldbooks.com/screen/',false);
    // xhr.send(JSON.stringify({isbn: request.isbn, accountName:"acirassi_books",user:"acirassi_books", password:"aC1ra$$i"}));
    // axios.post('https://ps.betterworldbooks.com/screen/',JSON.stringify({isbn: request.isbn, accountName:"Accirassi Books, LTD.",user:"acirassi_books", password:"aC1ra$$i"}),{headers: {"Access-Control-Allow-Origin": "*"}}).then(res=>{
    //   console.log('api response: ',res.data)
    //   if(res.data.isAccepted===true){
    //     chrome.tabs.executeScript(sender.tab.id,{
    //       file:'js/play-beep.js'
    //     })
    //   }
    // }).catch(error=>{
    //   console.log(error)
    // })

    var bodyFormData = new FormData();
    bodyFormData.append('accountName','acirassi_books')
    bodyFormData.append('user','acirassi_books')
    bodyFormData.append('password','aC1ra$$i')
    bodyFormData.append('isbn',request.isbn)

    axios({
      method: "post",
      url: "https://ps.betterworldbooks.com/screen/",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response.data.isAccepted===true);
        if(response.data.isAccepted===true){
          chrome.tabs.executeScript(sender.tab.id,{
            file:'js/play-beep.js'
          })
        }
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
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
