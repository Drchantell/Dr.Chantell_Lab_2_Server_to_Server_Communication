# Lab 2: Server to Server Communication

## The Daily Grind Fun Fact API

In this lab, I created a simple Express server for The Daily Grind coffee shop. My server communicates with an outside public API and gets a random fun fact.

I used **Express** to create my server and **Axios** to make a GET request to the Useless Facts API. My API route is:

```text
/api/fun-fact
```

When this route runs, my Express server contacts:

```text
https://uselessfacts.jsph.pl/api/v2/facts/random
```

The outside API sends back several pieces of information, but my server only sends the fact text to my client:

```json
{
  "fact": "A random fun fact appears here."
}
```

I used `async/await` and a `try...catch` block so my server can handle errors. If the outside request fails, my server sends a `500` status code and this simple JSON response:

```json
{
  "error": "Could not fetch fun fact"
}
```

I also created a simple webpage for The Daily Grind using my bold hot pink, black, and white color style. The page has one button that asks my Express server for a fun fact and displays it on the screen.

## What I Learned

I learned that one server can communicate with another server. Axios makes the request from my Express server to the outside API. I also learned how to take a larger response and return only the information my own client needs.

I practiced using `async/await`, `try...catch`, Express routes, Axios, JSON responses, status codes, and a simple browser `fetch()` request.

## Project Files

```text
Dr.Chantell_Lab_2_Server_to_Server_Communication
│
├── public
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── .gitignore
├── package.json
├── README.md
├── reflection.md
├── START_HERE.md
└── server.js
```

## How I Run My Project

First, I open the folder in VS Code.

Then I open the terminal and run:

```bash
npm install
```

Next, I start my server:

```bash
npm start
```

I can also use:

```bash
node server.js
```

Then I visit:

```text
http://localhost:3000
```

I can click the **Get Fun Fact** button to see a random fact.

I can also test the API route directly by visiting:

```text
http://localhost:3000/api/fun-fact
```

Each time I refresh that route, I should get another random fact.

## API Key

This lab does not need an API key because the Useless Facts API is public. I do not need a `.env` file for this project.
