# Food Hero - Health Food Delivery Application
# 23 Final Project: MERN Stack Single-Page Application

## Summary
A MERN stack single-page application has been created that works with real-world data to solve a real-world challenge, with a focus on data and user demand.

A simple application has been created allowing the user to view the availbale meals to be delivered to their door. The database communicate with the database to place an order in real time.

This app runs in the browser and features dynamically updated using various technologies as identified below. The application has been deployed using heroku. It is a clean and with a polished UI, responsive user interface that adapts to multiple screen sizes and responds to user interface.

The application is interactive (i.e., accept and respond to user input); includes authentication (JWT); protects sensitive API key information on the server.


https://donate.stripe.com/8wM16Wc7vaJF5Fe9AA

pk key: pk_test_51MMhWsACbJPZAlrvPya09OyIXDvfDoXUry6hRfA7hL2IvIsqkcxidcdULpB3i51SyKhdtTyAmMUrHnXRh4TfANYo00taOsI5e5

sk: sk_test_51MMhWsACbJPZAlrvwHc6cPQPBTw8Qx1dtAaFgsm6sR5X34dMVezGzoSwXe7D6bhLnBsCTPjz6ijPGeYbUU21nNZp00vvd27sMV


## Nodemailer
password: Bootcamp@1
email: food.hero.mevada

### CSS Styling

Instead of using a CSS library like Bootstrap, consider one of the following suggestions:

