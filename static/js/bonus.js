// Setting up the URL
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Event listener for dropdown change
d3.select("#selDataset").on("change", function () {
    let selectedSample = d3.select(this).property("value");
    createMetadata(selectedSample);
    gauge(selectedSample); // Call your gauge function here
});

// Function to populate metadata
function createMetadata(sampleID) {
    d3.json(url).then(function (data){
        console.log(data);

        // Setting variables
        let metaData = data.metadata; 
        let result_metaData = metaData.filter(sampleObject => sampleObject.id == sampleID)[0];
        console.log(result_metaData);

        // Clear out previous metadata
        d3.select("#sample-metadata").html("");

        // Add dictionary information containing the metadata
        Object.entries(result_metaData).forEach(([k,v]) => {

        // Place metadata into correct location
            d3.select("#sample-metadata").append("h5").text(`${k}: ${v}`);
        });
    });
}

// Create Gauge Chart 
function gauge(selectedValue){
    // Fetch the JSON data and console log it
    d3.json(url).then((data) => {
        console.log(`Data: ${data}`);

        // An array of metadata objects
        let metadata = data.metadata;

        // Filter data where id = selected value after converting their types 
        // (bc meta.id is in integer format and selectValue from is in string format)
        let filteredData = metadata.filter((meta) => meta.id == selectedValue);

        // Assign the first object to obj variable
        let obj = filteredData[0];

        // Get gauge value
        let gaugevalue = obj.wfreq;

        console.log(gaugevalue);

        // Trace for the data for the gauge chart
        let trace = [{
            domain: { x: [0, 1], y: [0, 1] },
            value: gaugevalue,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week", font: {size: 15}},
            type: "indicator", 
            mode: "gauge+number",
            gauge: {
                axis: {range: [null, 9]}, 
                bar: {color: "rgb(68,166,198)"},
                steps: [
                    { range: [0, 1], color: "rgb(233,245,248)" },
                    { range: [1, 2], color: "rgb(218,237,244)" },
                    { range: [2, 3], color: "rgb(203,230,239)" },
                    { range: [3, 4], color: "rgb(188,223,235)" },
                    { range: [4, 5], color: "rgb(173,216,230)" },
                    { range: [5, 6], color: "rgb(158,209,225)" },
                    { range: [6, 7], color: "rgb(143,202,221)" },
                    { range: [7, 8], color: "rgb(128,195,216)" },
                    { range: [8, 9], color: "rgb(113,187,212)" },
                ]
            }
        }];

        var layoutGauge = { width: 600, height: 400 };
        Plotly.newPlot("gauge", trace, layoutGauge);
    });
}

// Initial initialization
init();
