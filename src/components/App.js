import React, { Component } from 'react'
import {data} from "../storage"
import {GLOBAL_HEIGHT, GLOBAL_WIDTH, GRAPH_EXTEND_WIDTH, GRAPH_EXTEND_HEIGHT} from "../constants/common";
import Graph from "./Graph"

export default class App extends Component {
  render() {
      const width = GLOBAL_WIDTH + GRAPH_EXTEND_WIDTH,
            height = GLOBAL_HEIGHT + GRAPH_EXTEND_HEIGHT;

    return <div className='row'>
              <Graph width={width} height={height} data={data}/>
           </div>
  }
}



