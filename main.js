const keyboardLayout = [
  {
    rowClass: 'function-number-row',
    keys: [
      { label: 'Escape', size: 1, class: 'modifier' },
      { label: 'F1', size: 1, class: 'alphanumeric' },
      { label: 'F2', size: 1, class: 'alphanumeric' },
      { label: 'F3', size: 1, class: 'alphanumeric' },
      { label: 'F4', size: 1, class: 'alphanumeric' },
      { label: '', size: 1, class: 'blank' },
      { label: 'F5', size: 1, class: 'alphanumeric' },
      { label: 'F6', size: 1, class: 'alphanumeric' },
      { label: 'F7', size: 1, class: 'alphanumeric' },
      { label: 'F8', size: 1, class: 'alphanumeric' },
      { label: '', size: 1, class: 'blank' },
      { label: 'F9', size: 1, class: 'alphanumeric' },
      { label: 'F10', size: 1, class: 'alphanumeric' },
      { label: 'F11', size: 1, class: 'alphanumeric' },
      { label: 'F12', size: 1, class: 'alphanumeric' }
    ]
  },
  {
    rowClass: 'number-row',
    keys: [
      { label: '~', size: 1, class: 'alphanumeric' },
      { label: '1', size: 1, class: 'alphanumeric' },
      { label: '2', size: 1, class: 'alphanumeric' },
      { label: '3', size: 1, class: 'alphanumeric' },
      { label: '4', size: 1, class: 'alphanumeric' },
      { label: '5', size: 1, class: 'alphanumeric' },
      { label: '6', size: 1, class: 'alphanumeric' },
      { label: '7', size: 1, class: 'alphanumeric' },
      { label: '8', size: 1, class: 'alphanumeric' },
      { label: '9', size: 1, class: 'alphanumeric' },
      { label: '0', size: 1, class: 'alphanumeric' },
      { label: '-', size: 1, class: 'alphanumeric' },
      { label: '=', size: 1, class: 'alphanumeric' },
      { label: 'Backspace', size: 2, class: 'modifier' }
    ]
  },
  {
    rowClass: 'qwerty-row',
    keys: [
      { label: 'Tab', size: 1.5, class: 'modifier' },
      { label: 'Q', size: 1, class: 'alphanumeric' },
      { label: 'W', size: 1, class: 'alphanumeric' },
      { label: 'E', size: 1, class: 'alphanumeric' },
      { label: 'R', size: 1, class: 'alphanumeric' },
      { label: 'T', size: 1, class: 'alphanumeric' },
      { label: 'Y', size: 1, class: 'alphanumeric' },
      { label: 'U', size: 1, class: 'alphanumeric' },
      { label: 'I', size: 1, class: 'alphanumeric' },
      { label: 'O', size: 1, class: 'alphanumeric' },
      { label: 'P', size: 1, class: 'alphanumeric' },
      { label: '[', size: 1, class: 'alphanumeric' },
      { label: ']', size: 1, class: 'alphanumeric' },
      { label: '\\', size: 1.5, class: 'modifier' }
    ]
  },
  {
    rowClass: 'asdf-row',
    keys: [
      { label: 'Caps Lock', size: 1.75, class: 'modifier' },
      { label: 'A', size: 1, class: 'alphanumeric' },
      { label: 'S', size: 1, class: 'alphanumeric' },
      { label: 'D', size: 1, class: 'alphanumeric' },
      { label: 'F', size: 1, class: 'alphanumeric' },
      { label: 'G', size: 1, class: 'alphanumeric' },
      { label: 'H', size: 1, class: 'alphanumeric' },
      { label: 'J', size: 1, class: 'alphanumeric' },
      { label: 'K', size: 1, class: 'alphanumeric' },
      { label: 'L', size: 1, class: 'alphanumeric' },
      { label: ';', size: 1, class: 'alphanumeric' },
      { label: '\'', size: 1, class: 'alphanumeric' },
      { label: 'Enter', size: 2.25, class: 'modifier' }
    ]
  },
  {
    rowClass: 'zxcv-row',
    keys: [
      { label: 'Shift', size: 2.25 },
      { label: 'Z', size: 1, class: 'alphanumeric' },
      { label: 'X', size: 1, class: 'alphanumeric' },
      { label: 'C', size: 1, class: 'alphanumeric' },
      { label: 'V', size: 1, class: 'alphanumeric' },
      { label: 'B', size: 1, class: 'alphanumeric' },
      { label: 'N', size: 1, class: 'alphanumeric' },
      { label: 'M', size: 1, class: 'alphanumeric' },
      { label: ',', size: 1, class: 'alphanumeric' },
      { label: '.', size: 1, class: 'alphanumeric' },
      { label: '/', size: 1, class: 'alphanumeric' },
      { label: 'Shift', size: 2.75 }
    ]
  },
  {
    rowClass: 'bottom-row',
    keys: [
      { label: 'Ctrl', size: 1.5, class: 'modifier' },
      { label: 'Win', size: 1, class: 'alphanumeric' },
      { label: 'Alt', size: 1, class: 'alphanumeric' },
      { label: 'Space', size: 6, class: 'modifier' },
      { label: 'Alt', size: 1, class: 'alphanumeric' },
      { label: 'Fn', size: 1, class: 'alphanumeric' },
      { label: 'Menu', size: 1, class: 'alphanumeric' },
      { label: 'Ctrl', size: 1.5, class: 'modifier' }
    ]
  }
];

const modifierKeys = [
  'Shift',
  'Tab',
  'Escape',
  'Backspace',
  'Enter',
  'Control',
  'Alt',
  'AltGraph',
  'CapsLock',
  'Fn',
  'FnLock',
  'Hyper',
  'Meta',
  'NumLock',
  'ScrollLock',
  'Super',
  'Symbol',
  'SymbolLock',
];

function getModifierKeyId(key) {
  return modifierKeys.includes(key) ? 'key' + key : null;
}

const output = document.getElementById('output');

function handleKeyEvent(event) {
  event.preventDefault();
  output.textContent = `Key pressed: ${event.key}`;
}

document.addEventListener('keydown', (event) => {
  console.log('Key pressed:', event.key);
  handleKeyEvent(event);
  const modifierKeyId = getModifierKeyId(event.key);
  const keyId = modifierKeyId ? modifierKeyId : `key${event.key.toUpperCase()}`;
  const keyElement = document.getElementById(keyId);
  if (keyElement && !keyElement.classList.contains('pressed')) {
    keyElement.classList.add('pressed');
  }
});

document.addEventListener('keyup', (event) => {
  const modifierKeyId = getModifierKeyId(event.key);
  const keyId = modifierKeyId ? modifierKeyId : `key${event.key.toUpperCase()}`;
  const keyElement = document.getElementById(keyId);
  if (keyElement) {
    keyElement.classList.remove('pressed');
  }
});

function createKeyboard(layout) {
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard-layout');

  layout.forEach((row) => {
    const keyRow = document.createElement('div');
    keyRow.classList.add('key-row', row.rowClass);

    row.keys.forEach((key) => {
      const keyDiv = document.createElement('div');
      keyDiv.classList.add('key');
      if (key.class) {
        keyDiv.classList.add(key.class);
      }
      keyDiv.id = 'key' + key.label;
      keyDiv.textContent = key.label;
      keyDiv.style.width = key.size * 50 + 'px';
      keyDiv.style.height = 50 + 'px';
      keyRow.appendChild(keyDiv);
    });

    keyboard.appendChild(keyRow);
  });

  return keyboard;
}
const keyboard = createKeyboard(keyboardLayout);
document.body.appendChild(keyboard);