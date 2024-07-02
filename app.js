document.addEventListener("DOMContentLoaded", () => {
    const textInput = document.getElementById("text");
    const encryptBtn = document.getElementById("encrypt-btn");
    const decryptBtn = document.getElementById("decrypt-btn");
    const encryptResult = document.getElementById("encrypt");
    const decryptResult = document.getElementById("decrypt");

    // Fungsi untuk mengenkripsi string
    function encrypt(text, shift) {
        return text.split('').map(char => {
            const code = char.charCodeAt(0);
            return String.fromCharCode((code + shift) % 256);
        }).join('');
    }

    // Fungsi untuk mendekripsi string
    function decrypt(text, shift) {
        return text.split('').map(char => {
            const code = char.charCodeAt(0);
            return String.fromCharCode((code - shift + 256) % 256);
        }).join('');
    }

    encryptBtn.addEventListener("click", () => {
        const text = textInput.value;
        const shift = 8; // Contoh pergeseran
        const encrypted = encrypt(text, shift);
        encryptResult.value = encrypted;
    });

    decryptBtn.addEventListener("click", () => {
        const text = encryptResult.value;
        const shift = 8; // Contoh pergeseran yang sama untuk dekripsi
        const decrypted = decrypt(text, shift);
        decryptResult.value = decrypted;
    });
});
