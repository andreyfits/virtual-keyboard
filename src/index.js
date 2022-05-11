import './style.scss';
import keyBtn from './assets/js/keyMap';
import { textarea, keyboard } from './assets/js/layout';

let lang;

if (localStorage.getItem('lang') === 'en') {
    lang = 'en';
} else if (localStorage.getItem('lang') === 'ru') {
    lang = 'ru';
} else {
    lang = 'en';
}

const langStorage = 'lang';
let keys = [];

let isCapsOn = false;
let isShiftOn = false;

function keyCodeClassName(str) {
    const x = str.charAt(0).toLowerCase();
    return x + str.slice(1);
}

function createButtons(array) {
    document.querySelectorAll('.key').forEach((el) => el.remove());
    array.forEach((element) => {
        const key = document.createElement('div');
        key.className = keyCodeClassName(element.keyCode);
        key.classList.add('key');
        key.id = element.keyCode;
        if (lang === 'ru') {
            if (isCapsOn === false && isShiftOn === false) {
                key.innerHTML = element.ru;
            } else if (isCapsOn === false && isShiftOn === true) {
                key.innerHTML = element.RU;
            } else if (isCapsOn === true && isShiftOn === false) {
                if (element.perceivesCapsLk) {
                    key.innerHTML = element.RU;
                } else {
                    key.innerHTML = element.ru;
                }
            } else {
                key.innerHTML = element.ru;
            }
        } else if (isCapsOn === false && isShiftOn === false) {
            key.innerHTML = element.en;
        } else if (isCapsOn === false && isShiftOn === true) {
            key.innerHTML = element.EN;
        } else if (isCapsOn === true && isShiftOn === false) {
            if (element.perceivesCapsLk === true) {
                key.innerHTML = element.EN;
            } else {
                key.innerHTML = element.en;
            }
        } else {
            key.innerHTML = element.en;
        }
        keyboard.append(key);
        keys = document.querySelectorAll('.key');
    });
}

createButtons(keyBtn);

const keysDown = {};
let isControlDown = false;

document.addEventListener('keydown', function (event) {
    if (!(event.key in keysDown)) {
        keysDown[event.key] = true;
    }
    event.preventDefault();
    textarea.focus();

    const string = textarea.value;
    const pos = textarea.selectionStart;
    const posEnd = textarea.selectionEnd;

    keys.forEach((el) => {
        if (el.id === event.code) {
            el.classList.add('active');
            if (el.id === 'Tab') {
                textarea.value += '\t';
            } else if (el.id === 'CapsLock') {
                isCapsOn = !isCapsOn;
                createButtons(keyBtn);
                keys = document.querySelectorAll('.key');
                keys.forEach((elem) => {
                    if (elem.id === event.code && isCapsOn) {
                        elem.classList.add('active');
                    }
                });
            } else if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = true;
                createButtons(keyBtn);
                keys = document.querySelectorAll('.key');
                keys.forEach((elem) => {
                    if (elem.id === event.code) {
                        elem.classList.add('active');
                    } else if (elem.id === 'CapsLock' && isCapsOn) {
                        elem.classList.add('active');
                    }
                });
            } else if (el.id === 'ControlLeft' || el.id === 'ControlRight') {
                isControlDown = true;
            } else if (el.id === 'AltLeft' || el.id === 'AltRight') {
                if (isControlDown === true) {
                    if (lang === 'ru') {
                        lang = 'en';
                        localStorage.setItem(langStorage, 'en');
                    } else {
                        lang = 'ru';
                        localStorage.setItem(langStorage, 'ru');
                    }
                    createButtons(keyBtn);
                    keys = document.querySelectorAll('.key');
                }
            } else if (el.id === 'Enter') {
                textarea.value += '\n';
            } else if (el.id === 'Delete') {
                if (pos >= 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(pos + 1, string.length);
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                }
                textarea.selectionStart = pos;
                textarea.selectionEnd = pos;
            } else if (el.id === 'Backspace') {
                if (pos > 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos - 1) + string.slice(pos, string.length);
                    textarea.selectionStart = pos - 1;
                    textarea.selectionEnd = pos - 1;
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                    textarea.selectionStart = pos;
                    textarea.selectionEnd = pos;
                }
            } else {
                textarea.value += el.textContent;
            }
        }
    });
});

document.addEventListener('keyup', function (event) {
    keys.forEach((el) => {
        if (el.id === event.code) {
            el.classList.remove('active');
        }
        if (el.id === 'CapsLock' && isCapsOn) {
            el.classList.add('active');
        }
    });

    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
        isShiftOn = false;
        createButtons(keyBtn);
        keys = document.querySelectorAll('.key');
        keys.forEach((el) => {
            if (el.id === event.code) {
                el.classList.remove('active');
            } else if (el.id === 'CapsLock' && isCapsOn) {
                el.classList.add('active');
            }
        });
    }

    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
        isControlDown = false;
    }
});

keyboard.addEventListener('mousedown', function (event) {
    event.preventDefault();
    textarea.focus();

    const string = textarea.value;
    const pos = textarea.selectionStart;
    const posEnd = textarea.selectionEnd;

    keys.forEach((el) => {
        if (el === event.target) {
            el.classList.add('active');
            if (el.id === 'Tab') {
                textarea.value += '\t';
            } else if (el.id === 'CapsLock') {
                isCapsOn = !isCapsOn;
                createButtons(keyBtn);
                keys = document.querySelectorAll('.key');
            } else if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = true;
                createButtons(keyBtn);
                keys = document.querySelectorAll('.key');
            } else if (
                el.id === 'ControlLeft' ||
                el.id === 'ControlRight' ||
                el.id === 'AltLeft' ||
                el.id === 'AltRight'
            ) {
            } else if (el.id === 'Enter') {
                textarea.value += '\n';
            } else if (el.id === 'MetaLeft') {
                textarea.value += '';
            } else if (el.id === 'Delete') {
                if (pos >= 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(pos + 1, string.length);
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                }
                textarea.selectionStart = pos;
                textarea.selectionEnd = pos;
            } else if (el.id === 'Backspace') {
                if (pos > 0 && pos === posEnd) {
                    textarea.value = string.slice(0, pos - 1) + string.slice(pos, string.length);
                    textarea.selectionStart = pos - 1;
                    textarea.selectionEnd = pos - 1;
                }
                if (pos !== posEnd) {
                    textarea.value = string.slice(0, pos) + string.slice(posEnd, string.length);
                    textarea.selectionStart = pos;
                    textarea.selectionEnd = pos;
                }
            } else {
                textarea.value += el.textContent;
            }
        }
    });
});

keyboard.addEventListener('mouseup', function (event) {
    keys.forEach((el) => {
        if (el === event.target) {
            el.classList.remove('active');
            if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
                isShiftOn = false;
                createButtons(keyBtn);
                keys = document.querySelectorAll('.key');
            }
        }
    });
});
