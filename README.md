# Food Hero - Health Food Delivery Application
# 23 Final Project: MERN Stack Single-Page Application

## Summary
A MERN stack single-page application has been created that works with real-world data to solve a real-world challenge, with a focus on data and user demand.

A simple application has been created allowing the user to view the availbale meals to be delivered to their door. The database communicate with the database to place an order in real time.

This app runs in the browser and features dynamically updated using various technologies as identified below. The application has been deployed using heroku. It is a clean and with a polished UI, responsive user interface that adapts to multiple screen sizes and responds to user interface.

The application is interactive (i.e., accept and respond to user input); includes authentication (JWT); protects sensitive API key information on the server.

## Motivation of Application Development 

CUSTOMER
Allow a customer to order ready made meals online, so that is delivered to them at home. 

ADMIN
To allow customers to place an order, and confirm that the order has been placed, and view all customer orders.



## Links to Deployed Applciations

 - Github page: https://github.com/bmevada/food-hero.git

 - Deployed application on heroku: 
https://git.heroku.com/food-hero.git

## Presentation 

https://docs.google.com/presentation/d/1Qwws93EXnLKJdss1O20T8mqbwv9afr9d2NkigSuI-_4/edit?usp=sharing


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
CUSTOMER INTERFACE
https://drive.google.com/file/d/1_D4gcuXMcZOXNSPrr87Q9T3MKsBAOj_q/view

ADMIN INTERFACE
https://drive.google.com/file/d/1RjZA6dKV6tCXfjMM0AaPrVR93NJnm8KY/view

- **Homepage - Landing page / User presented with menu**

<img width="1160" alt="Screenshot 2023-02-14 at 14 09 28" src="https://user-images.githubusercontent.com/109460560/218629289-ecbb52c7-ba9e-4569-a30b-b7dc6cc33d07.png">


- **Login Screen**
<img width="1093" alt="Screenshot 2023-02-13 at 14 37 23" src="https://user-images.githubusercontent.com/109460560/218629461-43b6f4a8-5c41-4c42-abfa-b1c3b35a4d2c.png">


- **New User Signup**
<img width="1105" alt="Screenshot 2023-02-13 at 14 39 06" src="https://user-images.githubusercontent.com/109460560/218629057-c26cb1b3-0df1-499d-95ad-e9102be7b057.png">



- **Description provided of the menu item selected**

<img width="1420" alt="Product Description" src="https://user-images.githubusercontent.com/109460560/218101382-fbc406de-a81c-4ec6-8da0-78c4b371eb3f.png">

- **Order Cart updated**
<img width="1377" alt="Products added to basket" src="https://user-images.githubusercontent.com/109460560/218101371-75373b9c-f449-4916-8008-15463e42806e.png">


- **Order Summary/Checkout Page**

<img width="1362" alt="Order Review Page" src="https://user-images.githubusercontent.com/109460560/218101224-990633dc-6078-4131-b46d-e75516173c21.png">


- **Stripe Payment**

<img width="1086" alt="Stripe Payment Screen" src="https://user-images.githubusercontent.com/109460560/218101185-28f0ad2c-d4b6-40da-82fe-2dd7ca44b67b.png">

- **Stripe Payment - success**

<img width="1330" alt="Screenshot 2023-02-14 at 14 24 56" src="https://user-images.githubusercontent.com/109460560/218631337-87be2b56-6250-4cbf-a6b2-016f28b72972.png">


- **Email sent to the user - order confirmation**

<img width="761" alt="Email Confirmation" src="https://user-images.githubusercontent.com/109460560/218101109-80f26cb9-0198-446f-ad75-7e42bd963b47.png">

- **MongoDB - Menu Items**
<img width="1280" alt="MongoDB  - menu items" src="https://user-images.githubusercontent.com/109460560/218101958-1af5ae17-ea96-45b1-9372-83f6650d92f2.png">


- **MongoDB - Users Added**

<img width="1278" alt="User and Admin Successfully added" src="https://user-images.githubusercontent.com/109460560/218102005-24bf1742-1adf-4d68-8e42-33efab6534a1.png">

- **MongoDB - Product Items Added by Admin**

<img width="1285" alt="Products added by Admin" src="https://user-images.githubusercontent.com/109460560/218102033-88b6646a-358b-4da6-94a1-cb10643276ad.png">

- **Food Hero - Landing Page for Admin when logged in - options to upload new items and review orders**

<img width="1117" alt="Screenshot 2023-02-13 at 14 58 45" src="https://user-images.githubusercontent.com/109460560/218628668-507ea37e-9fc3-478a-b70d-efa785c88c99.png">

- **Food Hero - Admin - upload new menu item**
<img width="1066" alt="Screenshot 2023-02-13 at 14 59 26" src="https://user-images.githubusercontent.com/109460560/218628893-9e8ceaff-989a-4bff-a1fd-db88b0ad4742.png">

- **Food Hero - Admin - review customer orders**

<img width="1901" alt="Screenshot 2023-02-13 at 14 59 16" src="https://user-images.githubusercontent.com/109460560/218628991-0ddc1ba2-a498-4501-a4e0-3a22fb229606.png">

- **Heroku Deployment**
<img width="1344" alt="Screenshot 2023-02-14 at 14 50 17" src="https://user-images.githubusercontent.com/109460560/218634684-2a895b05-db69-47e0-8837-67205f3cdf29.png">



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

- GraphQL with a Node.js and Express.js server 
- Use MongoDB and the Mongoose ODM for the database - *Use queries and mutations for retrieving, adding, updating, and deleting data*
 - bcrypt - *used to hash passwords*
 - dotenv - *used for environment variables*
 - express-session - *user sessions*
 - nodemailer - *for email notifications*
 - stripe - *for payments*


## Installation Requirements

1. Installation of Microsoft Visual Studio
2. Open up Terminal within Microsoft Visual Studio and type in the following commands firstly for backend and then frontend:
 - npm install
 - npm start


