import React, { Component } from 'react';

import CanvasJSReact from './canvasjs-2.3.1/canvasjs.react';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function getData(url) {
	return fetch(url, {
		method: "GET",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: { "Content-Type": "application/json", },
		redirect: "follow",
		referrer: "no-referrer",
	}).then(response => response.json());
}



export default class Aya extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
		//	less: '',
		//	greater: '',
			eq: '',
			label1:"equal 25",
			label2:"less 25",
			label3:"grater 25",
		}
		//this.less=this.less.bind(this);
		this.equal = this.equal.bind(this);
		this.greater = this.greater.bind(this);
	}

	componentDidMount() {
		var th = this;
		getData(`http://localhost/aya_test/test/src/a.php`)
			.then(function (event) {
				th.setState({ data: event });
			})
	}

	/*less=(e)=>{
		this.state.data.map((item, i) =>
		   <div>
			   {/*e.target.value=item.less*/
	/*   {item.less}
		 {console.log(item.less)}
	 </div>
)
	 
}*/


	/*	equal=(e)=>{
			this.state.data.map((item, i) =>
				 <div>
					 {/*e.target.value=item.equal*/
	/*	   {item.equal}
			 {this.state.eq=item.equal}
			 {console.log(item.equal)}
		 </div>
	)
		 
}*/


	equal = () => {
			return (
				<div>
           {
						this.state.data.map((item, i) =>
						    <div key={i}>    
											{item.equal}
								</div>
						) 
					 }
				</div>
			);
	}

	componentWillUnmount() {
		//this.serverRequest.abort();
}

 



	greater = () => {
		return(
			<div>
           {
						 this.state.data.map((item, i) =>
						     <div key={i}>
					        	 {item.greater}
										 {console.log(item.greater)}
								 </div>
					      )
					 }
			</div>
		);
	}

//	greater = () => {
//		return 3;
//	}


/*	dataPoints = (e) => {
		return (
			<div>
				{this.state.data.map((item, i) =>
					<div key={i}>
						         {this.state.label1}{item.equal}  ,
                    
					</div>
				)
				} </div>
		);
	}*/

	render() {

		const options = {
			title: {
				text: "Grades Of Final Exam - 9A"
			},
			axisX: {
				title: "Categories",
				valueFormatString: "Categories",
			},
			axisY: {
				title: "Number Of Students",
				includeZero: false
			},


			data: [{
				type: "column",
				dataPoints: [

							{label:this.state.label2,},
							{label:this.state.label1,y:this.equal()},
							{
								label:this.state.label3,
								y:
                    <div>
                      {
												this.state.data.map((item,i)=>//{
                             <div  key={i}> 
                                    {item.greater}
														 </div>
											                                //	}
												)
											}
										</div>	   
						     
								}
				],
	         	}]
}
		return (
			<div>
				<CanvasJSChart
					options={options}
				/>
			</div>
		);
	}
}




