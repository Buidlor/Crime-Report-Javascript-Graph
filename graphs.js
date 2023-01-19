console.log("hellooooo")

//const parentTable1 = document.getElementById("mw-content-text")
const table1 = document.getElementById("table1")
const parent1 = table1.parentNode
const chartDiv1 = document.createElement('div')
chartDiv1.id = 'chart1' 


parent1.insertBefore(chartDiv1, table1 )
document.getElementById('chart1').innerHTML = "<h1>CHART comes here</h1>"