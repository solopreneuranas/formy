import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function TypeWriter(element, textArray, period) {
  this.el = element;
  this.textArray = textArray;
  this.period = parseInt(period, 10) || 2000;
  this.text = "";
  this.loopNum = 0;
  this.isDeleting = false;
  this.tick();
}

TypeWriter.prototype.tick = function () {
  // Get the current text to display
  const currentText = this.textArray[this.loopNum % this.textArray.length];

  // Update the text based on whether we are deleting or typing
  if (this.isDeleting) {
      this.text = currentText.substring(0, this.text.length - 1);
  } else {
      this.text = currentText.substring(0, this.text.length + 1);
  }

  // Set the text of the element
  this.el.innerHTML = '<span class="wrap">' + this.text + '</span>';

  // Calculate the next delay based on whether we are deleting or typing
  let delay = 200 - 100 * Math.random();
  if (this.isDeleting) {
      delay /= 2;
  }

  // Check for conditions to switch between typing and deleting
  if (!this.isDeleting && this.text === currentText) {
      this.isDeleting = true;
      delay = this.period;
  } else if (this.isDeleting && this.text === "") {
      this.isDeleting = false;
      this.loopNum++;
      delay = 500;
  }

  // Schedule the next tick
  const self = this;
  setTimeout(function () {
      self.tick();
  }, delay);
};

window.onload = function () {
  // Find all elements with the "typewrite" class
  const typewriteElements = document.getElementsByClassName("typewrite");

  for (let i = 0; i < typewriteElements.length; i++) {
      const typeData = typewriteElements[i].getAttribute("data-type");
      const typePeriod = typewriteElements[i].getAttribute("data-period");

      // Create a TypeWriter instance for each element
      if (typeData) {
          new TypeWriter(typewriteElements[i], JSON.parse(typeData), typePeriod);
      }
  }

  // Add CSS style for the text animation
  const style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black }";
  document.body.appendChild(style);
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
