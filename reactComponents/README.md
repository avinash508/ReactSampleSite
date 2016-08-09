# UI Business Components
This application demonstrates how to build an application based on a component atchitecture. Based on the wireframe give, all the necessary UI has been built using a component architecture. Since there was no library of choice mentioned, React was used as the prima choice to build the application and React-Router for client side routing mechanism.

The demo consists of three different endpoints, the first/index is the signin page, where the `SigninLogin` component would be rendered on the very first visit. Then we have the products page, where a bunch of fake product information would be displayed (again due to time constraints, maximum importance was given to the component architecture rather than application styles).

In the products section we have two different views, one to display all the products in a list format, and one to display individual product item when clicked. An ajax request simulation can be found when one visits the products list page as well as the product item page, which can showcase the how network requests happen in real time applications.

## Instructions
First, cd into the project directory and install necessary dependencies.
```bash
cd "UI Business Components" && npm install
```

To run the project, type `npm start` command, and a local development environment fires up at `http://localhost:3000`

**NOTE:** All source files can be found in the src directory.