# START HERE

This is my beginner-friendly Lab 2 project for Server to Server Communication.

## 1. Open the Project

Open the entire project folder in VS Code.

## 2. Open the Terminal

Choose:

```text
Terminal > New Terminal
```

## 3. Install the Packages

Run:

```bash
npm install
```

This installs Express and Axios.

## 4. Start the Server

Run:

```bash
npm start
```

or:

```bash
node server.js
```

## 5. Open the Website

Go to:

```text
http://localhost:3000
```

The page uses my bold hot pink, black, and white color style.

Click **Get Fun Fact**.

## 6. Test the API Route

I can also go directly to:

```text
http://localhost:3000/api/fun-fact
```

I should see JSON similar to:

```json
{
  "fact": "A random fun fact appears here."
}
```

## What My Code Is Doing

My browser asks my Express server for a fun fact.

My Express server uses Axios to ask the Useless Facts API for a random fact.

My server takes only the `text` from that response.

My server sends the text back as:

```json
{
  "fact": "..."
}
```

If something goes wrong, my `catch` block sends a 500 error response.

No API key or `.env` file is required.
