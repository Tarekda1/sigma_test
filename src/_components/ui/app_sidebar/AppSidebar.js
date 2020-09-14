import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Icon, Menu, Sidebar, Image } from "semantic-ui-react";
import { accountService } from "@/_services";
import "./AppSidebar.css";
import userActions from "@/_actions/userActions";
function AppSidebar(props) {
  const language = "en";
  const history = useHistory();
  const user = useSelector((state) => state.user.userInfo);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  //console.log(token);

  return token ? (
    <Sidebar.Pushable>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        direction={language === "en" ? "left" : "right"}
        vertical
        visible
        width="wide"
        className={"sidebar-wrapper"}
      >
        <Menu.Item as="a" onClick={() => history.push("/")}>
          Dashboard Sigma
        </Menu.Item>
        <Menu.Item
          as="a"
          onClick={() => {
            accountService.logout(() => {
              dispatch(userActions.performLogout());
              history.push("/accounts/login");
            });
          }}
        >
          <Icon name="log out" />
          Logout
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher
        style={
          language === "en" ? { marginLeft: "100px" } : { marginRight: "100px" }
        }
      >
        {props.children}
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  ) : (
    <div>{props.children}</div>
  );
}

export { AppSidebar };
