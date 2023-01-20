(async function() {

    // location where to place the graph1
    const table1 = document.getElementById("table1")
    const parent1 = table1.parentNode
    const chartDiv1 = document.createElement('canvas')
    chartDiv1.id = 'chart1' 
    parent1.insertBefore(chartDiv1, table1 )
    
    //pull the data out of the table and insert in array of objects
    const listItems= Array.from(table1.getElementsByTagName('td'))
    const dataTable = listItems.map(ele => ele.innerHTML)

    //take out years and countries
    const country = [...Array(35)].map((ele,i) => ele = dataTable[i*12])
    const years = [...Array(11)].map((ele,i) => ele=2002+i)

    const table = []
    for(let i=0; i<=34; i++){   
      let row =[]
      for( let j=1; j <=11; j++){
        row.push(parseFloat(dataTable[j+i*12].replace(",",".")))
      }
      table.push(row)    
    }  

    let datasets = [] 
    for(let i=0; i< country.length; i++){
       datasets.push( {label: country[i], data: table[i]})
    }
 
    new Chart(
      document.getElementById('chart1'),
      {
        type: 'line',
        data: {
          labels: years,
          datasets: datasets
        }
      }
    );

  })
  
();