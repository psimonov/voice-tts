# Voice TTS

[English](README.md) · Español · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

Una pequeña biblioteca TypeScript para descubrir, seleccionar y controlar voces mediante la Web Speech API del navegador.

## Descripción general

Voice TTS proporciona una envoltura compacta y tipada sobre `window.speechSynthesis` para aplicaciones web.

## Funciones

- Inicialización asíncrona de voces.
- Selección de voz por nombre.
- Reproducción, pausa, reanudación y cancelación.
- Consulta de los estados speaking, paused y pending.
- Salidas ESM/CommonJS y tipos TypeScript.

## Requisitos

- Navegador con `SpeechSynthesis` y `SpeechSynthesisUtterance`.
- Una voz proporcionada por el navegador o el sistema operativo.
- Bun para desarrollar el repositorio.

No admite runtimes de servidor ni incluye un motor de voz propio.

## Instalación

```bash
bun add voice-tts
```

## Inicio rápido

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

Los nombres dependen del entorno; elija uno de `speechSynthesisVoices`.

## Uso y API

Están disponibles `init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` y `speechSynthesisVoices`. Espere siempre a `init()` antes de elegir una voz.

## Desarrollo

```bash
bun install
bun run build
bun run check
```

## Seguridad

No envíe secretos o datos sensibles a servicios de voz sin conocer el comportamiento del navegador y del sistema. Informe vulnerabilidades mediante [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Contribuciones

Abra un issue antes de cambiar sustancialmente la API. Los pull requests deben incluir explicación y verificación.

## Licencia

Distribuido bajo la [licencia MIT](LICENSE).
