# Overview 

 This application is a MGRN stack which is a `React` application in the front side and `Nodejs` which `GrapQL` in the back end.

This application serves as a basic E-commerce store that list products from an admin dashboard. Also, clients can create accounts and make an order on different products available on the site.

# Launch the project

To launch the project, you have to first add a `.env` file in the root directory that will hold the environment variables of the backend. You can find a `.env.example` folder as reference for the environment variables used.

## Using Docker
Note: Docker must be installed on your machine.
To launch the project (frontend and backend), simply run:
```bash
docker-compose -f docker-compose-local.yml up --build --force-recreate
```
## Manually
### backend
After adding a `.env` file, you have to install the NodeJS packages on the backend (the project holds both the frontend under the client folder and the backend in the root directory of the project)

To install the backend Node packages, simply run:
``` bash
npm install
```
To run the backend server, run:
``` bash
npm start
```
To run the backend server in development mode, run:
``` bash
npm start:dev
```
Note that the server will listen on port `5000`
### frontend
Navigate to the client folder by running:
``` bash
cd client
```
Then to install the frontend packages, run:
``` bash
npm install
```
Now you are ready to start the frontend by running:
``` bash
npm start
```
Note that the frontend will be accessible on port `3000`
# Demo
## Frontend
### Login page
![login_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/pc4y3bmyakbfqitwydij.png)
### Signup page
![signup_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/luj6o8yzbfo3bnslqazw.png)
### Profile settings page
![profile_settings](https://amirplatform.s3.eu-central-1.amazonaws.com/project/rrejks0cbvevjft9bl69.png)

### Main site page 
![main_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/tzqukmid7nnbz9eo25kg.png)
### Product page
![product_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/mwsc28t3hdgygtygpvom.png)

### Purchase page
![purchase](https://amirplatform.s3.eu-central-1.amazonaws.com/project/djmdssf9foninfn9opxz.png)

### Order page
![order_page](https://amirplatform.s3.eu-central-1.amazonaws.com/project/xyreucbbr7bw508hntsi.png)

### Admin dashboard
![dashboard](https://amirplatform.s3.eu-central-1.amazonaws.com/project/wmaikhjpdkszg5l5gfoq.png)

## Backend
### GraphQL Queries:

This API exposes these queries (a query in GraphQL means a request that doesn't save or store anything on the database, usually for getting data):
![queries](https://amirplatform.s3.eu-central-1.amazonaws.com/project/1668287611558-Screenshot%202022-11-12%20at%2022.12.32.png)

* `getUsers`: retrieve all users.
* `getProducts`: retrieve all products.
* `getUser`: get a specific user based on an ID.
* `getConnectedUser`: get connected user based on the access token.
* `getProduct`: get a specific product based on an ID
* `getOrder`: get a specific order based on an ID
* `userLogin`: authenticate the user and returns the access token whenever the authentication succeeds.

### GraphQL Mutations:

This API exposes these mutations (a mutation in GraphQL means a request that affect the database, usually for saving, deleting or updating data):

![mutations](https://amirplatform.s3.eu-central-1.amazonaws.com/project/1668287611567-Screenshot%202022-11-12%20at%2022.12.43.png)

* `createUser`: create a user account
* `updateUser`: update user information
* `updateUserPassword`: update user password
* `orderProduct`: create an order for a specific product
* `updateOrder`: update the order status (an order has multiple status) (accessible by the admin only)
* `createProduct`: create a product (accessible by the admin only)




