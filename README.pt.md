# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · Português · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

[![versão npm](https://img.shields.io/npm/v/voice-tts)](https://www.npmjs.com/package/voice-tts) [![downloads npm](https://img.shields.io/npm/dm/voice-tts)](https://www.npmjs.com/package/voice-tts)

Uma pequena biblioteca TypeScript para descobrir, selecionar e controlar vozes pela Web Speech API do navegador.

## Visão geral

Voice TTS é publicado no npm como [`voice-tts`](https://www.npmjs.com/package/voice-tts). Ele oferece uma camada compacta e tipada sobre `window.speechSynthesis` para aplicações web.

## Recursos

- Inicialização assíncrona das vozes.
- Seleção por nome.
- Falar, pausar, continuar e parar.
- Consulta dos estados speaking, paused e pending.
- Saídas ESM/CommonJS e tipos TypeScript.

## Requisitos

- Navegador com `SpeechSynthesis` e `SpeechSynthesisUtterance`.
- Uma voz fornecida pelo navegador ou sistema operacional.
- Bun para desenvolver o repositório.

Runtimes de servidor não são suportados e nenhum mecanismo de voz é incluído.

## Instalação

```bash
bun add voice-tts
```

## Início rápido

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

Os nomes dependem do ambiente; escolha um valor de `speechSynthesisVoices`.

## Uso e API

Estão disponíveis `init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` e `speechSynthesisVoices`. Aguarde `init()` antes de selecionar uma voz.

## Desenvolvimento

```bash
bun install
bun run build
bun run check
```

## Segurança

Não envie segredos ou dados sensíveis sem compreender o comportamento do navegador e do sistema. Relate vulnerabilidades por [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new).

## Contribuição

Abra uma issue antes de alterações importantes na API. Pull requests devem incluir explicação e verificação.

## Licença

Distribuído sob a [licença MIT](LICENSE).
