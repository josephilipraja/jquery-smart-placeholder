#Welcome to SmartPlaceholder.js
SmartPlaceholder is a free & open-source jQuery plugin which converts your normal html input tags into advanced user-friendly elements. This plugin works with zero modification to the markup, we know its already messed up! :P

We are in the era of placeholder attributes, we don't use labels to represent each input tag elements like we used to. But there are some limitations with the placeholder, major one is that it hides itself when the user starts typing. That's where SmartPlaceholder.js can take act in.

***
***

#Demo

**jQuery Smart HTML Input Placeholder Plugin Demo:**
> <http://josephilipraja.github.io/jquery-smart-placeholder/demo>

***
***

#Usage

**HTML:**
```
<input type="text" placeholder="Username">
<input type="password" placeholder="Password">
```
**JavaScript:**
```
<script src="jquery.js"></script>
<script src="jquery.smartPlaceholder.min.js"></script>
<script type="text/javascript">
    $(function() {
        $("input").smartPlaceholder();
    });
</script>
```

***
***

#Configurations / Options
**Default Settings & Options**
```
$("input").smartPlaceholder({
    text: 'Enter Value',      // default text
    backgroundColor: '#fff',  // hex, rgb, rgba
    color: '#888',            // hex, rgb, rgba
    size: 12,                 // in pixels
    speed: 0.3,               // in secs
    radius: 3,                // in pixels
    indent: 5,                // in pixels
    position: 'bottom',       // 'top' or 'bottom'
    mode: 'extend'            // 'inline' or 'extend'
});
```

***
***

#Bugs / Issues?
Found a bug in SmartPlaceholder.js? Nice! Do notify me via [Github Issues](https://github.com/josephilipraja/jquery-smart-placeholder/issues) or drop a mail at [mail@josephilipraja.com](mailto:mail@josephilipraja.com). I really appreciate it.

***
***

#Having Trouble?
Having trouble with SmartPlaceholder.js? Check out the demo usage at [jQuery Smart Placeholder Plugin Demo](http://josephilipraja.github.io/jquery-smart-placeholder/demo/) or contact [mail@josephilipraja.com](mailto:mail@josephilipraja.com) and we’ll help you sort it out.

***
***

#Copyright and license

Code and documentation copyright 2014 [Jose Philip Raja](http://josephilipraja.com), Founder & Creative Director of [CreaveLabs IT Solutions](http://creavelabs.com). Code released under the [MIT license](https://github.com/josephilipraja/jquery-smart-placeholder/blob/master/LICENSE).