import React, { Component } from 'react';
import {Col, Panel, Row} from "react-bootstrap";
import NodeDialog from "./dialogs/NodeDialog.jsx";
import WorkflowPlace from "./diagramEdit/WorkflowPlace.jsx";

export default ()=>{
    return (
        <Panel>
            <Row>
                <Col xs={2}>
                    <NodeDialog/>
                </Col>
                <Col xs={10}>
                    <WorkflowPlace/>
                </Col>
            </Row>
        </Panel>
    );
}
