import './style.scss';

class Keyboard {
    constructor(keys) {
        this.keysElement = keys;
        this.keyboard = null;
        this.textarea = null;
        this.isCapsOn = false;
        this.isDown = false;
        this.layout = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
        this.keys = [];
    }

    renderHtmlElements() {
        const main = document.createElement('main');
        const textarea = document.createElement('textarea');
        const keyboard = document.createElement('div');
        const guide = document.createElement('p');
        const heading = document.createElement('h1');

        main.classList.add('main');
        main.classList.add('main-container');

        heading.textContent = 'RSS Virtual keyboard ';
        guide.innerText = 'To change the language, press Ctrl + Alt\nThe keyboard was written on Linux Ubuntu';

        main.appendChild(heading);
        main.appendChild(textarea);
        main.appendChild(keyboard);
        main.appendChild(guide);
        document.body.appendChild(main);

        this.keyboard = keyboard;
        this.textarea = textarea;
    }

    renderKeyboard() {
        this.keyboard.classList.add('keyboard');
        this.keysElement.forEach((key) => {
            const keyButton = document.createElement('button');
            keyButton.setAttribute('id', key.code);
            keyButton.setAttribute('type', 'button');
            keyButton.setAttribute('character-en', key.character.en);
            keyButton.setAttribute('character-ru', key.character.ru);
            keyButton.setAttribute('contents-en', key.contents.en);
            keyButton.setAttribute('contents-ru', key.contents.ru);
            keyButton.setAttribute('shift-en', key.shift.en);
            keyButton.setAttribute('shift-ru', key.shift.ru);
            keyButton.classList.add('key', key.code);
            keyButton.textContent = this.layout === 'en' ? key.contents.en : key.contents.ru;
            this.keyboard.appendChild(keyButton);
            this.keys.push(keyButton);
        });
    }

    addListeners() {
        document.addEventListener('keydown', (keyEvent) => {
            const key = document.getElementById(keyEvent.code);
            if (key) {
                key.classList.add('active');
                keyEvent.preventDefault();
                const characterEn = key.getAttribute('character-en');
                if ((keyEvent.code === 'ShiftLeft' || keyEvent.code === 'ShiftRight') && !keyEvent.repeat)
                    this.shiftText(true);
                else if (keyEvent.code === 'CapsLock' && !keyEvent.repeat) {
                    this.shiftText(false);
                    if (this.isCapsOn) key.classList.remove('active');
                    this.isCapsOn = !this.isCapsOn;
                } else if (keyEvent.ctrlKey && keyEvent.altKey) {
                    this.layout = this.layout === 'ru' ? 'en' : 'ru';
                    localStorage.setItem('lang', this.layout);
                    this.keys.forEach((keys) => {
                        if (this.layout === 'en') {
                            const getLang = keys;
                            getLang.innerText = keys.getAttribute('contents-en');
                        } else if (this.layout === 'ru') {
                            const getLang = keys;
                            getLang.innerText = keys.getAttribute('contents-ru');
                        }
                    });
                } else if (keyEvent.code === 'Backspace') this.handleText('', 'Backspace');
                else if (keyEvent.code === 'Delete') this.handleText('', 'Delete');
                else if (keyEvent.code === 'Enter') this.handleText('\n');
                else if (keyEvent.code === 'Tab') this.handleText('\t');
                else if (characterEn !== 'functional') this.handleText(key.textContent);
            }
        });

        document.addEventListener('keyup', (keyEvent) => {
            const key = document.getElementById(keyEvent.code);
            if (key) {
                if (keyEvent.code !== 'CapsLock') key.classList.remove('active');
                if (keyEvent.code === 'ShiftLeft' || keyEvent.code === 'ShiftRight') this.shiftText(true);
            }
        });

        this.keyboard.addEventListener('mousedown', (event) => {
            const eventKeyDown = new KeyboardEvent('keydown', {
                code: event.target.id,
            });
            document.dispatchEvent(eventKeyDown);
            this.isDown = true;
        });

        this.keyboard.addEventListener('mouseup', (event) => {
            const eventKeyUp = new KeyboardEvent('keyup', { code: event.target.id });
            document.dispatchEvent(eventKeyUp);
            this.isDown = false;
        });

        this.keyboard.addEventListener('mouseout', (event) => {
            if (this.isDown) {
                const eventKeyUp = new KeyboardEvent('keyup', {
                    code: event.target.id,
                });
                document.dispatchEvent(eventKeyUp);
            }
        });

        this.textarea.onblur = () => this.textarea.focus();
        this.textarea.focus();
    }

    handleText(text, param) {
        let cursorPos = this.textarea.selectionStart;
        let cursorPosEnd = this.textarea.selectionEnd;
        if (this.textarea.selectionStart === this.textarea.selectionEnd) {
            if (param === 'Delete') cursorPosEnd += 1;
            else if (param === 'Backspace') cursorPos = Math.max(0, cursorPos - 1);
        }

        if (param === 'Delete' || param === 'Backspace') {
            this.textarea.setRangeText('', cursorPos, cursorPosEnd);
        } else this.textarea.setRangeText(text);

        this.textarea.selectionStart = cursorPos + text.length;
        this.textarea.selectionEnd = this.textarea.selectionStart;
    }

    shiftText(noCapsKey) {
        this.keys.forEach((keys) => {
            const key = keys;
            if (noCapsKey || key.getAttribute('character-en') === 'letter') {
                const temp = key.getAttribute('contents-en');
                key.setAttribute('contents-en', key.getAttribute('shift-en'));
                key.setAttribute('shift-en', temp);
            }
            if (noCapsKey || key.getAttribute('character-ru') === 'letter') {
                const temp = key.getAttribute('contents-ru');
                key.setAttribute('contents-ru', key.getAttribute('shift-ru'));
                key.setAttribute('shift-ru', temp);
            }
            key.innerText = this.layout === 'en' ? key.getAttribute('contents-en') : key.getAttribute('contents-ru');
        });
    }
}

const getKeysConfig = async () => {
    const url = './assets/data/keys.json';
    const res = await fetch(url);
    return res.json();
};

window.addEventListener('DOMContentLoaded', async () => {
    const keysConfig = await getKeysConfig();
    const keyboard = new Keyboard(keysConfig);
    keyboard.renderHtmlElements();
    keyboard.renderKeyboard();
    keyboard.addListeners();
});
