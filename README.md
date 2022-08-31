# always-shopping-backend
> Backend for [always-shopping](https://github.com/SanketDhabarde/always-shopping)

## 👩‍💻 Tech stack
- ExpressJs
- mongoDB
- mongoose
- NodeJs

## 🛣 Routes
### Public routes
- [Auth](https://github.com/SanketDhabarde/always-shopping-backend/blob/develop/routes/auth.router.js)
  - [POST] `/api/auth/signup`
  - [POST] `/api/auth/login`

- [Products](https://github.com/SanketDhabarde/always-shopping-backend/blob/develop/routes/product.router.js)
  - [GET] `/api/products`
  - [POST] `/api/products`
  - [GET] `/api/products/:productId`


### Private routes
- [Wishlist](https://github.com/SanketDhabarde/always-shopping-backend/blob/develop/routes/wishlist.router.js)
  - [GET]  `/api/user/wishlist`
  - [POST]  `/api/user/wishlist`
  - [DELETE]  `/api/user/wishlist/:productId`

- [Cart](https://github.com/SanketDhabarde/always-shopping-backend/blob/develop/routes/cart.router.js)
  - [GET]  `/api/user/cart`
  - [POST]  `/api/user/cart`
  - [POST]  `/api/user/cart/:productId`
  - [DELETE]  `/api/user/cart/:productId`


## 👨‍💻 Connect with me 

<a href="https://twitter.com/SanketDhabarde1"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white"/></a>
<a href="https://www.linkedin.com/in/sanket-dhabarde-91b028166/"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/></a>
