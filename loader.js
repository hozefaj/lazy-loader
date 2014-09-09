var myLazyLoader = {
	init: function(arr, range) {
        this.range = range;
        this.arr = arr;
        this.listSize = arr.length;
        this.current_index = 0;

        $(window).scroll(function () {
            if ($(document).height() <= $(window).scrollTop() + $(window).height()) {
                myLazyLoader.getNextLoad();
            }
         });

        myLazyLoader.getNextLoad();
    },
    getNextLoad: function() {
        var self = this,
        	i = 0;

        this.newRange = this.current_index + this.range;
        self.limit = 0;

        self.newIndex = this.current_index;

        if (this.newRange < this.listSize) {
            self.limit = this.newRange;
        } else {
            self.limit = this.listSize;
        }

		for (i = self.current_index; i < self.limit; i++) {

			// DO WHATEVER IS NEEDED HERE
			self.newIndex++;
		}
        this.current_index = self.newIndex;
    }
};
