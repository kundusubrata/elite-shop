
## 🛍️ MERN Stack E-commerce Platform with Redux Toolkit
Step into a world of seamless online shopping with our cutting-edge e-commerce application. Crafted using the powerful MERN stack, enhanced by Redux Toolkit and Bootstrap 5, it brings a host of features to your fingertips. From robust user authentication for hassle-free login, registration, and password management, to personalized user profiles with avatar uploads and order history tracking, it's all here. Admins get full control with a comprehensive dashboard for product management and order tracking. With secure payment gateways like Stripe and COD, and a responsive design ensuring a flawless experience on any device, shopping has never been smoother. 🚀
## Screenshots

<img src="https://res.cloudinary.com/dhxywqjru/image/upload/v1712125279/Elite-shop/Project-img/WhatsApp_Image_2024-04-03_at_11.29.27_AM_xajjcd.jpg" width="800">

<img src="https://res.cloudinary.com/dhxywqjru/image/upload/v1712125699/Elite-shop/Project-img/2_jcwhhr.jpg" width="800">

<img src="https://res.cloudinary.com/dhxywqjru/image/upload/v1712125699/Elite-shop/Project-img/3_gzr6jy.jpg" width="800">

<img src="https://res.cloudinary.com/dhxywqjru/image/upload/v1712125702/Elite-shop/Project-img/4_bdd8uq.jpg" width="800">

<img src="https://res.cloudinary.com/dhxywqjru/image/upload/v1712125704/Elite-shop/Project-img/5_wsb6hl.jpg" width="800">

<img src="https://res.cloudinary.com/dhxywqjru/image/upload/v1712125706/Elite-shop/Project-img/6_lop0la.jpg" width="800">



## Project Configuration Guide
## Cloudinary Configuration

Cloudinary is used for image management and hosting. Follow these steps to configure Cloudinary for your project.

