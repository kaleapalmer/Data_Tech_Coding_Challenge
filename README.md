# Data Tech Coding Challenge

**How to run the challenge code**

1. Clone the repository
2. Make sure you have npm package manager installed
3. Run `npm install`
4. For challenges run the following individually:

`node challenge1.js` 

`node challenge2.js`

`node challenge3.js`

Note:
When each of the challenges is run, a window of Google Chrome will popup. 

##### Write Javascript that completes the tasks described below. Conditions for acceptance are:

* Code must fulfill the task described

* Must be able to run successfully in the console

Please submit your response via a GitHub repo. 

**Challenge 1**

On this [URL](https://www.target.com/p/playstation-174-4-1tb-console/-/A-52416598), write a function that pulls the product price and currency from the DOM, then returns an object with the price as a number, and the currency as a currency code. Ie:

obj = {
  price: 19.99,
  currency: ‘USD’ 
}

**Challenge 2**

On [this page](https://curiositystream.com/), write a function that assigns a click handler to all the ‘Sign Up Now’ buttons on the page. The click handler should trigger an ‘alert’, with text that indicates which button was clicked. Ie:

‘Clicked button 1’, ‘Clicked button 2’, etc.

**Challenge 3**

On [this page](https://www.stadiumgoods.com/), write a function that attaches click listeners to all the buttons in the top menu (Nike, Yeezy, etc.). 

The click handler should first check whether or not a document cookie named ‘browserClick’ has been set on the page. If the cookie has not been set, the function should set the cookie to the text of the button clicked; if it has been set, the function should trigger an alert that displays the cookie value.

