var gulp = require('gulp');

var appDir = 'app/www/'

var paths = {
    index: ['index.html'],
	scripts: ['js/**/*.js', '!js/vendor/jasmine-2.1.2/**'],
    css: ['css/**/*.css'],
    images: ['img/**/*.png'],
    data: ['data/places.json'],
    vendor_jquery: ['bower_components/jquery/dist/jquery.min.js'],
    vendor_foundation: ['bower_components/foundation/**/*.js',
        'bower_components/foundation/**/*.css', '!bower_components/foundation/scss/**'],
    vendor_handlebars: ['bower_components/handlebars/handlebars.min.js'],
    vendor_modernizr: ['bower_components/modernizr/modernizr.js'],
    vendor_moment: ['bower_components/moment/moment.js'],
    vendor_underscore: ['bower_components/underscore/underscore.js'],
    vendor_backbone: ['bower_components/backbone/backbone.js']
};

var appPaths = {
    index: appDir,
    scripts: appDir + 'js',
    css: appDir + 'css',
    images: appDir + 'img',
    data: appDir + 'data',
    vendor_jquery: appDir + 'bower_components/jquery/dist',
    vendor_foundation: appDir + 'bower_components/foundation',
    vendor_handlebars: appDir + 'bower_components/handlebars',
    vendor_modernizr: appDir + 'bower_components/modernizr',
    vendor_moment: appDir + 'bower_components/moment',
    vendor_underscore: appDir + 'bower_components/underscore',
    vendor_backbone: appDir + 'bower_components/backbone'
}

gulp.task('default', function(){
    // copy index
    console.log("Copying index...");
    gulp.src(paths.index).pipe(gulp.dest(appPaths.index));

    // copy JS
    console.log("Copying JavaScript files...");
	gulp.src(paths.scripts).pipe(gulp.dest(appPaths.scripts));

    // copy CSS
    console.log("Copying CSS files...");
    gulp.src(paths.css).pipe(gulp.dest(appPaths.css));

    // copy images
    console.log("Copying images...");
    gulp.src(paths.images).pipe(gulp.dest(appPaths.images));

    // copy data
    console.log("Copying data...");
    gulp.src(paths.data).pipe(gulp.dest(appPaths.data));

    // copy jQuery
    console.log("Copying jQuery...");
    gulp.src(paths.vendor_jquery).pipe(gulp.dest(appPaths.vendor_jquery));

    // copy Foundation
    console.log("Copying Foundation...");
    gulp.src(paths.vendor_foundation).pipe(gulp.dest(appPaths.vendor_foundation));

    // copy Handlebars
    console.log("Copying Handlebars...");
    gulp.src(paths.vendor_handlebars).pipe(gulp.dest(appPaths.vendor_handlebars));

    // copy Modernizr
    console.log("Copying Modernizr...");
    gulp.src(paths.vendor_modernizr).pipe(gulp.dest(appPaths.vendor_modernizr));

    // copy Moment
    console.log("Copying Moment...");
    gulp.src(paths.vendor_moment).pipe(gulp.dest(appPaths.vendor_moment));
    
    // copy Underscore
    console.log("Copying Underscore...");
    gulp.src(paths.vendor_underscore).pipe(gulp.dest(appPaths.vendor_underscore));
    
    // copy Backbone
    console.log("Copying Backbone...");
    gulp.src(paths.vendor_backbone).pipe(gulp.dest(appPaths.vendor_backbone));
});
