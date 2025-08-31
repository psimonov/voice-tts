# Voice TTS

Universal Text-to-Speech voice management library with support for both CommonJS and ES Modules.

## Features

- 🎯 **Universal Support**: Works with both CommonJS and ES Modules
- 🗣️ **Voice Management**: Easy voice selection and switching
- 📱 **Web Speech API**: Built on native browser Speech Synthesis
- 🚀 **TypeScript**: Full type definitions included
- 📦 **Tree-shakable**: Only import what you need

## Installation

```bash
npm install voice-tts
```

## Usage

### ES Modules

```typescript
import { Voice } from 'voice-tts';

const voice = new Voice();
await voice.init();

// Change to a specific voice
voice.change('Google UK English Female');

// Speak text
voice.speak('Hello, world!');
```

### CommonJS

```javascript
const { Voice } = require('voice-tts');

const voice = new Voice();
await voice.init();

voice.change('Google UK English Female');
voice.speak('Hello, world!');
```

## API

### `Voice` Class

#### Methods

- `init(): Promise<void>` - Initialize the voice system
- `change(name: string): void` - Change to a specific voice by name
- `speak(text: string): void` - Speak the given text
- `pause(): void` - Pause speech
- `resume(): void` - Resume speech
- `stop(): void` - Stop speech
- `isSpeaking(): boolean` - Check if currently speaking
- `isPaused(): boolean` - Check if speech is paused
- `isPending(): boolean` - Check if speech is pending

#### Properties

- `speechSynthesisVoices: SpeechSynthesisVoice[]` - Available voices

## Browser Support

This library requires the Web Speech API, which is supported in:
- Chrome 33+
- Safari 7+
- Firefox 49+
- Edge 14+

## License

MIT
