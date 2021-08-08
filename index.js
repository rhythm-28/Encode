// takes a base26 string and returns a base62 string
function encode(original){
    
    var encoded = "";
    for(var index=0; index<original.length; index++){
        const remainder = index % 4;

        // getting ASCII value from character
        asciiValue = original[index].charCodeAt(0);

        var encrypted = "";
        if(remainder==0){
            var number0 = asciiValue+91;
            encrypted = number0.toString();
        }
        else if(remainder==1){
            var number1 = 219-asciiValue;
            var number1String = number1.toString();

            // converting ASCII value to character
            encrypted = String.fromCharCode(number1String);
        }
        else if(remainder==2){
            var number2 = asciiValue+685;
            encrypted = number2.toString();
        }
        else{
            var number3 = asciiValue-32;
            var number3String = number3.toString();

            // converting ASCII value to character
            encrypted = String.fromCharCode(number3String);
        }
        encoded = encoded.concat(encrypted);
    }

    // reversing the string
    encoded = [...encoded].reverse().join("");

    return encoded;
}

// takes a base62 string and returns a base26 string
function decode(encoded){
    // reversing the string
    encoded = [...encoded].reverse().join("");
    var decoded = "";
    var index = 0;

    // takingg count of characters and numbers appeared so far
    var numCnt = 0;
    var charCnt = 0;

    while(index<encoded.length){
        var ch = encoded[index];
        var decryptedAscii = 0;
        var encryptedAscii = 0;
        if(ch >= '0' && ch <= '9'){
            encryptedAscii = encoded[index]*100 + encoded[index+1]*10 + encoded[index+2]*1;
            if(numCnt%2==0){
                decryptedAscii = encryptedAscii - 91;
            }
            else{
                decryptedAscii = encryptedAscii - 685;
            }
            var decryptedAsciiString = decryptedAscii.toString();
            
            // converting ASCII value to character
            var a = String.fromCharCode(decryptedAsciiString);

            decoded = decoded.concat(a);

            numCnt = numCnt + 1;
            index = index + 3;
        }
        else{
            // getting ASCII value from character
            encryptedAscii = ch.charCodeAt(0);
            
            if(charCnt%2==0){
                decryptedAscii = 219 - encryptedAscii;
            }
            else{
                decryptedAscii = encryptedAscii + 32;
            }
            var decryptedAsciiString = decryptedAscii.toString();

            // converting ASCII value to character
            var b = String.fromCharCode(decryptedAsciiString);
            
            decoded = decoded.concat(b);
            charCnt = charCnt + 1;
            index = index + 1;
        }
    }
    return decoded;
}

function shorten(){
    const x = document.getElementById("original");
    const y = document.getElementById("encoded");

    const encodedValue = encode(x.value);

    y.innerHTML = "Encoded value : " + encodedValue;
    return false;
}

function expand(){
    const x = document.getElementById("base62");
    const y = document.getElementById("decoded");

    const decodedValue = decode(x.value);

    y.innerHTML = "Decoded value : " + decodedValue;
    return false;
}

