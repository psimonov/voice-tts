# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · Русский · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

[![версия npm](https://img.shields.io/npm/v/voice-tts)](https://www.npmjs.com/package/voice-tts) [![загрузки npm](https://img.shields.io/npm/dm/voice-tts)](https://www.npmjs.com/package/voice-tts)

Небольшая TypeScript-библиотека для поиска, выбора и управления синтезом речи через браузерный Web Speech API.

## Обзор

Voice TTS опубликован в npm как пакет [`voice-tts`](https://www.npmjs.com/package/voice-tts). Библиотека предоставляет компактную типизированную обёртку над `window.speechSynthesis` для браузерных приложений.

## Возможности

- Асинхронная загрузка списка голосов.
- Выбор голоса по имени.
- Воспроизведение, пауза, продолжение и остановка речи.
- Проверка состояний speaking, paused и pending.
- Сборки ESM/CommonJS и TypeScript-типы.

## Требования

- Браузер с `SpeechSynthesis` и `SpeechSynthesisUtterance`.
- Голос, предоставленный браузером или ОС.
- Bun для разработки репозитория.

Серверные runtime не поддерживаются; библиотека не содержит собственного речевого движка или голосов.

## Установка

```bash
bun add voice-tts
```

## Быстрый старт

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

Имена голосов зависят от окружения: выбирайте значение из `speechSynthesisVoices`.

## Использование и API

Доступны `init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` и свойство `speechSynthesisVoices`. Перед выбором голоса обязательно дождитесь `init()`.

## Разработка

```bash
bun install
bun run build
bun run check
```

## Безопасность

Не передавайте секреты или чувствительные данные речевым сервисам без понимания поведения браузера и ОС. Уязвимости сообщайте через [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Участие

Перед существенным изменением API создайте issue. Pull request должен содержать описание и результаты проверки.

## Лицензия

Распространяется по [лицензии MIT](LICENSE).
