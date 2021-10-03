// importing elements for CTA Button
import { html, css, LitElement } from 'lit';
import '@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js';
import '@lrnwebcomponents/simple-icon/lib/simple-icons.js';

export class FphhbuttonfpHhButton extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 20px;
        color: var(--call-to-action-button, #000);
      }
      a {
        border-radius: 25px;
        border-width: 2px;
        text-decoration: white underline;
        background-color: red;
        padding: 10px 20px 10px 20px;
        font-size: 20px;
        color: black;
        transition: 0.2s;
      }
      a:hover{ 
        background-color: white;
        font-weight: bold;
      }
      a:focus {
        color: white;
        background-color: black;
        transition: 0.2s;
      }  
    `;
  }

  static get properties() {
    return {
      link: { type: String },
      title: { type: String },
      icon: { type: String },
      disabled: { type: Boolean, reflect: true },
    };
  }

  constructor() {
    super();
    this.link = 'https://www.apple.com/apple-music/';
    this.title = 'CLick for Apple';
    this.icon = 'save';
    this.disabled = false;
    this.addEventListener = 'CTAButton';
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
      <a
        href="${this.link}"
        @click=${this.__click}
        target="_blank"
        rel="noopener"
      >
        ${this.icon
          ? html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`
          : ``}
        ${this.title}
        <slot></slot>
      </a>
    `;
  }
}