const { GME, MSFT, DIS, BNTX } = mockData;

const stocks = [GME, MSFT, DIS, BNTX];

console.log(stocks)




async function main() {

    const response = await fetch ("https://api.twelvedata.com/api_usage?apikey=5aa70df3474f411cbe998e4e5a92af11");
        const charts = await response.json();
       return charts;
 
}

async function renderCharts(chart) {
    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
}
    


main()