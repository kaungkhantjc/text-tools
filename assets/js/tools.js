class Binary {

    static encode = (text) => text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');

    static decode = (binary) => String.fromCharCode(...binary.split(' ').map(byte => parseInt(byte, 2)));

}

class Xor {

    static evaluate = (text, key) => {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
        }
        return result;
    };

}

class Hex {

    static encode = (text) => {
        let hex, i;

        let result = "";
        for (i = 0; i < text.length; i++) {
            hex = text.charCodeAt(i).toString(16);
            result += ("000" + hex).slice(-4);
        }
        return result
    }

    static decode = (text) => {
        let j;
        let hexes = text.match(/.{1,4}/g) || [];
        let back = "";
        for (j = 0; j < hexes.length; j++) {
            back += String.fromCharCode(parseInt(hexes[j], 16));
        }

        return back;
    }

}

class UnicodeStr {

    static escape = (text) => text.replace(/[^\0-~]/g, (char) => `\\u${char.charCodeAt(0).toString(16).padStart(4, "0")}`);

    static unescape = (text) => text.replace(/\\u([0-9a-f]{4})/g, (whole, group1) => String.fromCharCode(parseInt(group1, 16)));

}


