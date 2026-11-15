//Brute force single byte XOR decryption

let encryptedString = "ikilmeqs:9?n8jijlim<=?98981jj:m>ik9j9;<iu";

let value;
let temp;
for (i=0; i < 256; i++) {
	for (j=0; j < encryptedString.length; j++) {
		temp = i ^ encryptedString.charCodeAt([j]);
		value += String.fromCharCode(temp);

	}

	if (value.includes("academy")) {
		console.log(value);
		break;
	}

	value = '';

}