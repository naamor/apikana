var browserify = require('browserify');
var path = require('path');
var brfs = require('brfs');
var sourceStream = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');

module.exports = {
    generate: function (source,dest) {
        return browserify(source, {
            transform: [brfs]
        }).bundle()
            .pipe(sourceStream('docson.js'))
            .pipe(buffer())
            .on('error', gutil.log)
            .pipe(dest);
    }
};

