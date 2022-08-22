# GitHub TopicDetails Explorer

## Assignment:

Your task is to build a React web application that displays all
the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "
react", using the GitHub GraphQL API.

The application should display how
many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each
topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so
forth. There should also be Search capability to search/query on any term or topic. You should implement best practices
with the UI.

To interact with the Github GraphQL API you'll need to have

*

a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)

* You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

* Leave any technical notes on any libraries or tools you chose to use, the more detail the better.
    * create-react-app
        * Useful boilerplate for getting a React application up and running.
    * Express
        * I added an Express layer to allow me not to expose the API key on the client side.
        * Nodemon and Concurrently are used to help run the Express server
    * Axios
        * Common HTTP request tool that is clean to work with and provides some improvements over fetch such as:
            * Greater browser support, manual timeouts, request cancellation/cleanup, built-in JSON transformation,
              interceptors
    * Typescript
        * Types help catch errors early and are very helpful for large codebases/large teams/consistent code/scaling
    * Prettier
        * Helps keep a consistent code style
    * Toastify
        * Nice and easy Toast/notify solution
    * Material UI core
        * Useful starting place for UI components
    * Material UI core/styles
        * My preferred way to apply styles. Keeps styling decisions in the same file as they are used without going
          inline

### How to run app & test

From the root directory, run

    npm install
    npm run dev

localhost:3000 should open in your environment. You can click on Related Topics to explore, or submit your own Search.

To run the test suite, run:

    npm test

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics

* Code Structuring:
    * May want to give topic as an object to TopicDetails

* Refactoring:
    * Return the data in a cleaner format so you're not parsing response.data.data.topic
    * Remove express layer if not worried about API keys being accessible
    * Place graphql query in separate file
    * can cancel axios requests if many are performed in a row

* Additional Features:
    * Breadcrumbs/Search History
