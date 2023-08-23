// Setting up the URL
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetching Data 
d3.json(url).then(function(data) {
    console.log(data);

    // Calling the initialization function
    init();
});

// Initialization function 
function init() {
    // Fetching Data
    d3.json(url).then(function(data) {
        console.log(data);

        // Adding Dropdowns
        let dropDown = d3.select("#selDataset"); 
        let sampleName = data.names;

        // For loop to run through all sample names
        for (let i = 0; i < sampleName.length; i++) {
            dropDown.append("option").text(sampleName[i])
                .property("value", sampleName[i]);
        }

        // Calling functions to create chart and metadata
        createChart(sampleName[0]);
        createMetadata(sampleName[0]);
    });
}

// Creating function to change IDs
function createChart(sampleID) {
    d3.json(url).then(function(data) {
        console.log(data);

        // Setting variables
        let samples = data.samples;

        // Adding dropdown
        let result = samples.filter(sampleObject => sampleObject.id == sampleID)[0];
        console.log(result);

        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let otu_sampleValues = result.sample_values; 

        // Horizontal Graph
        var data = [{
            x: otu_sampleValues.slice(0, 10).reverse(),
            y: otu_ids.slice(0, 10).map(otu_id => 'OTU ' + otu_id).reverse(),
            type: "bar",
            orientation: "h",
            text: otu_labels.slice(0, 10).reverse(),
            marker: {
                color: 'rgb(116, 227, 179)', 
            }
        }];

        // Plotting & layout
        var layout = {
            title: "Top 10 OTU IDs", 
            xaxis: { title: 'Sample Values' }, 
            yaxis: { title: 'OTU IDs' }, 
        };
        Plotly.newPlot("bar", data, layout);

        // Bubble Chart
        var bubbleData = [{
            x: otu_ids,
            y: otu_sampleValues,
            mode: "markers",
            marker: {
                color: otu_sampleValues, 
                colorscale: 'Viridis',
                size: otu_sampleValues,
                text: otu_labels,
            }
        }];

        // Plotting & Layout
        var layoutBubble = { xaxis: { title: 'OTU ID' } }; 
        Plotly.newPlot("bubble", bubbleData, layoutBubble);
    });
}

// Event listener for dropdown change
d3.select("#selDataset").on("change", function () {
    let selectedSample = d3.select(this).property("value");
    createChart(selectedSample);
    createMetadata(selectedSample);
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

// Initial initialization
init();
