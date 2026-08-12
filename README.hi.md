# Voice TTS

[English](README.md) · [Español](README.es.md) · [Français](README.fr.md) · [Português](README.pt.md) · [Deutsch](README.de.md) · [Italiano](README.it.md) · [Русский](README.ru.md) · [简体中文](README.zh-CN.md) · हिन्दी · [العربية](README.ar.md) · [日本語](README.ja.md) · [한국어](README.ko.md)

---

ब्राउज़र Web Speech API के माध्यम से आवाज़ें खोजने, चुनने और नियंत्रित करने के लिए एक छोटी TypeScript लाइब्रेरी।

## परिचय

Voice TTS वेब अनुप्रयोगों के लिए `window.speechSynthesis` का संक्षिप्त और टाइप-सुरक्षित आवरण प्रदान करता है।

## विशेषताएँ

- आवाज़ सूची का असिंक्रोनस आरंभ;
- नाम से आवाज़ चुनना;
- बोलना, रोकना, फिर शुरू करना और समाप्त करना;
- speaking, paused और pending स्थिति जाँचना;
- ESM/CommonJS आउटपुट और TypeScript प्रकार।

## आवश्यकताएँ

`SpeechSynthesis` और `SpeechSynthesisUtterance` वाला ब्राउज़र तथा ब्राउज़र या OS द्वारा उपलब्ध आवाज़ आवश्यक है। रिपॉज़िटरी विकास के लिए Bun चाहिए। सर्वर runtime समर्थित नहीं हैं और लाइब्रेरी अपना speech engine नहीं देती।

## स्थापना

```bash
bun add voice-tts
```

## त्वरित शुरुआत

```typescript
import { Voice } from "voice-tts";
const voice = new Voice();
await voice.init();
console.log(voice.speechSynthesisVoices);
voice.change("Google UK English Female");
voice.speak("Hello, world!");
```

आवाज़ों के नाम परिवेश पर निर्भर हैं; `speechSynthesisVoices` से नाम चुनें।

## उपयोग और API

`init`, `change`, `speak`, `pause`, `resume`, `stop`, `isSpeaking`, `isPaused`, `isPending` और `speechSynthesisVoices` उपलब्ध हैं। आवाज़ चुनने से पहले `init()` पूरा होने दें।

## विकास

```bash
bun install
bun run build
bun run check
```

## सुरक्षा, योगदान और लाइसेंस

ब्राउज़र और OS के व्यवहार को समझे बिना गुप्त या संवेदनशील डेटा न दें। भेद्यता [GitHub Security Advisories](https://github.com/psimonov/voice-tts/security/advisories/new) से निजी रूप से बताएँ। बड़े API परिवर्तन से पहले issue खोलें। यह परियोजना [MIT License](LICENSE) के अंतर्गत है।
