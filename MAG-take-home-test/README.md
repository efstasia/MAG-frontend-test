# MAG Interactive take home test web frontend

## Hi there! 👋

Great to see that you are interested in MAG Interactive.

Your task is to refactor the `price-calculator.js` from being a simple function writing to the console to a React
component displaying the values in a nice way.

_Note:_ The price calculator is just a test and does in no way represent the code you would have to work with 😉

## Price calculator

This application calculates price based on different rules and values. The calculate uses:

- User type
    - There are two different user types:
        - Company, a company user
        - Normal, all users that are not a company user
- Product type
    - There are two product types:
        - New, a new product in the product line
        - Old, an existing product in the product line
- Price
- Published date

### Formula

The formula for the price calculation is:
Product price + product type price – rebate

### Additional prices

The additional product type prices are:

- New, +25 SEK
- Old, +35 SEK

### Rebate rules

- If the product is new and is published today you will receive 10 SEK in rebate
- If you are a company user you will receive 5 SEK in rebate

## Structure and setup

The code to be refactored (and its tests) is located in the `/refactor` folder.

To run the old code just open the .html-files in a browser.

### React

I have set up [Vite.js](https://vitejs.dev/) with TypeScript and React to save you some time, feel free to use what you
like though if you don't want to use Vite.

To use Vite:

`$ npm install`
`$ npm run dev`

This will start a webserver at http://localhost:3000/ which you can use for development.

## Expectations

    - A small React app with forms for the different inputs and a button to calculate the price
    - Should be updated to ES6 standard
    - Unit tests should still work but can be rewritten and expanded upon

### Bonus points

    - TypeScript
    - Module/e2e test
    - A pretty UI

## Turn in

Please create a GitHub repo and push your refactored code to it.

When you feel you are happy, send the link to the repo back to MAG.

Good luck!
