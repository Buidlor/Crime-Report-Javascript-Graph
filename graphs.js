(async function() {

    // location where to place the graph1
    const table1 = document.getElementById("table1")
    const parent1 = table1.parentNode
    const chartDiv1 = document.createElement('canvas')
    chartDiv1.id = 'chart1' 
    parent1.insertBefore(chartDiv1, table1 )
    
    //pull the data out of the table and insert in array of objects
    listItems= Array.from(table1.getElementsByTagName('td'))
    yearItems= Array.from(table1.getElementsByTagName('th'))
    const dataTable = listItems.map(ele => ele.innerHTML)


    const table = []
    for(let i=0; i<=34; i++){   
        table.push(
            [
                parseFloat(dataTable[1+i*12].replace(",",".")), 
                parseFloat(dataTable[2+i*12].replace(",",".")), 
                parseFloat(dataTable[3+i*12].replace(",",".")), 
                parseFloat(dataTable[4+i*12].replace(",",".")), 
                parseFloat(dataTable[5+i*12].replace(",",".")), 
                parseFloat(dataTable[6+i*12].replace(",",".")), 
                parseFloat(dataTable[7+i*12].replace(",",".")), 
                parseFloat(dataTable[8+i*12].replace(",",".")), 
                parseFloat(dataTable[9+i*12].replace(",",".")), 
                parseFloat(dataTable[10+i*12].replace(",",".")), 
                parseFloat(dataTable[11+i*12].replace(",",".")),  
            ]
        )    
    }  

    const country = [...Array(35)].map((ele,i) => ele = dataTable[i*12])
    console.log(country)

    const years = [...Array(11)].map((ele,i) => ele=2002+i)
    console.log(years)

    let datasets = [] 
    for(let i=0; i< country.length; i++){
       datasets.push( {label: country[i], data: table[i]})
    }
 
    new Chart(
      document.getElementById('chart1'),
      {
        type: 'line',
        data: {
          labels: years.map(ele => ele),
          datasets: datasets
        }
      }
    );

  })
  
();