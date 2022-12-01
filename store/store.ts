import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cart/cartSlice";
import { productApi } from "./product/product.api";
import counterReducer from "./slices/counterSlice";
import todosReducer from "./slices/todoSlice";

const reducer = combineReducers({
    // put all your reducers here!
    counter: counterReducer,
    todos: todosReducer,
    [productApi.reducerPath]: productApi.reducer,
    cart: cartReducer
});

const store = configureStore({
    reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(productApi.middleware)
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


