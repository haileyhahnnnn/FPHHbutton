import { html, css, LitElement } from 'lit';
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";

export class FphhbuttonfpHhButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 25px;
        color: var(--call-to-action-button, #000);
      }
      a {
        border-radius: 30px;
        border-width: 1px;
        text-decoration: none;
        background-color: red;
        padding: 15px 25px 15px 25px;
        font-size: 20px;
        color: black;
        transition: 0.2s;
      }
      a:hover, a:focus {
        color: white;
        background-color: grey;
        transition: 0.2s;
      }
    `;
  }

  static get properties() {
    return {
      link: { type: String },
      title: { type: String },
      icon: { type: String },
    };
  }

  constructor() {
    super();
    this.link = 'https://www.apple.com/apple-music/';
    this.title = 'CLick for Apple';
    this.icon = false;
  }

  __click(e) {
    if (this.editMode) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }

  render() {
    return html`
      <a href="${this.link}" @click=${this.__click} target="_blank" rel="noopener">
        ${this.icon ? html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>` : ``}
        ${this.title}
        <slot></slot>
      </a>
    `;
  }
}