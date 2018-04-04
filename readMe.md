# TAXY

### What is TAXY

TAXY is an app targeted at the self-employed or anyone who needs to submit a tax-return an aims to take advantage of the new Open Banking regulations. These essentially require that banks will provide a customer (or a 3rd Party authorised by the customer) with all their bank account details/transactions etc in JSON format. A user of the TAXY app can aggregate all their bank transaction data in one place and determine which transactions are relevant for their tax return and which are not. Once this is done, they can filter by tax year and will have a summary of what they will need to put on that tax years return.

### How to use

Taxy is more of a proof of concept as I am not able to obtain sufficient authoristation to upload users bank account details even if I could get permission from them individual. Therefore, although a user can sign up they will not be able to import their own data.

In order to check out the functionality of the app, please make a request in your browser to https://taxytaxy.herokuapp.com/api/users/ and pick email address any of the users listed (these are all fictional) and login with the password, which is 'password' for all users.

<img width="660" alt="screen shot 2018-03-15 at 15 54 20" src="https://user-images.githubusercontent.com/25264577/37902615-dd974930-30ec-11e8-91ae-65624389c047.png">

### Creating TAXY

The main technologies used for TAXY were:

Node
Express
MongoDB
Javascript
ES6
Reactjs
Random User API
Google Heat Maps API
Git
GitHub


Balsamiq was used for wireframes, with the main focus on the user show page.

<img width="1440" alt="screen shot 2018-02-27 at 16 00 30" src="https://user-images.githubusercontent.com/25264577/37903069-87b340bc-30ee-11e8-8d62-bed38f415a17.png">

### Challenges faced

As I knew it would not be possible to get the required authorisation and permissions to check if Taxy would work with real users data, I needed a way of generating a large number of users and transactions that would allow me to test it. To do this I used the Random User API to generate with 100 users for each of which I could then create a number of transactions.

It was more difficult to generate the transactions as I wanted to ensure that each individual transactions and all of a users transactions when grouped together would appear genuine, without having to generate each transaction individually. I created an array of category objects in CategoryArray.js, within which contained an array of possible counterparties (e.g. British Gas and BT within Utilities) along information to dictate if the transaction would be a debit/credit and its size. With this, I was able to randomly create 100 transactions for each user using my custom functions in seeds.js, each with a random category and counterparty and a random size within a set range and occurring on a random date from April 2016 to the current time.


### What extensions to TAXY could there be?

Heatmaps for users just of their own transactions

Allowing for users to link in their own transaction data.

Allowing for users to upload images/receipts

Allow for users to edit the transactions to provide more information on them, for example build custom categories.
