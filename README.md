

# Basic Auth with Express & Mongoose

GOAL: allow users to create an account


## Step 0: User Model


## Step 1: display a form to create an account

- [x] Route (GET `/signup`) (inside `auth.routes.js`)
- [x] Create a view (`auth/signup.hbs`)
- [x] We've also updated `layout.hbs` and `style.css`


## Step 2: process the form and create an account

- [x] Route (POST `/signup`)
- [x] Generate the hash/digest
- [x] Query DB (`User.create()`)
- [x] Redirect to `/userProfile` (we created the view `users/user-profile.hbs` and a route GET `/userProfile` )


