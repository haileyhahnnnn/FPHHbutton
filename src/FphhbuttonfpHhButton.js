import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class FphhbuttonfpHhButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: inline-block;
        border-radius: 20px;
        padding: 22px;
        --apple-foreground-color: red;
        --apple-background-color: white;
      }
      .FphhbuttonfpHhButton {
        border-radius: 20px;
        padding: 12px 50px;
        color: var(--apple-foreground-color);
        background-color: var(--apple-background-color);
        border: 2px solid var(--apple-foreground-color);
        transition-duration: 0.5s;
        font-family: impact;
        font-size: large;
      }
      .FphhbuttonfpHhButton:hover,
      :focus {
        border-radius: 24px;
        --apple-foreground-color: red;
        --apple-background-color: white;
        box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
          0 17px 50px 0 rgba(0, 0, 0, 0.19);
      }
      :host([invert]) .FphhbuttonfpHhButton:hover,
      :host([invert]) .FphhbuttonfpHhButton:focus {
        --apple-foreground-color: blue;
        --apple-background-color: white;
      }
    `;
    }
// defining all the variables 
  static get properties() {
    return {
      title: { type: String },
      invert: {type, Boolean, reflect: true},
      icon: {type: String},
      link: {type: String},
      counter: { type: Number },
    };
  }

//constuctor for title 
constructor () { 
  super() 
  this.title = "Apple Button";
  this.invert = true;
  this.icon = 'image: music-note';
  this.link = 'https://www.apple.com/apple-music/';
}

//directing the button 
  render() {
    return html`
    <a href="${this.link}" @click="${this.link}">
    <button class="FphhbuttonfpHhButton">
      <simple-icon-lite icon="${this.icon}"></simple-icon-lite>${this.title}
    </button>
  </a>
}
}
