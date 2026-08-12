# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · Italiano · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

Una piccola libreria TypeScript per individuare, selezionare e controllare le voci tramite la Web Speech API del browser.

## Panoramica

Voice TTS offre un wrapper compatto e tipizzato per `window.speechSynthesis` nelle applicazioni web.

## Funzionalità

- Inizializzazione asincrona delle voci.
- Selezione della voce per nome.
- Riproduzione, pausa, ripresa e arresto.
- Lettura degli stati speaking, paused e pending.
- Output ESM/CommonJS e tipi TypeScript.

## Requisiti

- Browser con `SpeechSynthesis` e `SpeechSynthesisUtterance`.
- Una voce fornita dal browser o dal sistema operativo.
- Bun per lo sviluppo del repository.

I runtime server non sono supportati e non è incluso un motore vocale.

## Installazione

```bash
bun add voice-tts
```

## Avvio rapido

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

I nomi dipendono dall’ambiente; scegliere un valore da `speechSynthesisVoices`.

## Utilizzo e API

Sono disponibili `init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` e `speechSynthesisVoices`. Attendere `init()` prima di selezionare una voce.

## Sviluppo

```bash
bun install
bun run build
bun run check
```

## Sicurezza

Non inviare segreti o dati sensibili senza comprendere il comportamento del browser e del sistema. Segnalare vulnerabilità tramite [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Contributi

Aprire una issue prima di modifiche sostanziali all’API. Le pull request devono includere spiegazione e verifiche.

## Licenza

Distribuito con [licenza MIT](LICENSE).
