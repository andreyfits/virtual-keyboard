/* CREATE SCREEN, KEYBOARD AND DESCRIPTION */
const main = document.createElement('main');
main.classList.add('main');
main.classList.add('main-container');
document.body.append(main);

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.name = 'display';
textarea.autofocus = true;
document.body.append(textarea);

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
document.body.append(keyboard);

const guide = document.createElement('p');
guide.className = 'desc';
guide.innerHTML = 'Для смены языка нажмите Ctrl + Alt <br> Клавиатура писалась на Linux Ubuntu';
document.body.append(guide);

const heading = document.createElement('h1');
heading.textContent = 'RSS Virtual Keyboard';
main.appendChild(heading);
main.appendChild(textarea);
main.appendChild(keyboard);
main.appendChild(guide);

export { textarea, keyboard };
