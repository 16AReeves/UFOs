# UFOs
---
## Analysis on UFO Sighting Data
---
### Background
---
#### This analysis was for Dana, a data journalist, who wants to write about her hometown McMinnville, Oregon. McMinnville is known for its UFO sightings. This analysis helped Dana put together a webpage with UFO sightings around the United States. The webpage outlines the sightings by date, city, state, country, shape, duration, and comments along with organizing the data into a table. The webpage also has filter criteria, and data can be filtered by date, city, state, country, and shape. This analysis was done for Module 11 of the UNC Data Analysis Bootcamp. 
---
### Webpage Design and Use
---
#### The HTML webpage has a site header with a picture in the background of space. Under the header is Dana's article about UFO sightings along with a summary of the analysis performed. The webpage was designed with dark mode in mind for easy viewing. This is what the top of the webpage looks like:
![image](https://user-images.githubusercontent.com/98365963/169714540-9cfca73b-25b8-4662-9b40-af6f441a391e.png)
---
#### The next part of the webpage is the table of data along with the filter boxes to the left, as seen below:
![image](https://user-images.githubusercontent.com/98365963/169714595-cbfe6566-d4c5-473e-8b20-ab15d93ca398.png)
#### The filters can be used to filter the data by date, city, state, country, and shape of the UFO. Any and/or all of the boxes can be populated to filter the data. The webpage waits for the user to press enter before filtering the data after inputting search criteria. As an example, filling out all of the boxes with 1/1/2010, benton, ar, us, and circle gives the following response:
![image](https://user-images.githubusercontent.com/98365963/169714679-f53edc3a-2a58-4689-94e4-048b291da566.png)
#### Also, only one of the boxes needs to be filled out to return the filtered data. As an example, let's look at UFOs just triangle in shape:
![image](https://user-images.githubusercontent.com/98365963/169714725-adf1daae-2227-4752-8af4-82091fe4b2e2.png)
#### Many of the filter boxes can be left blank, and all of the data found with the search criteria inputed will be returned. As another example, let's look at UFOs only in California:
![image](https://user-images.githubusercontent.com/98365963/169714815-6229996e-7fea-4f45-baa9-c88b220a1df9.png)
---
### Summary
---
#### One drawback of this webpage is the html and JavaScript code is not outfitted to handle user input errors such as spelling mistakes and capitalization. For further development of this webpage addressing the possible input errors such as spelling mistakes and capitalization would be a must. This could be executed by using Javascripts toLowerCase() method added into the code. The spelling mistakes could possibly be fixed using regular expressions. Another further development idea is to expand the data by using an API call or web scraping to search the internet for more sightings in other countries. This data set is limited to only the US, broading the scope of the data could lead to more interesting finds. Another development idea would be to add code which counts how many sightings are returned after filtering. This could give the user feedback on just how many sightings they're without counting each individual row themselves.  
