import React from "react";

import { accountService } from "@/_services";
import { Grid, Segment, Container } from "semantic-ui-react";
import "./dashboard.css";

function Dashboard() {
  //const user = accountService.userValue;

  return (
    <Container fluid style={{ height: "100%" }}>
      <Grid className="Dashboard page-grid">
        <Grid.Row stretched>
          <Grid.Column width={4}>
            <Segment>
              <p>Static graph 1</p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment>
              <p>Static graph 2</p>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>
              <p>Static graph 3</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export { Dashboard };
