var beepsound = new Audio('https://www.soundjay.com/button/sounds/beep-01a.mp3');
beepsound.play()
var keyboardEvent = new KeyboardEvent('keydown', {
    code: 'Enter',
    key: 'Enter',
    charKode: 13,
    keyCode: 13,
    view: window
});
document.getElementById('asinInputBox').dispatchEvent(keyboardEvent)
document.getElementById('dummy_isbn_input').setAttribute('value','')