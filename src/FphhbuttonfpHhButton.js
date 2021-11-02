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
        background-color: Green;
        padding: 10px 20px 10px 20px;
        font-size: 20px;
        color: black;
        transition: 0.2s;
      }
      a:hover {
        background-color: white;
        font-weight: bold;
      }
      a:focus {
        color: white;
        background-color: black;
        transition: 0.2s;
      }
      a: active {
        background-color: blue;
        color: red;
      }
    `;
  }

 static get properties() {
    return {
      link: {type: String, reflect: true},
      iconEnable: {type: Boolean, reflect: true},
      icon: {type: String, reflect: true},
      title: {type: String, reflect: true},
      isDisabled: {type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.link = " static get properties() {
    return {
      link: {type: String, reflect: true},
      iconEnable: {type: Boolean, reflect: true},
      icon: {type: String, reflect: true},
      title: {type: String, reflect: true},
      isDisabled: {type: Boolean, reflect: true}
    };
  }

  constructor() {
    super();
    this.link = "https://science.psu.edu/chem";
    this.iconEnable = false;
    this.title = "Click Here";
    this.icon = "shopping-cart";
    this.isDisabled = false;
  }

  

  render() {
    return html`
      <!--html button tag that also is a link and opens website in new tab-->
      
      <button ?disabled=${this.isDisabled} type="button" name="FphhbuttonfpHhButton" class="button" onclick="window.open('${this.link}', '_blank')">
      ${this.iconEnable ?
      html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`: html ``
      }
      ${this.title}
      </button>
      `;
  }
}";
    this.iconEnable = false;
    this.title = "Click Here";
    this.icon = "shopping-cart";
    this.isDisabled = false;
  }

  

  render() {
    return html`
      <!--html button tag that also is a link and opens website in new tab-->
      
      <button ?disabled=${this.isDisabled} type="button" name="shop-button" class="button" onclick="window.open('${this.link}', '_blank')">
      ${this.iconEnable ?
      html`<simple-icon-lite icon="${this.icon}"></simple-icon-lite>`: html ``
      }
      ${this.title}
      </button>
      `;
  }
}
