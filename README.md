# Calendar App
The calendar app includes the creation and development of a calendar component using front-end technologies.

## Roadmap
The following aspects should be covered in order to make the component a high-quality one:
- [x] Define the technology stack.
- [x] Design the missing parts of the UI.
- [x] Split the component in smaller components.
- [ ] Generate the starting code for the component architecture.
- [ ] Consider adding support for server rendering technologies (NodeJS, React, Angular).
- [ ] Consider using any front-end storage technology in order to avoid further requests to the server.
- [x] Describe the algorithm logic.
- [ ] Consider translating the UX/UI to use a UI framework, such as Material Design (for React).
- [ ] Organize the required steps in a Scrum fashion (with sprints).
- [ ] Unit test every unit of logic.
- [ ] Perform integration tests for the UI.
- [ ] Perform acceptance tests.
- [ ] Consider adding support for a CI tool (Travis, Circle).
- [ ] Consider adding support for a code coverage tool (Istanbul with NYC).
- [ ] Publish.

## Technology Stack
For this component we are going to use the following stack:
- React, since this is a component based framework for highly scalable UI apps.
- NodeJS as the backend server technology, this will allow us to implement server rendering.
- Isomorphic Fetch, a polyfill for NodeJS fetch function that runs of the server and client.
- LocalStorage, as a front-end persistent storage for data retrieved from the API.

## The missing parts of the UI
There are missing parts in the UI, for instance, the toolbar that will contain the input elements that will update the view. This also applies to the years that will behave as tabs to show the calendar for certain years depending on the selected time span.
(this will be inserted here).

## Composition using a components based architecture
React is a component based framework, therefore it makes sense to split our UI in smaller components and propagate the state down the tree up to the components that need that state to work, in case you need a stateful component, do so by exporting a component that will compute its own state based on passed properties from the root component.

## The foundation code
Missing...

## The algorithm logic
Basically what we want to do is to retrieve the holidays from the API, we are going to start with a predefined year (2017) and we are going to let the user change that year, as well as the country code and the starting date. The algorithmic steps are as follows:
- Calculate years, months, weeks, and days given the input params (current date - starting date).
- Pass that information down the components tree, starting by the Year component.
- In the Year component, calculate how many months are needed to cover the given timespan.
- Generate a Month component for each month (do not expect the remaining days to cover the entire month).
- Within the Month component, calculate the amount of weeks needed to cover the timespan for the given month. Generate a Week component for each, pass the week information down the tree.
- Within each Week component, calculate the amount of days in that week. If the amount of days is less than 7, that would mean that the rendering process should have ended, render a day with invalid set to true in order to render invalid days (the gray ones), because the week has 7 days no matter what, let the root component know that this has happened, otherwise, continue the rendering process. For each day, generate a Day component, pass the day type for each.

___
Copyright 2017 Manuel Ro

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
