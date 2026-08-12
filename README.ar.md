# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · [हिन्दी](README.hi.md) · العربية · [日本語](README.ja.md) · [한국어](README.ko.md)

---

<div dir="rtl">

مكتبة TypeScript صغيرة لاكتشاف الأصوات واختيارها والتحكم بها عبر Web Speech API في المتصفح.

## نظرة عامة

توفر Voice TTS غلافاً موجزاً وآمن الأنواع حول `window.speechSynthesis` لتطبيقات الويب.

## الميزات

- تهيئة قائمة الأصوات بصورة غير متزامنة؛
- اختيار الصوت بالاسم؛
- النطق والإيقاف المؤقت والاستئناف والإلغاء؛
- قراءة حالات speaking وpaused وpending؛
- مخرجات ESM/CommonJS وتعريفات TypeScript.

## المتطلبات

يلزم متصفح يدعم `SpeechSynthesis` و`SpeechSynthesisUtterance` وصوت يقدمه المتصفح أو نظام التشغيل. يستخدم Bun لتطوير المستودع. بيئات الخادم غير مدعومة ولا تتضمن المكتبة محرك نطق.

## التثبيت

</div>

```bash
bun add voice-tts
```

<div dir="rtl">

## بدء سريع

</div>

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

<div dir="rtl">

تعتمد أسماء الأصوات على البيئة؛ اختر اسماً من `speechSynthesisVoices`. تتوفر `init` و`change` و`speak` و`pause` و`resume` و`stop` واستعلامات الحالة. يجب انتظار `init()` قبل اختيار الصوت.

## التطوير

</div>

```bash
bun install
bun run build
bun run check
```

<div dir="rtl">

## الأمان والمساهمة والترخيص

لا تمرر أسراراً أو بيانات حساسة دون فهم سلوك المتصفح والنظام. أبلغ عن الثغرات عبر [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new). افتح issue قبل تغيير كبير في API. المشروع موزع بموجب [رخصة MIT](LICENSE).

</div>
