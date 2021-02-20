# Moment Counter ⏱☝️

## General Info

A React portfolio project for Nucamp.

Moment Counter allows users to quickly mark off a set number of events from a list. It's similar to a checklist, but intended to be a bit simpler, quicker, and more fun!

Original wireframes and design intent can be [found here](https://www.figma.com/file/17vW94nlMz1CYZiXVScEhi/Moment-Counter-Wireframe?node-id=292669%3A448).

## Installation & Setup

1. Clone repo
2. Run `yarn install` in directory folder
3. Run `yarn start`

...

### Dependencies

```
yarn add react-router
```

## More About the Project

This idea for this project originally came from me taking a piece of paper and drawing a bunch of circles on it to represent Saturdays of my participation in Nucamp. After each Saturday workshop, I then let my six year old cross out one of the circles. We can quickly see the progress made and how many Saturdays are left.

I thought it would be fun to create a digital version of this idea...hence Moment Counter.

Originally, I thought the idea was at least sort of unique. Then I realized it's essentially a todo app done in a different way. At first that disappointed me, but the more I thought about it, I decided it was actually a great learning project - it's familar enough (and similar enough to other things) that's it's within reach. Yet, it's also unique enough and scalable enough that it can remain challenging yet fun.

The design and original intent can be found on Figma [here](https://www.figma.com/file/17vW94nlMz1CYZiXVScEhi/Moment-Counter-Wireframe?node-id=292669%3A448). The direction the sytle and colors have taken are a bit more brutalist than I expected, but I'm liking it for now. In the long term, I'd like to have different color themes and options of shapes. (I've played with balloons for my items, but I'm sticking with circles for now.)

### Challenges

As I'm learning, time is my major challenge. Everything interests me! So I find myself using discipline to remain focused on the major tasks and not end up in an unproductive, though interesting, rabbit hole.

Once specific example of that is Redux. At some point I started adding Redux, but after a little bit of time, I realized with the app as it is, I'm better off just using React alone then incorporating Redux down the road if I desire and the code-base speaks to the need. It may also be worth considering re-writing the app using the context-api.

### Next Steps

I intend to continue enhancing this app and use it as a playground for future learning. Some future ideas include.

#### Immediate Next Steps

- Add in Font Awesome (or some other icon library) to use on the buttons
- Add animation to items when the disappear and reappear (this is especially jarring when going from viewing complete/incomplete items)
- Host a working version of the site (likely on Netlify)
  - Ideally I'd like to set this up via continuous integration with some sort sort of build branch on GitHub

#### Medium Term Next Steps

- Install and use Styled Components (my current css is VERY messy and I'd like to try something new with better organization)
- Work on mobile responsivity (which is non-existent at this point) - this is especially needed for my menu
- Add additional features like adding/editing content on each item (like description, date to complete, etc)
- Add more display options for items (like item-number, etc.)
- Create/add a logo

### Long Term Next Steps

- Add redux
- Add ability to have multiple lists
- Add ability to create an account and have saved lists
- Add enhanced stats
- Add additional color themes