* Look into the concept of CSS-in-JS, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way. Some popular libraries include [styled-components](https://styled-components.com/) and [Emotion](https://emotion.sh/docs/introduction).

* Try using a component library, such as [Semantic UI](https://semantic-ui.com/), [Chakra UI](https://chakra-ui.com/), or [Ant Design](https://ant.design/).

* Create all the CSS for your application just using CSS.

## Motivation of Application Development 
Allow a customer to order ready made meals online, so that is delivered to them at home. 

Admin - to allow customers to place an order and confirm that the order has been placed.

## Links to Deployed Applciations
```md
Github page: https://github.com/bmevada/food-hero.git

Deployed application on heroku: 
https://git.heroku.com/food-hero.git
```
## User Story
```md
AS A Customer 
I WANT to order my meals online
AND make a payment for these

AS AN Admin
I WANT to review orders placed by customers
And fulfil dispatching them ready to be delivered
```

## Acceptance Criteria

```md
GIVEN a customer is presented with the Food Hero homepage
The customer is able to able to view the the information about Food Hero
THEN customer is also able to view the Food Hero menu items with price before signing in
If the customer does not have a sign in ID
WHEN the customer clicks on "Sign up" 
THEN the customer is redirected to the sign up page
THEN the customer is able to sign up using their name, email and password
If the customer already has an accocunt with Food Hero
WHEN the customer clicks on "Login" 
THEN the customer is redirected to the login page
THEN the customer logs in using email address and password
WHEN the customer clicks on the menu item
THEN the menu item appears with a description of the cafe item
WHEN the customer clicks on add to cart, the item is added to the cart
THEN the customer the redirected to the homepage to view addtional menu items
THEN the customer is able to add more items to the cart
WHEN the customer has completed their order
THEN the customer clicks on the cart to view the cart items
THEN the customer is displayed with the cart items in their order
WHEN the customer clicks on "Checkout", the order is placed 
THEN the customer is informed that the order is confirmed with payment amount 
THEN the customer is presented with a payment gateway to make a payment
WHEN the customer makes a payment, an email is sent to the customer informing them that their order has been placed.

GIVEN admin is presented with the Food Hero homepage
The admin is able to able to view the the information about Food Hero
If the new admin member does not have a sign in ID
WHEN the admin clicks on "Sign up" 
THEN the admin is redirected to the sign up page
THEN the admin is able to sign up using their name, email and password
If the admin already has an accocunt with Food Hero
WHEN the admin clicks on "Login" 
THEN the admin is redirected to the login page
THEN the admin logs in using email address and password
Admin logs in to view orders and complete fulfilment of the orders
```

## Mock Up

The following vidoes shows an example of the functionality of the application:
  - **Demo Video**


- **Homepage - User presented with menu**

[Uploading Main page.png…]()

- **Login Screen**


- **Login Signup**


- **User presented with menu**


- **Description provided of the menu item selected**

<img width="1420" alt="Product Description" src="https://user-images.githubusercontent.com/109460560/218101382-fbc406de-a81c-4ec6-8da0-78c4b371eb3f.png">

- **Order Cart updated**
<img width="1377" alt="Products added to basket" src="https://user-images.githubusercontent.com/109460560/218101371-75373b9c-f449-4916-8008-15463e42806e.png">


- **Order Summary**

<img width="1362" alt="Order Review Page" src="https://user-images.githubusercontent.com/109460560/218101224-990633dc-6078-4131-b46d-e75516173c21.png">

- **Checkout Page**

<img width="980" alt="Checkout Page" src="https://user-images.githubusercontent.com/109460560/218101339-f3ea4581-ba5e-47af-8fbc-975217379cc7.png">


- **Stripe Payment**

<img width="1086" alt="Stripe Payment Screen" src="https://user-images.githubusercontent.com/109460560/218101185-28f0ad2c-d4b6-40da-82fe-2dd7ca44b67b.png">

- **Email sent to the user - order confirmation*

<img width="761" alt="Email Confirmation" src="https://user-images.githubusercontent.com/109460560/218101109-80f26cb9-0198-446f-ad75-7e42bd963b47.png">

- **MongoDB - Menu Items**
<img width="1280" alt="MongoDB  - menu items" src="https://user-images.githubusercontent.com/109460560/218101958-1af5ae17-ea96-45b1-9372-83f6650d92f2.png">


- **MongoDB - Users Added**

<img width="1278" alt="User and Admin Successfully added" src="https://user-images.githubusercontent.com/109460560/218102005-24bf1742-1adf-4d68-8e42-33efab6534a1.png">

- **MongoDB - Product Items Added by Admin**

<img width="1285" alt="Products added by Admin" src="https://user-images.githubusercontent.com/109460560/218102033-88b6646a-358b-4da6-94a1-cb10643276ad.png">

## Development Technolgies Used
### Front End
 - Use React for the front end.
 - JavaScript - *to allow users to interact with web pages*
 - jQuery - *used to minimise the the common tasks of JS*
 - css - *used for the style and layout of the page*
 - styled-components - *instead of bootstrap, concept of CSS-in-JS, which abstracts CSS to the component level, using JavaScript to describe styles in a declarative and maintainable way*
  - semantic-ui -*component library*
 - ReactJs & Redux Toolkit 


### Back End

* Use GraphQL with a Node.js and Express.js server.
* Use MongoDB and the Mongoose ODM for the database.
* Use queries and mutations for retrieving, adding, updating, and deleting data.

 - bcrypt - *used to hash passwords*
 - dotenv - *used for environment variables*
 - express-session - *user sessions*
 - express-session-sequelize - *user sessions*
 - express - *for javascript with node*
 - express-handlebars - *used for views*
 - mysql2 - *used to connect to a MySQL database for Models, and create an Express.js API for the Controllers*
 - sequelize - *used to connect to a MySQL database for Models, and create an Express.js API for the Controllers*
 - nodemailer - *for email notifications*



## Installation Requirements

1. Installation of Microsoft Visual Studio
2. Open up Terminal within Microsoft Visual Studio and type in the following commands:
 - npm run seeds
 - npm i
 - npm start

 Front End: npm run dev
 Back End: npm run dev

## Presentation 

https://docs.google.com/presentation/d/1Qwws93EXnLKJdss1O20T8mqbwv9afr9d2NkigSuI-_4/edit?usp=sharing

Final steps to complete:

 Use the [Guide to Deploy with Heroku and MongoDB Atlas](https://coding-boot-camp.github.io/full-stack/mongodb/deploy-with-heroku-and-mongodb-atlas) on The Full-Stack Blog if you need a reminder on how to deploy to Heroku.


To do - deploy using mongo; check stripe and nodemailer.
Need to seed the data??
Login via admin - add uploads
check login page and run process for user
as per above for admin
