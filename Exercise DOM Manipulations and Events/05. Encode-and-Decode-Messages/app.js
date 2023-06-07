function encodeAndDecodeMessages() {
    function encodeAndSend() {
        var message = document.getElementById("senderTextarea").value;
        var encodedMessage = encodeMessage(message);
      
        document.getElementById("senderTextarea").value = "";
        document.getElementById("receiverTextarea").value = encodedMessage;
      }
      
      function decodeAndRead() {
        var encodedMessage = document.getElementById("receiverTextarea").value;
        var decodedMessage = decodeMessage(encodedMessage);
      
        document.getElementById("receiverTextarea").value = decodedMessage;
      }
      
      function encodeMessage(message) {
        var encodedMessage = "";
      
        for (var i = 0; i < message.length; i++) {
          var currentChar = message.charAt(i);
          var currentCharCode = message.charCodeAt(i);
      
          // Increment the ASCII code of the character by 1
          var encodedCharCode = currentCharCode + 1;
      
          // Append the encoded character to the encoded message
          encodedMessage += String.fromCharCode(encodedCharCode);
        }
      
        return encodedMessage;
      }
      
      function decodeMessage(encodedMessage) {
        var decodedMessage = "";
      
        for (var i = 0; i < encodedMessage.length; i++) {
          var currentChar = encodedMessage.charAt(i);
          var currentCharCode = encodedMessage.charCodeAt(i);
      
          // Decrement the ASCII code of the character by 1
          var decodedCharCode = currentCharCode - 1;
      
          // Append the decoded character to the decoded message
          decodedMessage += String.fromCharCode(decodedCharCode);
        }
      
        return decodedMessage;
      }
      
}