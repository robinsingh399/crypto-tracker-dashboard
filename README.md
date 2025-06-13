# Follow Below steps to setup crypto-tracker-dashboard

1. Open Visual Studio Code
2. Open crypto-tracker-dashboard project
3. Open Terminal in visual studio code.
4. Run :- `npm install`
5. Run :- `npm run start`

New tab will appear in your browser on your localHost domain. 

## Features of this project 

### `On Home page , you can see the list of all the crypto coins with card View dashboard`

### `You will also get to see the SearchCryptocurrencies option as a search Bar where you can search your crypto coin . Enabled debouncing there to limit the api calls on the server . `

### `It also consists one SortBy option to sort your coins on the basis of PriceChange/MarketCap/24h_Change`

### `It also have a toggle button in the Header for changing the theme of this web app . It support light and dark theme `

### `On click of Each card view , you will go to /coin/:id page , where you will see the detail info of the crypto coin .`

### `On details page , you will see the Description , important metrics of coin as card Buttons . Also you will get to see the priceChart of last 7 days performance `

## Bonus Features

### `Enabled star icon in each card for adding them as favourites . I have used local storage there to keep the states even on re-renders`

### `Added pagination too . Only 12 items are visible for each page . You can customize it accordingly too`

### As coingecko API doesn't support websocket , so I could not do that implementation . But for better side , we can get the fresh data from api on 10 seconds interval using setInterval() .

Please reach out to me if you face any doubts . EmailId :- robinsingh399@gmail.com

