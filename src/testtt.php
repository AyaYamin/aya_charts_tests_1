<!DOCTYPE HTML>
<html>
<head>
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
<script type="text/javascript">

window.onload = function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
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
		data: [              
		{
			
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "column",
			dataPoints: [
				{ label: "less than 25",  y: <?php require('less.php');/*  echo $_GET['less']*/  ?>  },
				{ label: "equal 25",  y: <?php  require('equal.php') /* echo $_GET['equal']*/ ?>  },
				{ label: "greater than 25",  y: <?php  require('greater.php') /*echo $_GET['greater']*/ ?>  },

			]
		}
		]
	});
	chart.render();
}
</script>
</head>
<body>
<div id="chartContainer" style="height: 300px; width: 100%;"></div>
</body>
</html>