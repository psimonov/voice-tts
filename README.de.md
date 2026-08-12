# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · Deutsch · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

[![npm-Version](https://img.shields.io/npm/v/voice-tts)](https://www.npmjs.com/package/voice-tts) [![npm-Downloads](https://img.shields.io/npm/dm/voice-tts)](https://www.npmjs.com/package/voice-tts)

Eine kleine TypeScript-Bibliothek zum Ermitteln, Auswählen und Steuern von Stimmen über die Web Speech API des Browsers.

## Überblick

Voice TTS wird auf npm als [`voice-tts`](https://www.npmjs.com/package/voice-tts) veröffentlicht. Die Bibliothek stellt eine kompakte, typisierte Abstraktion für `window.speechSynthesis` in Webanwendungen bereit.

## Funktionen

- Asynchrone Initialisierung der Stimmenliste.
- Auswahl einer Stimme nach Namen.
- Sprechen, Pausieren, Fortsetzen und Stoppen.
- Abfrage der Zustände speaking, paused und pending.
- ESM-/CommonJS-Ausgaben und TypeScript-Typen.

## Voraussetzungen

- Browser mit `SpeechSynthesis` und `SpeechSynthesisUtterance`.
- Eine vom Browser oder Betriebssystem bereitgestellte Stimme.
- Bun für die Entwicklung des Repositorys.

Server-Runtimes werden nicht unterstützt; eine eigene Sprach-Engine ist nicht enthalten.

## Installation

```bash
bun add voice-tts
```

## Schnellstart

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

Stimmnamen hängen von der Umgebung ab; wählen Sie einen Wert aus `speechSynthesisVoices`.

## Verwendung und API

Verfügbar sind `init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` und `speechSynthesisVoices`. Warten Sie vor der Auswahl einer Stimme auf `init()`.

## Entwicklung

```bash
bun install
bun run build
bun run check
```

## Sicherheit

Übergeben Sie keine Geheimnisse oder sensiblen Daten, ohne das Verhalten von Browser und Betriebssystem zu kennen. Melden Sie Schwachstellen über [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Mitwirken

Erstellen Sie vor wesentlichen API-Änderungen ein Issue. Pull Requests müssen Erklärung und Prüfergebnisse enthalten.

## Lizenz

Veröffentlicht unter der [MIT-Lizenz](LICENSE).
