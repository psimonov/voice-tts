# Voice TTS

English · [Español](https://github.com/psimonov/voice-tts/blob/main/README.es.md) · [Français](https://github.com/psimonov/voice-tts/blob/main/README.fr.md) · [Português](https://github.com/psimonov/voice-tts/blob/main/README.pt.md) · [Deutsch](https://github.com/psimonov/voice-tts/blob/main/README.de.md) · [Italiano](https://github.com/psimonov/voice-tts/blob/main/README.it.md) · [Русский](https://github.com/psimonov/voice-tts/blob/main/README.ru.md) · [简体中文](https://github.com/psimonov/voice-tts/blob/main/README.zh-CN.md) · [हिन्दी](https://github.com/psimonov/voice-tts/blob/main/README.hi.md) · [العربية](https://github.com/psimonov/voice-tts/blob/main/README.ar.md) · [日本語](https://github.com/psimonov/voice-tts/blob/main/README.ja.md) · [한국어](https://github.com/psimonov/voice-tts/blob/main/README.ko.md)

---

[![npm version](https://img.shields.io/npm/v/voice-tts)](https://www.npmjs.com/package/voice-tts) [![npm downloads](https://img.shields.io/npm/dm/voice-tts)](https://www.npmjs.com/package/voice-tts)

A small TypeScript library for discovering, selecting, and controlling text-to-speech voices through the browser Web Speech API.

## Overview

Voice TTS is published on npm as [`voice-tts`](https://www.npmjs.com/package/voice-tts). It wraps `window.speechSynthesis` in a compact class for browser applications that need typed voice discovery and common speech controls without implementing Web Speech API lifecycle handling directly.

## Features

- Asynchronous voice-list initialization.
- Voice selection by the browser-provided voice name.
- Speak, pause, resume, and stop controls.
- Speaking, paused, and pending state queries.
- TypeScript declarations.
- ESM and CommonJS package outputs.

## Requirements

- A browser environment with `window`, `SpeechSynthesis`, and `SpeechSynthesisUtterance`.
- At least one speech voice installed or provided by the browser/operating system.
- Bun for installing dependencies and developing this repository.

The package does not provide a speech engine or voices. Available voices and languages depend on the browser and operating system. Server-side runtimes are not supported.

## Installation

```bash
bun add voice-tts
```

## Quick start

```typescript
import { Voice } from "voice-tts";

const voice = new Voice();
await voice.init();

console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

Voice names are environment-specific. Select a name from `speechSynthesisVoices` instead of assuming that the example voice exists.

## Usage

```typescript
voice.pause();
voice.resume();
voice.stop();

voice.isSpeaking();
voice.isPaused();
voice.isPending();
```

`change(name)` throws when the voice list is empty or the requested voice is unavailable. Call and await `init()` before selecting a voice.

## API

| Member | Description |
| --- | --- |
| `init(): Promise<void>` | Loads voices and waits for `voiceschanged` when necessary. |
| `change(name: string): void` | Selects an available voice by exact name. |
| `speak(text: string): void` | Queues text for speech. |
| `pause(): void` | Pauses the current utterance. |
| `resume(): void` | Resumes paused speech. |
| `stop(): void` | Cancels queued and active speech. |
| `isSpeaking(): boolean` | Reports whether speech is active. |
| `isPaused(): boolean` | Reports whether speech is paused. |
| `isPending(): boolean` | Reports whether utterances are queued. |
| `speechSynthesisVoices` | Read-only list of discovered voices. |

## Development

```bash
bun install
bun run build
bun run check
```

The library builds ESM, CommonJS, and TypeScript declaration outputs into `dist/`.

## Security

Do not pass secrets or sensitive personal data to browser speech services without understanding the selected browser and operating system behavior. Report a vulnerability privately through [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Contributing

Open an issue before a substantial behavioral or API change. Pull requests should include an explanation and relevant verification.

## License

Distributed under the [MIT License](LICENSE).
