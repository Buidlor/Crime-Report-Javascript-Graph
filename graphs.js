// location where to place the graph1
const table1 = document.getElementById("table1")
const parent1 = table1.parentNode
const chartDiv1 = document.createElement('div')
chartDiv1.id = 'chart1' 
parent1.insertBefore(chartDiv1, table1 )
document.getElementById('chart1').innerHTML = "<h1>koekoe</h1>"

const sort = []


// get chart data 1

const getChartData1 = () => {  
    
    listItems= Array.from(table1.getElementsByTagName('td'))
    data = listItems.map(ele => ele.innerHTML)
    for(let i=0; i<=36; i++){
      
            
        sort.push({
            country: data[i], 
            2002: data[i],
            2003: data[i], 
            2004: data[i], 
            2005: data[i],
            2006: data[i],
            2007: data[i],
            2008: data[i],
            2009: data[i],
            2010: data[i],
            2011: data[i],
            2012: data[i]
        })
        
      

    }
    console.log(sort)
    
}
getChartData1()