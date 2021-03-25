console.log('Hello from the content-script')
var port = chrome.runtime.connect({name: "palletic"});

port.onMessage.addListener(function(msg) {
  if (msg.question == "Who's there?")
    port.postMessage({answer: "Madame"});
  else if (msg.question == "Madame who?")
    port.postMessage({answer: "Madame... Bovary"});
});
// function script(){
//     document.getElementById('asinInputBox').type="hidden"
//     const dummy_input=document.createElement("INPUT")
//     dummy_input.setAttribute('id','dummy_isbn_input')
//     dummy_input.addEventListener('change',function($event){
//         console.log('dummy input box value',$event.target.value)
//         chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
//     })
//     document.getElementById('asinInputBox').parentNode.append(dummy_input)
// }
function script(){
    if(document.getElementById('asinInputBox')!==undefined){
        document.getElementById('asinInputBox').type="hidden"
        const dummy_input=document.createElement("INPUT")
        dummy_input.setAttribute('id','dummy_isbn_input')
        dummy_input.addEventListener('change',function($event){
            console.log('dummy input box value',$event.target.value)
            chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
        })
        document.getElementById('asinInputBox').parentNode.append(dummy_input)
        document.getElementById('asinInputBox').addEventListener('change',function($event){
            // if ($event.key === "Enter") {
            //     console.log('event target value',$event.target.value)
            //     // Cancel the default action, if needed
            //     $event.preventDefault();
            //     // Trigger the button element with a click
            //     chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
            // }
            console.log('event target value',$event.target.value)
            $event.preventDefault();
            document.getElementById('dummy_isbn_input').value=$event.target.value
            document.getElementById('dummy_isbn_input').dispatchEvent(new Event('change'))
            // Trigger the button element with a click
            //chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
        })
        document.getElementById('asinInputBox').addEventListener('keyup',function($event){
            if ($event.key === "Enter") {
                console.log('event target value',$event.target.value)
                // Cancel the default action, if needed
                $event.preventDefault();
                // Trigger the button element with a click
                //chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
            }
            
        })
        document.getElementById('asinInputBox').addEventListener('keydown',function($event){
            if ($event.key === "Enter") {
                console.log('event target value',$event.target.value)
                // Cancel the default action, if needed
                $event.preventDefault();
                // Trigger the button element with a click
                //chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
            }
            
        })
    }
}
document.addEventListener('DOMContentLoaded', function () {
    console.log('document listener')
    script()
});

window.onload=script()