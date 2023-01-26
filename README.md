# Vercel site:
https://lost-in-translation-nu.vercel.app/

# Info:
lost-in-translation is a simple react app, that lets you log-in and translate text input into sign-language.
Data generated in the app is stored and acquired through the use of an API.
The app also features a profile page, where the user's translation history can be viewed as well as cleared.

Through the login page, the user must create or log-in by typing a new or previously used username.
Both the translation and profile page are restricted by an authentication HOC, until the user is, and remains, logged in.
When the user log-in, their information is stored in sessionStorage for later use, such as identification and authentication.

The translation page converts a string input consisting of upper- and lowercase letters and spaces,
into a list of sign-language images consistent with the input.
This is done with the "useForm" register requirements and handleSubmit event handler.

The profile page fetches the users previous translations for viewing.
Previous translations and can be cleared from both the page and API, with the use of a button.
Asynchronous fetch requests are used for acquiring and updating the translations in the API.

When logged-in the user can log-out again with the use of a button in the navigation.
Logging out clears the session from storage and redirects automatically back to login page.

# Component-tree diagram:
<img src="/lost-in-translation component-tree.png" alt="Alt text" title="Optional title">
