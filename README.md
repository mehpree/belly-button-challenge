# belly-button-challenge

### Background
In this assignment, you will build an interactive dashboard to explore the Belly Button Biodiversity datasetLinks to an external site., which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

### Before You Begin
- Create a new repository for this project called belly-button-challenge. Do not add this Challenge to an existing repository.

- Clone the new repository to your computer.

- Inside your local git repository, copy the files from in the StarterCode folder contained within the Module 14 Challenge zip file. i.e. index.html, samples.json, and the static folder.

### NOTE: You will not be required to access the samples.json file locally, but it is provided for reference.

- Push the above changes to GitHub.

- Deploy the new repository to GitHub Pages.

### Files
- Download the following files to help you get started:

- Module 14 Challenge filesLinks to an external site.

### Instructions
Complete the following steps:

1. Use the D3 library to read in samples.json from the URL [https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json).

2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

  - Use sample_values as the values for the bar chart.

  - Use otu_ids as the labels for the bar chart.

  - Use otu_labels as the hovertext for the chart.

![image](https://github.com/mehpree/belly-button-challenge/assets/131678606/3f5feaed-1f6d-4161-b7df-b541444cd313)

3. Create a bubble chart that displays each sample.

 - Use otu_ids for the x values.

 - Use sample_values for the y values.

 - Use sample_values for the marker size.

 - Use otu_ids for the marker colors.

 - Use otu_labels for the text values.

![image](https://github.com/mehpree/belly-button-challenge/assets/131678606/f4581704-4b06-4fa1-8db8-5d5b351995ee)

4. Display the sample metadata, i.e., an individual's demographic information.

5. Display each key-value pair from the metadata JSON object somewhere on the page.

![image](https://github.com/mehpree/belly-button-challenge/assets/131678606/081da2a7-71c0-4d83-9ad4-9f6bf3ac8618)

6. Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows:
![image](https://github.com/mehpree/belly-button-challenge/assets/131678606/625ff2bd-648b-4702-bf94-ea0a4e2107a4)

7. Deploy your app to a free static page hosting service, such as GitHub Pages. Submit the links to your deployment and your GitHub repo. Ensure that your repository has regular commits and a thorough README.md file

### Advanced Challenge Assignment (Optional with no extra points earning)
The following task is advanced and therefore optional.

 - Adapt the Gauge Chart from [https://plot.ly/javascript/gauge-charts/Links to an external site](https://plot.ly/javascript/gauge-charts/Links to an external site). to plot the weekly washing frequency of the individual.

 - You will need to modify the example gauge code to account for values ranging from 0 through 9.

 - Update the chart whenever a new sample is selected.

![image](https://github.com/mehpree/belly-button-challenge/assets/131678606/15a6c377-4c76-4649-b927-4f3d1d2dbf32)

#### Hints
Use console.log inside of your JavaScript code to see what your data looks like at each step.

Refer to the [Plotly.js](https://plotly.com/javascript/) when building the plots.

### References
Hulcr, J. et al. (2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)