1. Create a [Cloudinary account](https://cloudinary.com).
2. Create a new Cloudinary project.
3. Go to the dashboard and copy the cloud name, API key, and API secret.

## Stripe Configuration

Stripe is used for payment processing. Follow these steps to configure Stripe for your project.

1. Create a [Stripe account](https://stripe.com).
2. Go to the dashboard and copy the publishable key and secret key.

## Mailtrap.io Configuration

Mailtrap.io is used for testing email functionality. Follow these steps to configure Mailtrap.io for your project:

1. Create an account on [Mailtrap.io](https://mailtrap.io).
2. Once logged in, go to your inbox settings.
3. Copy the SMTP username and password.
4. Go to your `config.env` file and save `SMTP_USER` and `SMTP_PASS`.


## MongoDB Configuration

MongoDB is used for storing data. Follow these steps to configure MongoDB for your project.

1. Create a [MongoDB account](https://www.mongodb.com).
2. Create a new project and cluster.
3. Go to the dashboard and copy the connection string.
4. Go to your `.env` file and save `DB_LINK`.

## Installation
1. Create a any **folder**:

2. Clone the repository:
```bash
  git clone https://github.com/kundusubrata/Elite-shop.git
```

3. Install dependencies:
```bash
For Backend = npm install

For Frontend = cd frorntend
npm install
cd ..
```
4. Create a `config.env` file within the `config` folder located in the **backend** directory:

```bash
PORT=4001

NODE_ENV = DEVELOPMENT
NODE_ENV=PRODUCTION

FRONTEND_URL=http://localhost:3000

DB_LOCAL_URI=mongodb://localhost:27017/Elite-shop
DB_URI=mongodb://<username>:<password>@ac-d27qgie-shard-00-00.ul2twgh.mongodb.net:27017,ac-d27qgie-shard-00-01.ul2twgh.mongodb.net:27017,ac-d27qgie-shard-00-02.ul2twgh.mongodb.net:27017/<database-name>?ssl=true&replicaSet=atlas-ga9iuz-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Elite-shop

STRIPE_SECRET_KEY=<stripe-secret-key>
STRIPE_WEBHOOK_SECRET=<stripe-webhook-secret>

JWT_SECRET=IURDFNKNVTIJFKIDJHKUWFHVGFRYIHVGJYHUFS88HDVXUOUHFSODHUSCHXOIJXILNIJDXOINJ
JWT_EXPIRES_TIME=7d
COOKIE_EXPIRES_TIME=7

SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_EMAIL=<smtp-email>
SMTP_PASSWORD=<smtp-password>
SMTP_FROM_NAME=noreply@eliteshop.com
SMTP_FROM_EMAIL=Elite-shop

CLOUDINARY_CLOUD_NAME=<cloudinary-name>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret-key>
```
5. Run the app:

```bash
For backend = npm run dev
For Product = npm run seeder 
For frontend = cd frontend npm start
```
## Features

### Normal User Mode {#normal-user-mode}
| Feature               | Description                                          |
|-----------------------|------------------------------------------------------|
| [User Authentication](#user-authentication) | OAuth with JWT for secure user login and registration |
| [Password Reset](#password-reset)           | Reset password via email with reset link              |
| [Profile Management](#profile-management)   | Update user profile details (email, name, password, picture) |
| [Shopping Cart](#shopping-cart)             | Add items to the cart and apply coupon codes          |
| [Product Review](#product-review)           | Logged-in users can review products                  |
| [Shipping Options](#shipping-options)       | Specify shipping area for product delivery           |
| [Order Tracking](#order-tracking)           | Track the status of orders                            |
| [Payment Gateway](#payment-gateway)         | Secure payment processing via Stripe                  |
| [Contact Form](#contact-form)               | Contact form for user assistance                      |
| [Saved Addresses](#saved-addresses)         | Save multiple shipping addresses                      |
| [Advanced Search](#advanced-search)         | Filter products by price range, category, and rating  |
| [State Management](#state-management)       | Global state management with Redux Toolkit                     |

### Admin Mode {#admin-mode}

| Feature                     | Description                                                   |
|-----------------------------|---------------------------------------------------------------|
| [Admin Dashboard](#admin-dashboard)         | Access to an admin-only dashboard                               |
| [User Management](#user-management)         | View and manage users (delete, promote to admin)                |
| [Product Management](#product-management)   | Edit and create products, manage stock levels                   |
| [Review Management](#review-management)     | View and delete product reviews                                 |
| [Order Management](#order-management)       | View all orders, and can manage them                            |
| [Role-Based Permissions](#role-based-permissions) | Restrict admin features based on roles                         |
| [Order Approval Workflow](#order-approval-workflow) | Set up approval process for Update status of order           |



## Hosting Your Complete App
This guide will walk you through the process of hosting your complete MERN stack app on cyclic configuration.

## Step 1: Prepare Your Project

1. Organize your project with a root directory that contains both `frontend` and `backend` folders.
2. Ensure both `backend` and `frontend` directories have all necessary code and dependencies.

* Note: Using this configuration will require you to run `npm run build` in the frontend directory before deploying.

+ Ensure your folder structure looks like this:
```bash
root
├── backend
├── frontend
│   ├── node_modules
│   ├── package.json
│   ├── build
│   └── ...
├── node_modules
├── package.json
└── ...
```

## Step 2: Push Code to GitHub

- Push all your code to GitHub, ensuring to include a `.gitignore` file to ignore the `node_modules` folder and `config.env` file.

## Step 3: Create a Cyclic Account
- Sign up for a Cyclic account if you haven't already.
- Connect your GitHub account to Cyclic.

## Step 4: Create a Cyclic Project
- Create a new project in Cyclic.
- Select your GitHub repository (e.g., Elite-shop).

## Step 5: Configure Project Settings
- Configure the project settings:
  - Keep the settings as they are.
  - Add all your `config.env` variables in the Environment Variables section.

## Step 6: Deploy Your App
- Click on "Deploy" and wait for a few minutes for the deployment process to complete.

## Step 7: Visit Your App
- Once the deployment is successful, click on "Visit" to access your live app.

## Step 8: Enjoy Your App
- Congratulations! Your app is now live and accessible.


## Authors

- Github click [here](https://github.com/kundusubrata), Twitter click [here](https://twitter.com/Subrata01366829), Linkedin click [here](www.linkedin.com/in/subrata-kundu-084424211).
