<<<<<<< HEAD
# ProductStore
React Redux simple app
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



fully functional Product Store with the following features:

Product listing with filter options.
Add to Cart and Remove from Cart functionality.
Display total price, item count, and a cart summary.
Persist cart state.


1. Product List
Display a grid/list of products with the following information:
Product image, name, description, price, and an "Add to Cart" button.
Include filtering options:
Category: Dropdown or checkboxes to filter by categories (e.g., Electronics, Clothing).
Price Range: Slider or input fields for filtering by price.
2. Cart Functionality
Add to Cart:
Clicking the "Add to Cart" button should add the selected product to the cart.
Update the Redux state to include product details and quantity.
Remove from Cart:
Provide a "Remove" button for each item in the cart.
Update the Redux state to remove the item.
Quantity Adjustment:
Allow users to increase or decrease the quantity of items in the cart.
Update the Redux state accordingly.
3. Cart Summary
Display a cart summary with:
Total number of items in the cart.
Total price (update dynamically based on cart state).
A "Proceed to Checkout" button (non-functional for this task).
4. State Management
Create a productStoreSlice for managing the product list and cart state.
Initial State: Include a list of products and an empty cart array.
Reducers:
addToCart: Add a product to the cart.
removeFromCart: Remove a product from the cart.
updateQuantity: Update the quantity of a product in the cart.
filterProducts: Filter products by category or price range.
Async Thunks: Fetch product data from an API or mock JSON file.
5. Integration
Use useSelector and useDispatch hooks to interact with Redux state.
Ensure cart updates are reflected dynamically in the UI.
6. API Integration
Fetch the product list from a mock API or JSON file using createAsyncThunk.
Handle loading, success, and error states.
7. Styling
Use Tailwind CSS or your preferred framework to design a clean, responsive layout.
Ensure the product grid and cart summary look good on both desktop and mobile.
8. Testing
Test the following:
Product filtering by category and price.
Adding and removing products from the cart.
Adjusting item quantities and validating total price updates.
Edge cases like empty cart or invalid filter inputs.









### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 6565831 (Initial commit)



