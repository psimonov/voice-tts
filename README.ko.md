# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · [العربية](README.ar.md) · [日本語](README.ja.md) · 한국어

---

[![npm 버전](https://img.shields.io/npm/v/voice-tts)](https://www.npmjs.com/package/voice-tts) [![npm 다운로드](https://img.shields.io/npm/dm/voice-tts)](https://www.npmjs.com/package/voice-tts)

브라우저 Web Speech API를 통해 음성을 검색하고 선택하며 제어하는 작은 TypeScript 라이브러리입니다.

## 개요

Voice TTS는 웹 애플리케이션을 위해 `window.speechSynthesis`를 간결하고 타입 안전하게 감쌉니다.

## 기능

- 음성 목록 비동기 초기화
- 이름으로 음성 선택
- 말하기, 일시 정지, 재개 및 중지
- speaking, paused, pending 상태 조회
- ESM/CommonJS 출력과 TypeScript 타입

## 요구 사항

`SpeechSynthesis`와 `SpeechSynthesisUtterance`를 지원하는 브라우저 및 브라우저나 OS가 제공하는 음성이 필요합니다. 저장소 개발에는 Bun을 사용합니다. 서버 runtime은 지원하지 않으며 자체 음성 엔진을 포함하지 않습니다.

## 설치

```bash
bun add voice-tts
```

## 빠른 시작

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

음성 이름은 환경에 따라 다르므로 `speechSynthesisVoices`에서 선택하세요.

## 사용법과 API

`init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending`, `speechSynthesisVoices`를 제공합니다. 음성을 선택하기 전에 `init()`을 기다려야 합니다.

## 개발

```bash
bun install
bun run build
bun run check
```

## 보안, 기여 및 라이선스

브라우저와 OS 동작을 이해하지 않은 채 비밀이나 민감한 데이터를 전달하지 마세요. 취약점은 [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new)로 비공개 보고하세요. 큰 API 변경 전 issue를 생성하세요. [MIT License](LICENSE)로 배포됩니다.
