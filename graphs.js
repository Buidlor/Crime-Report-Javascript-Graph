

(async function() {

    // location where to place the graph1
    const table1 = document.getElementById("table1")
    const parent1 = table1.parentNode
    const chartDiv1 = document.createElement('canvas')
    chartDiv1.id = 'chart1' 
    parent1.insertBefore(chartDiv1, table1 )
    
    //pull the data out of the table and insert in array of objects
    listItems= Array.from(table1.getElementsByTagName('td'))
    const dataTable = listItems.map(ele => ele.innerHTML)

    //const data = []
    // for(let i=0; i<=34; i++){   
    //     data.push({
    //         country: dataTable[i*12], 
    //         2002: dataTable[1+i*12],
    //         2003: dataTable[2+i*12], 
    //         2004: dataTable[3+i*12], 
    //         2005: dataTable[4+i*12],
    //         2006: dataTable[5+i*12],
    //         2007: dataTable[6+i*12],
    //         2008: dataTable[7+i*12],
    //         2009: dataTable[8+i*12],
    //         2010: dataTable[9+i*12],
    //         2011: dataTable[10+i*12],
    //         2012: dataTable[11+i*12]
    //     })    
    // }  
    // console.log(data)

    const data = [
      { year: 2010, count: 10, count2 :15 },
      { year: 2011, count: 20, count2 :3 },
      { year: 2012, count: 15, count2 :8 },
      { year: 2013, count: 25, count2 :19 },
      { year: 2014, count: 22, count2 :16 },
      { year: 2015, count: 30, count2 :11 },
      { year: 2016, count: 28, count2 :5 },
    ];
  
    new Chart(
      document.getElementById('chart1'),
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
            },
            {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
            }
            

          ]
        }
      }
    );

  })
  
();