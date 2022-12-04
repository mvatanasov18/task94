import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    const emojiDiv = document.querySelector("#emojis");
    emojiDiv.textContent = "";
    this.emojis = emojis;
    let emojiP = document.createElement("p");
    emojiP.textContent = this.emojis.join(" ");
    emojiDiv.appendChild(emojiP);
  }

  addBananas() {
    const feed = this.emojis.map(m => m + this.banana);
    this.setEmojis(feed);
  }
}
