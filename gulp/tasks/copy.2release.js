'use strict';

module.exports = function() {
  $.gulp.task('copy:2release', function() {
    return $.gulp.src('./source/fonts/**/*.*', { since: $.gulp.lastRun('copy:2release') })
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};