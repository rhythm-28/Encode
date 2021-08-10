It is an encryption system that encrypts a base26 string (a-z letters) into a base62 string (a-z,A-Z,0-9).

Video Demo : https://drive.google.com/file/d/1MZRy8JieT0-bLwHMKdixEi60kRExjHL6/view

Deployed link : https://rhythm-28.github.io/Proedge-JS-Task/

HOW TO RUN THE CODE?

To check the working of the functions, I have also created an HTML file along with JS file. Just put in any base26 string (lowercase letters) and click on encode. Same, can be done for decoding by putting in a base62 string.



ENCODE Function : It works on ASCII values.

First, it takes ascii value of each character from the original string and manipulates it. To make the encoded string unreadable, I used 4 different ways of manipulating ascii values depending upon the position of the character in the original string. Following are those ways:

1) if character's position gives a remainded of 0 when divided by 4 : replace it with a NUMBER, i.e., (its ascii value + 91) .
2) if character's position gives a remainded of 1 when divided by 4 : replace it with a CHARACTER whose ascii value is (219 - its ascii value).
3) if character's position gives a remainded of 2 when divided by 4 : replace it with a NUMBER, i.e., (its ascii value + 685) .
4) if character's position gives a remainded of 3 when divided by 4 : replace it with a CHARACTER whose ascii value is (its ascii value - 32).

The values that we see above (91,219,685,32) are not just random numbers. I chose such numbers so as to include both lowercase and uppercase letters in the encoded string while keeping the string unique. For example :

1) the value 32 was chosen so as to replace 'a' with 'z', 'b' with 'y', 'c' with 'x' and so on.
2) the value 685 was chosen so as to include 3 digit numbers between 782 and 807.
4) the value 219 was chosen so as to replace 'p' with 'P', 'r' with 'R', 't' with 'T' and so on.
5) the value 91 was chosen to include 3 digit numbers between 188 and 213.

In the end, I reversed the encoded string to make it even more un-crackable.

It's time complexity is O(n) , where n is the length of the original string.




DECODE function : It does the exact opposite of encode function.

First, it reverses the given encoded string. Then depending upon whether we encounter a character or a number, we do the following : 

1) if it is a number, we know that the next 2 characters will also be numbers as we only used 3 digit numbers while encoding. We also know it is equal to ASCII value + some constant. We just check its position (remember we calculated remainder when encoding) and convert it back to its original character using its ascii value and the constant.
2) if it is a character, we checked its position (to decide if its a capital letter or a lowercase letter), then converted it back to its original character using its ascii value and the constant.

It's time complexity is also O(n) , where n is the length of the given encoded string.




