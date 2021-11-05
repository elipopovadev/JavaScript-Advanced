function encodeAndDecodeMessages() {
    let encodeButton = document.querySelectorAll("button")[0];
    let decodeButton = document.querySelectorAll("button")[1];
    let textAreaForEncodeMessage = document.querySelectorAll("textarea")[0];
    let textAreaForDecodeMessage = document.querySelectorAll("textarea")[1];

    encodeButton.addEventListener("click", function () {
        let message = textAreaForEncodeMessage.value;
        let encodeMessage = encode(message);
        textAreaForEncodeMessage.value = "";
        textAreaForDecodeMessage.value = encodeMessage;
    })

    decodeButton.addEventListener("click", function () {
        let encodeMessage = textAreaForDecodeMessage.value;
        let decodeMessage = decode(encodeMessage);
        textAreaForDecodeMessage.value = decodeMessage;
    })


    function encode(message) {
        let encodedMessage = '';
        for (let i = 0; i < message.length; i++) {
            encodedMessage += String.fromCharCode(ascii(`${message[i]}`) + 1);
        }
        return encodedMessage;
    }

    function decode(encodeMessage) {
        let decodeMessage = '';
        for (let i = 0; i < encodeMessage.length; i++) {
            decodeMessage += String.fromCharCode(ascii(`${encodeMessage[i]}`) - 1);
        }
        return decodeMessage;
    }

    function ascii(a) {
        return a.charCodeAt(0);
    }
}