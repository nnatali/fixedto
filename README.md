fixedTo
=======

A jQuery plugin to positionate fixed an element, if the position is left or right, the element rotates. It possible hide / show the element.

Calling
-------

`$(".myelement").fixedTo();`

`$(".myelement").fixedTo({
  "position": "left",
  "align": "center",
  "hide": true,
  "height_hide": 8
});`

Parameters
----------

<table>
  <tr>
    <th>Name</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>Position</td>
    <td>Top</td>
    <td>Position for the element respect the screen. Values: top, right, bottom, left.</td>
  </tr>
  <tr>
    <td>Align</td>
    <td>Center</td>
    <td>Align of the element. Values: left, center, right.</td>
  </tr>
  <tr>
    <td>Hide</td>
    <td>True</td>
    <td>Hide or show the element.</td>
  </tr>
  <tr>
    <td>Height_hide</td>
    <td>15</td>
    <td>Height in pixels when the element is hide.</td>
  </tr>
</table>

Example
-------

* [http://nnatali.github.com/jquery.fixedTo/](http://nnatali.github.com/jquery.fixedTo/)

Download
--------

* [https://github.com/nnatali/jquery.fixedTo/archives/master](https://github.com/nnatali/jquery.fixedTo/archives/master)

Additional
----------

* Required jQuery [http://jquery.com](http://jquery.com)
* Browser compatibility: Firefox 3+, Chrome 4+, Safari 4+, Internet Explorer 7+
* Created by [@nnatali](http://twitter.com/nnatali)