## WORK ON

- Create responsive pagination using CSS to load 5 post-cards, then add a button to load more
- Add description on hover over the card
- Section to indicate when documents are loading
- [Radix UI Toast](https://www.radix-ui.com/primitives/docs/components/toast)
- Wrapper from '@app/estarlincito/components/wrapper'?
- 404 UI
- Suspense fallback

ISSUES

- Fix dark mode to auto-detect system settings.
- Fix or check if the post files match the category and subcategory folder.

# --------------Workin on----------------

Source: https://youtu.be/N_sUsq_y10U

Here are the simplified steps to implement authentication with email and password using JWT:

## 1. Create a Database for Users

• Define a table or collection with at least the following fields:
• id
• email
• password (hashed)

## 2. Create a Registration Endpoint

File: app/api/auth/register/route.ts

1. Accept email and password.
2. Hash the password using bcrypt before storing it.
3. Save the user in the database.

## 3. Create a Login Endpoint

File: app/api/auth/login/route.ts

1. Accept email and password.
2. Look up the user in the database.
3. Compare the provided password with the stored hash (bcrypt.compare).
4. If valid, generate a JWT and send it in a secure cookie (httpOnly).

## 4. Middleware to Protect Routes

File: middleware.ts

1. Get the token from the cookies.
2. Verify the JWT using your secret key.
3. If valid, allow the request to proceed.
4. If not, return a 401 Unauthorized error.

## 5. Create an Endpoint for Protected Routes

File: app/api/protected/route.ts

1. Ensure the middleware allows the request.
2. Use the token data to customize the response.

## 6. Create a Logout Endpoint

File: app/api/auth/logout/route.ts

1. Clear the auth_token cookie in the response (set('auth_token', '', { maxAge: 0 })).

## 7. Use Cookies on the Frontend

1.  When logging in, cookies are automatically handled with credentials: 'include'.
2.  Ensure cookies are sent with all protected requests.
3.
