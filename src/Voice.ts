export class Voice {
  private _speechSynthesisVoices: SpeechSynthesisVoice[] = [];
  private targetVoice?: SpeechSynthesisVoice;

  get speechSynthesisVoices(): SpeechSynthesisVoice[] {
    return this._speechSynthesisVoices;
  }

  async init(): Promise<void> {
    if (!('speechSynthesis' in window)) {
      throw new Error('Web Speech API is not supported');
    }

    this._speechSynthesisVoices = speechSynthesis.getVoices();

    if (this._speechSynthesisVoices.length) {
      return;
    }

    await new Promise<void>((resolve) => {
      const handler = () => {
        this._speechSynthesisVoices = speechSynthesis.getVoices();

        speechSynthesis.removeEventListener('voiceschanged', handler);

        resolve();
      };

      speechSynthesis.addEventListener('voiceschanged', handler);
    });
  }

  change(name: string) {
    if (!this._speechSynthesisVoices.length) {
      throw new Error('The list of votes is empty');
    }

    const found = this._speechSynthesisVoices.find(
      (voice) => voice.name === name
    );

    if (!found) {
      throw new Error(`Voice “${name}” not found`);
    }

    this.targetVoice = found;
  }

  speak(text: string) {
    if (!this.targetVoice) {
      console.warn('No voice selected. Default voice is being used');
    }

    const utterance = new SpeechSynthesisUtterance(text);

    console.log(this.targetVoice);

    if (this.targetVoice) {
      utterance.voice = this.targetVoice;
      utterance.lang = this.targetVoice.lang;
    }

    speechSynthesis.speak(utterance);
  }

  pause() {
    speechSynthesis.pause();
  }

  resume() {
    speechSynthesis.resume();
  }

  stop() {
    speechSynthesis.cancel();
  }

  isSpeaking() {
    return speechSynthesis.speaking;
  }

  isPaused() {
    return speechSynthesis.paused;
  }

  isPending() {
    return speechSynthesis.pending;
  }
}
