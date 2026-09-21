# Reflection

## 1. Why was it important to re-format the data from the Useless Facts API before sending it to my own client?

It was important to re-format the data because my client only needs the actual fun fact. The outside API sends several pieces of information, such as an ID, source, language, permalink, and the fact text. My application does not need all of that information, so I only return the `text` value as `fact`. This makes my API response smaller, cleaner, and easier to understand. It also gives me control over what information my own application sends to the client.

## 2. Why is it better to send a generic error message instead of the actual Axios error object?

It is better to send a generic error message because the full Axios error object can contain technical information that the user does not need to see. Some error details could also expose information about how the server works. By sending `{ "error": "Could not fetch fun fact" }`, I give the client a clear message while keeping the internal error details on the server where I can use them for debugging.

## 3. How could I get a fact in a different language if the API supported it?

If the API supported different languages with a query parameter, I could add the language to the request URL. For example, I could make a request like `https://example.com/fact?language=de` to request a German fact. I could also allow the client to send a language choice to my Express route and then pass that value to the external API.
