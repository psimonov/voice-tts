# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · 日本語 · [한국어](README.ko.md)

---

ブラウザーのWeb Speech APIを使って音声を検出・選択・制御する小さなTypeScriptライブラリです。

## 概要

Voice TTSは、Webアプリ向けに`window.speechSynthesis`の簡潔で型安全なラッパーを提供します。

## 機能

- 音声一覧の非同期初期化
- 名前による音声選択
- 読み上げ、一時停止、再開、停止
- speaking、paused、pending状態の取得
- ESM/CommonJS出力とTypeScript型

## 要件

`SpeechSynthesis`と`SpeechSynthesisUtterance`を備えたブラウザー、およびブラウザーまたはOSが提供する音声が必要です。開発にはBunを使用します。サーバーruntimeには対応せず、独自の音声エンジンも含みません。

## インストール

```bash
bun add voice-tts
```

## クイックスタート

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

音声名は環境依存です。`speechSynthesisVoices`から選択してください。

## 使用方法とAPI

`init`、`change`、`speak`、`pause`、`resume`、`stop`、`isSpeaking`、`isPaused`、`isPending`、`speechSynthesisVoices`を利用できます。音声選択前に`init()`を待ってください。

## 開発

```bash
bun install
bun run build
bun run check
```

## セキュリティ、貢献、ライセンス

ブラウザーとOSの挙動を理解せずに秘密情報や機密データを渡さないでください。脆弱性は[GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new)から非公開で報告してください。大きなAPI変更の前にissueを作成してください。[MIT License](LICENSE)で提供されます。
