# Voice TTS

[English](README.md) · [Español](README.es.md) · Français · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

[![version npm](https://img.shields.io/npm/v/voice-tts)](https://www.npmjs.com/package/voice-tts) [![téléchargements npm](https://img.shields.io/npm/dm/voice-tts)](https://www.npmjs.com/package/voice-tts)

Une petite bibliothèque TypeScript pour découvrir, sélectionner et contrôler les voix via la Web Speech API du navigateur.

## Présentation

Voice TTS est publié sur npm sous le nom [`voice-tts`](https://www.npmjs.com/package/voice-tts). Il fournit une enveloppe compacte et typée autour de `window.speechSynthesis` pour les applications web.

## Fonctionnalités

- Initialisation asynchrone des voix.
- Sélection d’une voix par son nom.
- Lecture, pause, reprise et arrêt.
- Consultation des états speaking, paused et pending.
- Sorties ESM/CommonJS et types TypeScript.

## Prérequis

- Navigateur prenant en charge `SpeechSynthesis` et `SpeechSynthesisUtterance`.
- Une voix fournie par le navigateur ou le système.
- Bun pour développer le dépôt.

Les runtimes serveur ne sont pas pris en charge et aucun moteur vocal n’est inclus.

## Installation

```bash
bun add voice-tts
```

## Démarrage rapide

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

Les noms dépendent de l’environnement ; choisissez une valeur de `speechSynthesisVoices`.

## Utilisation et API

L’API expose `init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` et `speechSynthesisVoices`. Attendez toujours `init()` avant de sélectionner une voix.

## Développement

```bash
bun install
bun run build
bun run check
```

## Sécurité

Ne transmettez pas de secrets ou de données sensibles sans comprendre le comportement du navigateur et du système. Signalez les vulnérabilités via [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Contribution

Ouvrez une issue avant toute modification importante de l’API. Les pull requests doivent inclure une explication et les vérifications effectuées.

## Licence

Distribué sous [licence MIT](LICENSE).
