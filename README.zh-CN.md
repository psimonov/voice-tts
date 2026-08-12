# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · 简体中文 · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

一个通过浏览器 Web Speech API 发现、选择和控制语音的小型 TypeScript 库。

## 概述

Voice TTS 为 Web 应用提供简洁且类型安全的 `window.speechSynthesis` 封装。

## 功能

- 异步初始化语音列表；
- 按名称选择语音；
- 播放、暂停、继续和停止；
- 查询 speaking、paused 和 pending 状态；
- 提供 ESM、CommonJS 和 TypeScript 类型。

## 要求

需要支持 `SpeechSynthesis` 和 `SpeechSynthesisUtterance` 的浏览器，以及浏览器或操作系统提供的语音。开发本仓库使用 Bun。服务器端运行时不受支持，本库也不包含语音引擎。

## 安装

```bash
bun add voice-tts
```

## 快速开始

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

语音名称取决于运行环境，请从 `speechSynthesisVoices` 中选择。

## 用法与 API

提供 `init`、`change`、`speak`、`pause`、`resume`、`stop`、`isSpeaking`、`isPaused`、`isPending` 和 `speechSynthesisVoices`。选择语音前必须等待 `init()` 完成。

## 开发

```bash
bun install
bun run build
bun run check
```

## 安全、贡献与许可证

不要在不了解浏览器和操作系统行为的情况下传递机密或敏感数据。请通过 [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new) 私下报告漏洞。重大 API 变更前请创建 issue。项目采用 [MIT 许可证](LICENSE)。
