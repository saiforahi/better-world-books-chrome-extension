console.log('Hello from the paletic-scripts')
function script(){
    if(document.getElementById('asinInputBox')!==undefined){
        console.log(document.getElementById('asinInputBox'))
        //document.getElementById('asinInputBox').type="hidden"
        // const dummy_input=document.createElement("INPUT")
        // dummy_input.setAttribute('id','dummy_isbn_input')
        // dummy_input.setAttribute('placeholder','Search by ASIN, UPC or Title')
        // dummy_input.className="form-control"
        // dummy_input.addEventListener('change',function($event){
        //     console.log('dummy input box value',$event.target.value)
        //     document.getElementById('asinInputBox').value=$event.target.value
        //     chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
        // })
        // dummy_input.addEventListener('keydown',function($event){
        //     if($event.key=="Enter"){
        //         console.log('dummy input box value',$event.target.value)
        //         document.getElementById('asinInputBox').value=$event.target.value
        //         chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
        //     }
        // })
        //document.getElementById('asinInputBox').parentNode.append(dummy_input)
        // document.querySelector('button.button-search.showAsinInButton.btn.btn-primary').addEventListener('click',function($event){
        //     chrome.runtime.sendMessage({message:'check_isbn',isbn:document.getElementById('asinInputBox').value})
        // })
        document.getElementById('asinInputBox').addEventListener('keydown',function($event){
            if($event.key=="Enter"){
                console.log('main input event target value',$event.target.value)
                chrome.runtime.sendMessage({message:'check_isbn',isbn:$event.target.value})
            }
        })
    }
}
setTimeout(()=>{
    script()
},5000)
