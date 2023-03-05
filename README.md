# Podcaster

Podcaster is a simple application to listen the top 100 podcasts in the itunes store.

Developed with React, Typescript, TailwindCSS and Vite.

## How to run the application locally

1. Install the dependencies
   ```bash
    $ npm install
   ```
2. Run the server in the mode wanted
   1. Run the server in development mode with:
    ```bash
    $ npm run dev
    ```
   2. Run the server in production mode with:
    ```bash
    $ npm run build
    $ npm run preview
    ```
3. Open the browser

## General information

In order to get the podcasts information, I used the itunes api, and the url to get the top 100 podcasts is: https://itunes.apple.com/us/rss/toppodcasts/limit=100/json
Also, I used the following url to obtain the podcast information: https://itunes.apple.com/lookup?id={podcastId}&media=podcast&entity=podcastEpisode&limit=1000
