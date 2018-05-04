// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    paths: {
        'progressbar': '../bower_components/progressbar.js/dist/progressbar',
        'scrollSnap': '../bower_components/scrollSnap/dist/scrollSnap.min',
        'velocity': '../bower_components/velocity/velocity.min',
        'in-view': '../bower_components/in-view/dist/in-view.min'
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main', 'semicircles']);