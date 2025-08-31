import { Voice } from './Voice';

const createElement = (
  tagName: string,
  innerText?: string,
  onclick?: ((this: GlobalEventHandlers, ev: PointerEvent) => any) | null
) => {
  const $element = document.createElement(tagName);

  if (innerText) {
    $element.innerText = innerText;
  }

  if (onclick) {
    $element.onclick = onclick;
  }

  return $element;
};

(async () => {
  const voice = new Voice();
  await voice.init();

  const $ul = createElement('div');

  voice.speechSynthesisVoices.forEach((item) => {
    const $li = createElement('div');

    const $playButton = createElement('button', '⏵', () => {
      voice.change(item.name);
      voice.speak('Привет, мир!');
    });

    const $spacer = createElement('span', ' ');

    const $text = createElement('span', item.name);

    $li.appendChild($playButton);
    $li.appendChild($spacer);
    $li.appendChild($text);

    $ul.appendChild($li);
  });

  document.body.appendChild($ul);
})();
