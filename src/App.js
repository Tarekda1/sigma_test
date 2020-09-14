import React from "react";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import "./App.less";
import { PrivateRoute } from "@/_components";
import { AppSidebar } from "@/_components/ui/app_sidebar/AppSidebar";
import { Dashboard } from "@/_containers/dashboard";
import { Account } from "@/_containers/account";
import { Provider } from "react-redux";
import { store } from "./store";
import { TopNavigation } from "@/_components";

function App({ trans }) {
  return (
    <Provider store={store}>
      <Router>
        <AppSidebar>
          <TopNavigation i18n={trans} />
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/account">
              <Account />
            </Route>
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </AppSidebar>
      </Router>
    </Provider>
  );
}

export { App };
