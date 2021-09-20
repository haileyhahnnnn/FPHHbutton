import { html, css, LitElement } from 'lit';

export class FphhbuttonfpHhButton extends LitElement {
  static get styles() {
    return css`
<<<<<<< HEAD
    <!DOCTYPE html>
    <html>
    <head>
      <title>HTML Button Generator</title>
      <style>
        button {
          color: #ffffff;
          background-color: #2d63c8;
          font-size: 20px;
          border: 1px solid #2d63c8;
          padding: 15px 50px;
          cursor: pointer
        }
        button:hover {
          color: #2d63c8;
          background-color: #ffffff;
        }
      </style>
    </head>
    <body>
      <button type="button" name="FPHHbutton" autofocus>FPHHbutton</button>
    </body>
    </html>
    `;
  }


  render() {
    return html`
    <!DOCTYPE html>
<html>
<head>
	<title>HTML Button Generator</title>
	<style>
		button {
			color: #ffffff;
			background-color: #2d63c8;
			font-size: 20px;
			border: 1px solid #2d63c8;
			padding: 15px 50px;
			cursor: pointer
		}
		button:hover {
			color: #2d63c8;
			background-color: #ffffff;
		}
	</style>
</head>
<body>
	<button type="button" name="FPHHbutton" autofocus>FPHHbutton</button>
</body>
</html>
    `;
  }
}
=======
      :host {
        display: block;
        padding: 25px;
        color: var(--fphhbuttonfp-hh-button-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.title} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
  }
}
>>>>>>> ef07439e4dd2b38c5bee087a1b5f3be8d4619600
