import React, {Component} from "react";
import {Grid, Row, Col, Thumbnail} from "react-bootstrap";
import {connect} from "react-redux";

@connect((state) => {
    return {

    }
  }
)

export default class IconsWorkArea extends Component {
  render() {
    return (
      <div>
        <Grid bsClass="text-center">
          <Row>
            <Col xs={3}/>
            <Col xs={6}>
              <Thumbnail src="./img/Bender-PNG-Pic.png">{"С блекжетом и шлюхами"}</Thumbnail>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}