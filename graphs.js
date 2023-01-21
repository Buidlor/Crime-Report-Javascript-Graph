
(
  
  async function() {
   
    // locate where to place graph1
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

    //take out the table containing only the crime records
    const table = []
    for(let i=0; i<=34; i++){   
      let row =[]
      for( let j=1; j <=11; j++){
        row.push(parseFloat(dataTable[j+i*12].replace(",",".")))
      }
      table.push(row)    
    }  

    //format the data so that it fits chartsJS data-template
    let datasets = [] 
    for(let i=0; i< country.length; i++){
       datasets.push( {label: country[i], data: table[i]})
    }
    
    //insert the data in chart.js template
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

    // locate where to place graph2
    const table2 = document.getElementById("table2")
    const parent2 = table2.parentNode
    const chartDiv2 = document.createElement('canvas')
    chartDiv2.id = 'chart2' 
    parent2.insertBefore(chartDiv2, table2 )
    
    //pull all the relevant data out of table2
    const listItems2= Array.from(table2.getElementsByTagName('td'))
    const dataTable2 = listItems2.map(ele => ele.innerHTML)
    
    //sort data by country and the 2 periods
    const country2 = [...Array(30)].map((ele,i) => ele = dataTable2[i*3])
    country2[7] = "England and Whales(UK)"
    const period1 = [...Array(30)].map((ele,i) => ele = dataTable2[1+i*3])
    const period2 = [...Array(30)].map((ele,i) => ele = dataTable2[2+i*3])
  
     //sort the data to be ready for chart.js 
    let datasets2 = [
      {
        label:"period 1",
        data: period1
      },
      {
        label:"period 2",
        data: period2
      }
    ] 
    
    //insert the data in chart.js template
    new Chart(
      document.getElementById('chart2'),
      {
        type: 'bar',
        data: {
          labels: country2,
          datasets: datasets2
        }
      }
    );


    //locate where to put the canvas with the remote data
    const bodyContent = document.getElementById("bodyContent")
    const canvas = document.createElement('canvas')
    canvas.id = 'remoteData'
    const mw = document.getElementById('mw-content-text')
    bodyContent.insertBefore(canvas,mw)
    
    //fetch data with axios:
    
    console.log("here is a test")
    

   
  })
  
();