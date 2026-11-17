let encryptedString = '\x03{\x7fx\x0f\x06u\x15>\x0f\x1biN\x0c\x0fx9=\x0a\x11~M=X\x10d\x10P\x08*:;\x01\x10/\x16i\x07\x102\x1f';

const numericStrings = Array.from(encryptedString, char => 
  char.charCodeAt(0).toString()
);


for (let i = 0; i < numericStrings.length - 1; i += 2) {
    [numericStrings[i], numericStrings[i + 1]] =
    [numericStrings[i + 1], numericStrings[i]];
}


let finalValue = [];
for (i=0; i < numericStrings.length; i++) {
	let value = Number(numericStrings[i]);
	value ^= 20;	

    if (i > 0) {
        value ^= numericStrings[i - 1];
    }

    if (i > 2) {
        value ^= numericStrings[i - 3];
    }


	value ^= i % 10

	if (i % 2 == 0) {
		value ^= 9;
	} else {
		value ^= 8;
	}


	if (i % 3 == 0) {
		value ^= 7;
	} else if (i % 3 == 1) {
		value ^= 6;
	} else {
		value ^= 5;
	}
	

	finalValue.push(value);
	//break;

}


console.log(String.fromCharCode(...finalValue));

