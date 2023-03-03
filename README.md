# **Group 10 - Weather App**

## **Executive Summary** 

Our website wishes to provide its users various information regarding the weather of the current day and every other day throughout the week. This information includes the predicting weather forecast such as rain and snow and the predicted high and low temperature of those days within a given city. While there is a myriad of other competitors such as weather.com and accuweather.com’s weather apps. Our website will be open source for anyone to access the source code and do with it however they please. Our product will also contain zero advertisements as this project is non-profit. With the help of Weatherwidget.io this website would not be possible.

## **Competitive analysis** 

Analyzing competitive products available today. Present competitors’ features vs. 

your planned ones. First, create a table with key features of competitors vs. yours. 

Only at a very high level, 5-6 entries max. After the table, you must summarize what are the planned advantages or competitive relationship to what is already available.

|**Companies**|**Our product**|**weather.com**|**accuweather.com**|**forecast.weather.gov**|**wunderground.com**|
| :-: | :-: | :-: | :-: | :-: | :-: |
|Open source?|✓|X|X|X|X|
|Ads?|X|✓|✓|X|✓|
|Simplicity?|✓ Only weather info, no nonsense|X News articles all over the page|X News articles all over the page|X A lot of charts not for the common user|✓ On the simpler side|
|Customizable?|✓ Even dark / light mode togglable|X Stagnant web page|X Stagnant web page|X Stagnant web page|X Stagnant web page|
|Responsiveness?|✓ Blazingly fast|X Can be slow due to bloat|X Can be slow due to bloat|X Can be slow due to bloat|X Can be slow due to bloat|


Our product will be open source, this means that we will strive to allow as much customizability and transparency to the public as possible. For many this means respecting their privacy and holding their trust. Since this product is free and open source, we will not add ads to the webpage in order to keep it unobtrusive and true to its use case. The page will be as simple and clean as possible so that wherever you are navigating you are navigating towards more weather information, there will be no random news articles sometimes disguised as ads. We will add a feature to toggle between background colors on the webpage so that you may use it as a home page and customize it to your heart’s content, this will include a dark mode and light mode. Our webpage will be faster than our competitors because it will be simple and to the point, no extra code bloat and motives to get the user to do something other than use the tool as needed.

## **Data Definition**



**Key Terms**

**Development Environment –** In regard to developing this in the backend, using technologies such as node.js to work on mockups of this project. This also applies to frontend development. 

**Website / Site** -** https://mendoska.github.io/cen4010\_sp23\_g10/

**Server –** Currently being hosted on GitHub.

**Styling –** A big part of this app’s appeal is being able to customize background colors, themes, based on user’s preference, styling will be used to refer this.

**Weather Widget** – Open-source weather widget that will be the main way to extract information for our website.



**Type of users:**

- Everyday person who wants to check weather in their area.
- Organizers of outdoor activities (sporting, concerts, community)
- Pilots
- Operators of sea vehicles
- Programmers / Developers due to open-source nature



**Actors**

In regard to the users, *all users can be seen as actors* in this system of our website. When using the system, the person, or actor in this case, will access our website and depending on location will be given information about the weather. To access this website, the person(actor) will use their computer (actor) and communicate with the database system (actor) of the server (actor) this site is located on.

## **Overview, scenarios and use cases**

This section describes the project overview (in much more details) and likelihood usage scenarios of your product from end users’ perspectives. Focus only on main 2 use  cases. Simple text  format  is  OK  and preferable  –  tell  us  a  story  about  who  and how is the application used? Focus on WHAT users do, their skill level, not on HOW the system is implemented.  You can expand use cases provided in high level document in future milestones.

The likely usage scenarios for our product are simple at face value because of the manufactured simplicity of the product yet gets more complex the more the end user is considered. One instance is a man who spends his weekends fishing. He relies on the simplicity and reliability of our product in order to check the weather conditions for his hobby seamlessly. He has a laptop and checks the weather on it first thing in the morning to see if the week’s predictions were wrong (rain all week). He sees that the percentage chance of rain is slightly reduced and becomes hopeful. He leaves the page up on his computer and customizes the background to a much more appealing shade and then does chores around the house. He comes back every so often checking if the weather lets up so he can fish, and it eventually does. He is ecstatic and packs his things for fishing and closes his laptop. He pulls up our product on a webpage on his phone so he can check while fishing and on the go in general. Nothing hampered his experience through unnecessary stories or ads because our users want to use this app to check the weather and that's it.

A second use case is with a woman who is stuck in her office building overnight because of a sudden snowstorm that made the roads not drivable. She relies on our product to let her know when it's safe to go home, nothing gets in the way, and it gives her the safest experience and reliable responsiveness. She changes the color to a less energy intensive one so that she may save any battery she can since she does not have a charger. The lack of ads and other bloat also allow for maximum battery efficiency when it is absolutely necessary. Our product is created to assist the user and act as a tool. We do not want the user to do something or push something on the user as we know how valuable the weather information can be for most.

## **Functional Requirements for Weather application**

- Location data based on state and major cities.
  - Website should be able to accurately display the weather for all states and major cities.
- Provide a degree range from max temperatures and minimum temperatures.
  - Website will need to show the lows and highs for the temperature that day.
- Display a percentage of rain for the for the day.
- Storm tracking
- Wind speed and direction
- Humidity
- At least a 7-day forecast

## **Non-Functional Requirements**

- Needs to be reliable this website should not go offline.
  - Application will need to run 24/7
- Application will need alarms.
  - Example alert user of upcoming storms, hurricanes, and other natural phenomena
- Performance will need to be able to operate under heavy site traffic.
- User-Friendly application that will allow users of all ages to interact with the product.
- Flexibility to changes and updates from team members.
- The code for this product will need to be open source.
- The webpage will allow the user to change the color of the foreground and background to a light and dark mode.

## **High-level System Architecture:**

- Languages - HTML, CSS, JavaScript
- Software Products - GitHub, GitHub Pages
- Tools - Brackets
- Supported Web Browsers - Apple Safari, Google Chrome, Microsoft Edge, Mozilla Firefox
- External Code - Weather Widget <https://weatherwidget.io/> 

## **Team:**

**Scrum Master:** Diego Gama
**Product Owner:** Liam Swank
**Backend Lead:** Alexander Mendoza
**Frontend Lead:** Jarod Crush
**Development Team:** Giovanni Smith
