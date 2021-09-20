import { html, css, LitElement } from 'lit';

export class FphhbuttonfpHhButton extends LitElement {
  static get styles() {
    return css`
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