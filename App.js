import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./src/redux/reducers";
import Route from './src/navigation/main/index';
import { StripeProvider } from "@stripe/stripe-react-native";

import {STRIPE_KEY} from "./src/constants"

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <StripeProvider publishableKey={STRIPE_KEY}>
        <Route />
      </StripeProvider>
    </Provider>
  );
}
