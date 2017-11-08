import {
  DiagramEngine,
  DefaultNodeFactory,
  DefaultLinkFactory,
  DiagramModel,
  DefaultNodeModel,
  LinkModel,
  DefaultPortModel,
  DiagramWidget
} from 'storm-react-diagrams';
import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from "redux";
import * as actions from '../../../actions/index';

@connect((state) => {
    return {
      selectedNodes: state.diagramReducer.selectedNodes
    }
  }, (dispatch) => {
    return {
      actions: bindActionCreators(actions, dispatch)
    }
  }
)
export default class WorkflowPlace  extends Component {
  constructor(props) {
    super(props);

    let model = this.createContent();
    this.addListeners(model);
    this.engine = this.createEngine(model);
  }

  render() {
    return (
      <DiagramWidget diagramEngine={this.engine}/>
    );
  }

  createContent(){
    let node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
    let port1 = node1.addPort(new DefaultPortModel(false, "out"));
    node1.x = 100;
    node1.y = 100;

    let node2 = new DefaultNodeModel("Node 2", "rgb(192,255,0)");
    let port2 = node2.addPort(new DefaultPortModel(true, "in"));
    node2.x = 400;
    node2.y = 100;

    let link1 = new LinkModel();
    link1.setSourcePort(port1);
    link1.setTargetPort(port2);

    let model = new DiagramModel();
    model.addNode(node1);
    model.addNode(node2);
    model.addLink(link1);

    return model;
  }

  addListeners(model){
    let doChange = list => this.props.actions.changeSelectedNodes(list);

    let NodeListeners = {
      entityRemoved: (node) => {
        console.log('Removed', node.id);
        if(this.props.selectedNodes[node.id]){
          let list = this.props.selectedNodes;
          if(list[node.id] !== undefined){
            delete list[node.id];
            doChange([...list]);
          }
        }
      },
      selectionChanged: (node, isSelected) => {
        let list = this.props.selectedNodes;
        if(isSelected && list[node.id] === undefined){
          list = {...list, [node.id]: node};
          doChange(list);

        }
        if(!isSelected && list[node.id] !== undefined){
          delete list[node.id];
          doChange([...list]);
        }
      }
    };

    let nodes = model.getNodes();
    for (let id in nodes) {
      nodes[id].addListener(NodeListeners);
    }

  }

  createEngine(model){
    let engine = new DiagramEngine();
    engine.registerNodeFactory(new DefaultNodeFactory());
    engine.registerLinkFactory(new DefaultLinkFactory());
    engine.setDiagramModel(model);
    return engine;
  }
}
