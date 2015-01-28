#Lazy-Loader

This js file, will allow to create a lazy-loading effect for a set of data.
Pass an array & #of items to show per event. When the scroll bar reaches
towards the end of scroll, the event triggers loading the next set of data.

##Installation

````javascript
<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
<script src="loader.js"></script>
````

##Usage
```javascript
myLazyLoader.init(dataArray, #ofitems-per-each-scroll);
```
