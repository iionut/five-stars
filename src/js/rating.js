(function () {
    'use strict';

    const DEFAULT_STARS_NUMBER = 5;
    const DEFAULT_STEP = 1; // 0.5

    class Rating {
        constructor(options = {}) {
            this.stars = [];
            this.starsNumber = options.items ? options.items : DEFAULT_STARS_NUMBER;
            this.step = options.step ? options.step : DEFAULT_STEP;
        }
    }

})();
