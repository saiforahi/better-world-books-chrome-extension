console.log('Hello from the content-script')
if(document.getElementById('asinInputBox')!==undefined){
    document.getElementById('asinInputBox').addEventListener('keyup',function($event){
        if ($event.key === "Enter") {
            console.log('event target value',$event.target.value)
            // Cancel the default action, if needed
            $event.preventDefault();
            // Trigger the button element with a click
            chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
        }
    })
}
