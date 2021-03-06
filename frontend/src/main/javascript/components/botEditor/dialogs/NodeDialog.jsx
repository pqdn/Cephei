import React, { Component } from 'react';
import { connect } from "react-redux";
import {Col, Panel, Row} from "react-bootstrap";

@connect((state) => {
    return {
      selectedNodes: state.diagramReducer.selectedNodes
    }
  }
)
export default class NodeDialog  extends Component {
  constructor(props) {
    super(props);
    this.state = {selectNode: null};
  }

  componentWillReceiveProps(nextProps){
    let nodes = nextProps.selectedNodes;
    let list = [];
    for (let id in nodes) {
      list = [...list, nodes[id]];
    }

    this.setState({...this.state, selectNode: list.length > 0 ? list[0] : null})
  }

  render() {
    let node = this.state.selectNode;

    if(node === null){
      return <Panel>{"omg dmg"}</Panel>
    }

    return (
      <Panel header="title" footer="footer">
        <Row><Col xs={12}>
          Название: {node.name}
        </Col></Row>
        <Row><Col xs={12}>
          <input type="text" defaultValue={node.name} onChange={e => node.name = e.target.value}/>
        </Col></Row>
        <Row><Col xs={12}>
          Цвет: {node.color}
        </Col></Row>
        <Row><Col xs={12}>
          <input type="text" defaultValue={node.color}  onChange={e => node.color = e.target.value}/>
        </Col></Row>
      </Panel>
    );
  }

}
