import React,{Component} from 'react';

import Chartist from 'chartist';

import Reflux from 'react-reflux';

import refluxConnect from 'reflux-connect';

class DataStore extends React.Component{
    constructor(props){
        super(props);
        this.data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
              [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
            ]
          };
          this.updateData=this.updateData.bind(this);
    }
    updateData(){
      this.data.series = [
        [2, 9, 6, 3, 4, 8, 7, 2, 6, 1, 8, 10],
        [4, 2, 5, 3, 9, 9, 2, 4, 5, 6, 6, 7]
      ];
      this.trigger();
    }
  }

 class ReactChart extends React.Component{
    constructor(props){
      super(props);
      this.state={

      };
      this. updateChart=this. updateChart.bind(this);
    }
    componentDidMount() {
      this.updateChart(this.props.data);
    }
    componentWillReceiveProps(nextProps) {
      this.updateChart(nextProps.data);
    }
    updateChart(data) {
      return new Chartist.Bar('.chart', data);
    }
    render(){
      return (
        <div>
          <div className="chart"></div>
          <button onClick={DataStore.updateData}>Change data</button>
        </div>
      );
    }
  };
  

 
   

   export default class aya extends React.Component{
  //var App = React.createClass({
      constructor(props){
          super(props);
          this.state={
            mixins: [refluxConnect(DataStore)],       
          }
      }
    render() {
      return (
        <ReactChart  /*data={DataStore.data}*/ />
      );
    }
  }
 