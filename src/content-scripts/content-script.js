console.log('Hello from the content-script')
if(document.getElementById('asinInputBox')!==undefined){
    document.getElementById('asinInputBox').addEventListener('change',function($event){
        chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
    })
}
