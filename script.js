
const nums = '0123456789';
const mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minus = mayus.toLowerCase();
const simbolos = '!@#$%^&*()_+';

const btn = document.getElementById('btn');
const inputLength = document.getElementById('inputLength');
const inputRes = document.getElementById('inputRes');
btn.addEventListener('click', () => {
    const length = inputLength.value;
    inputRes.value = generatePassword(length);
});


/**
 * Función para generar una contraseña aleatoria
 * @param {number} length
 * @returns {string} password - Contraseña generada
 */
function generatePassword(length){
    let password = '';
    for(let i = 0; i < length; i++){
        const random = Math.floor(Math.random() * 4);
        switch(random){
            case 0:
                password += nums[Math.floor(Math.random() * nums.length)];
                break;
            case 1:
                password += mayus[Math.floor(Math.random() * mayus.length)];
                break;
            case 2:
                password += minus[Math.floor(Math.random() * minus.length)];
                break;
            case 3:
                password += simbolos[Math.floor(Math.random() * simbolos.length)];
                break;
        }
    }
    return password;
}