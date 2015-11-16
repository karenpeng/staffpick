# Staff Pick

## Insight  

  Since the api gives back a list of video and its information,
  an intuitive way to consume it would be having a video list on the page,
  providing a twiter/facebook timeline-like scroll experience.

  Besides scrolling, it will be great if users could discover what they want by sorting and filtering the list.
  Number of 'likes', 'plays', 'comments' could be used as sorting index, and its tags could be used for filtering.


## Feature

 * Lazy load

When page is being initialized, videos are not loaded until they are in visible area.

 * Sort and filter

Videos can be filtered by tags and order of videos can be sorted by different values.

 * Pause video if it's not in visible area

Videos being played but no longer in visible area, they are paused automatically.


## Material

 * React
 * Webpack
 * ES6
 * mocha


## Structure

```
src
├─js
   index.js(entry of bundle)   
   ├─model
        ├─underlining list and item model
   ├─request
        ├─http request to api
   ├─view
        ├─ui components
```

## QA

 *  Was the question/problem clear? did you feel like something was missing or not explained correctly?

After receiving the question, I asked Gabby:

1. Use case of this page
2. What media is this page on (mobile/desktop)
3. Should user log in

Also the given simple api documentation is being redirected, I asked Gabby and made sure I should stick with it.

All in all, my understanding is to consume data from http://vimeo.com/api/v2/channel/staffpicks/videos.json,
and focus on frontend concept design, implementation and code structure

-

 *  How much time did you spend on each part: understanding, designing, coding, testing?

understanding: ~1 hour (going through vimeo apis, can't find documentation of simple api!)<br/>
designing: developed brief concept in ~half an hour, evolved over time when developing<br/>
coding: 1.5 day<br/>
testing: ~3 hours (encountered many problems with frontend browser testing, also es6 support problems)

-

 *  What would you have done differently if you have more time or resources?

To fix performance issues<br/>
To enhance user experience<br/>
To use more apis so that users to browse more resources

-

 *  Are there any bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact?

Performance. <br/>
Every video is an iframe now I didn't find a way to get the video source.<br/>
It takes longer time to load also communication between windows dampens performance.<br/>


If I could get the video source, use video player directly.<br/>
If I can't, at least reduces cross window communication frequency.

-

 *  How would the system scale for more users/visitors?

Cache videos in non-main server

-

 *  How would your solution cope if the api was slow or broke or returned incorrect data?

There's a loader sign telling users data is being loaded when it is slow.<br/>
There's data check after receiving data, throw error if data is in incorrect format.<br/>
There's default data type check in react.PropsTypes for each component.<br/>

-

 *  Anything else you want to share about your solution or the problem?

What does vimeo do to minimize performance issue that iframe bring about?<br/>

Does vimeo ever has a thought, to provide a 'turn off the light' button,
so that when watching video, every other element in the dom will dim?

