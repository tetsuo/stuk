# stuk

[stag](https://github.com/seenaburns/stag) inspired streaming canvas bar graphs.

![screenshot](http://i.imgur.com/Vn5CMBp.gif)

# api

```js
var Stuk = require('stuk')
```

## var stuk = new Stuk

Creates and returns the widget. Hard-coded defaults are almost the same as what is seen in this [/r/unixporn](https://www.reddit.com/r/unixporn/) [screenshot](https://www.reddit.com/r/unixporn/comments/2jnzpc/bspwm_ive_noticed_many_of_you_are_using_your/).

## stuk.el

`HTMLDivElement` here.

## stuk.tick(value)

Updates the graph with the given number. Dynamically scales the y-axis.

# license

mit