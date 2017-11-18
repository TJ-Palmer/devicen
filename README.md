# Devicen Project

### Process of starting the project:
First thing I would do is write out some user stories for what the client wants. In this case a landing page, drop down with account settings, drop down for devices, and a page to check device information. From this I gathered the client wants to have a way to have an account to list multiple devices under their account. Each device will have a page to show information about that device. After coming up with user stories and the general idea of what I believe the client wants I would double check with the client on what they want.

**User Stories:**
* As an anonymous user, I want to be able to create an account.
* As a logged in user, I want to be able to view all my devices.
* As a logged in user, I want to be able to view add a device.
* As a logged in user, I want to be able to view stats on my device.
* As a logged in user, I want to be able to remove a device from my devices page.

If the client agrees with the users stories and the general idea that we give them from their description of what they want. We can move forward with designing pages:

[Designs](/designs/devicen.pdf)

*All designs are done with Adobe XD, Adobe Photoshop, and Adobe Illustrator.*


After designs are made and the client agrees on what they see, we can then move onto coding out the project.

### Thoughts on how to go about the project:

To make the project follow the open/closed principle of oop what I would do to make it more expandable is use [redux](https://redux.js.org/) for keeping track of all information being requested from a restful api. With using [redux](https://redux.js.org/) and react together we can easily update all data on the views. To retrieve data from a restful api I would use [axios](https://www.npmjs.com/package/axios) to send requests. I use [axios](https://www.npmjs.com/package/axios) because it’s a promise based http client for node. For different views and navigation for the website I would use [react router](https://reacttraining.com/react-router/). [React router](https://reacttraining.com/react-router/) is a very powerful tool for having a single page but multiple view website. With [react router](https://reacttraining.com/react-router/) we can expand to as many different url/views we need for the website. All devices can be under a url like: (www.devicen.com/device/#id). Along with that information we can take directly from the props with react to call the correct restful api call to gather the user's data. Programming the design of the website we can go multiple routes. For this project's time frame I’m going to use [bootstrap](https://getbootstrap.com/) and my own css to tweak the [bootstrap](https://getbootstrap.com/) to the design created in Adobe XD. With longer based project I would use [less](http://lesscss.org/)/[sass](http://sass-lang.com/) to have variable css or use [CSS4](http://css4.rocks/). Along with having customization for design aspects for the website for the client we can use reacts to easily manipulate the css as we pull in data for the user from database. Changing logos/images on the website can be very easy too when working with node. When adding in an image we use a path to the image directory that we have in the project and can easily update that image or update the path in the file.
