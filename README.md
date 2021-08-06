# MidWays
(formerly MeetMe)

[![Node.js CI](https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit/actions/workflows/node.js.yml/badge.svg)](https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit/actions/workflows/node.js.yml)

[![Node.js CDeployment](https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit/actions/workflows/deploy.yml/badge.svg)](https://github.com/agile-dev-assignments/project-setup-team-wilmington-circuit/actions/workflows/deploy.yml)

[Check out the project](http://MidWays-agiledev.site/)

## How to Use
To use MidWays, enter in at least two starting locations, select any filter you want, and click search. MidWays will calculate the center point of the entered locations and return results nearby. If you wish to save groups or commonly used locations, you can do so after creating an account. You don't need an account to access MidWays's basic functionality.

When searching, rememeber you are only require to provide input for the query box. So, you are not required to provide input for any of the dropdown filters. 

Example searches include:

1) ‘restaurant’ alone in the query box. 
2)  ‘sports bar’ alone in the query box.
3) ‘chinese’ in the query box with ‘restaurant’ as the type.

Depending on your starting locations, you can try adding additional filters. However, if there are no matching results in your location, none will be returned

## What and Why?
MidWays allows users to find places such as bars, restaurants and parks equidistant from a set of starting points. The project will help groups plan their destinations so that each party has roughly equal travel time and can arrive at around the same time. 

## For Whom?
MidWays will be useful for planning meetings with friends, family, acquaintances, and business partners. 

## How?
MidWays will use an algorithm to find places such as restaurants, bars, parks, etc. that are roughly equidistant from a set of given origin points. The list of results will display as markers on a map, which users can then select. 

## Product Vision Statement. 
MidWays will allow users to enter a set of origin points, and search for places in between those points. Once a user selects a result from the list, it will show information about that destination, as well direction data from each origin to the destination. 

Additionally, MidWays will allow users to save groups of origin points so that they can reuse them later. We will also allow for multiple users to interface with the same map at the same time. This is initiated by one user sharing a 'share link' with others. Any change to origin points or route setting will then be visible to all users on the share link.

We also will provide users the ability to create an account for MidWays. While this is optional, it will allow users to transfer their saved location groups between devices, and will allow them to store commonly used locations (such as home, workplace, etc.) in their account. They will also be able to save other MidWays users' accounts as a 'friend', so that they can quickly add them as an origin point.

## Minimum Viable Product
At minimum, our product must allow users to enter up to 6 origin points and find results that are near the midpoint (by travel-time or distance) from those points. Additionally, we must create an intuitive solution for sharing maps between users.

Also, our MVP should have:
- Select custom options, such as travel mode, for each user. 
- Save sets of origin point (locally for non-users, in database for users)
- Link sharing functionality
- Filter results by rating (GMaps), price, open hours

## Members
- [Santiage Darré](https://github.com/sdarre) (Sprint 1 Product Owner, Sprint 3 Scrum Master)
- [Ari Khaytser](https://github.com/ajk745) (Sprint 2 Scrum Master, Sprint 3 Product Owner)
- [Maggie Pierce](https://github.com/m-ggie) (Sprint 2.5 Product Owner, Sprint 4 Scrum Master)
- [Alex Hammer](https://github.com/ah4597) (Sprint 2, 4 Product Owner)
- [Luis Cordova](https://github.com/LGCX) (Sprint 1, 2.5  Scrum Master)

## History
Finding a "fair" place to meet has long been a source of unnessessary dispute. This project aims to solve this with a fair and optimal solution. 

## Contributing
Refer to [CONTRIBUTING.md](./CONTRIBUTING.md)

## Testing Instructions
Run the test scripts in the back-end folder

## Links
This project will make use of the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) developed by Google. It will also use [Turf.js](https://turfjs.org/) for geospatial analysis and finding optimal locations.
