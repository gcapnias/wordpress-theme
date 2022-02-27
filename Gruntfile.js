module.exports = function (grunt) {

    'use strict';
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    var websiteDir = 'wordpress/wp-content/themes';

    // Project configuration.
    grunt.initConfig({
        sync: {
            main: {
                verbose: true,
                files: [
                    {
                        cwd: 'dist/',
                        src: '**',
                        dest: websiteDir
                    }
                ]
            }
        },
        watch: {
            main: {
                files: [
                    'theme-name/**'
                ],
                tasks: [
                    'clean',
                    'copy',
                    'sync'
                ],
                options: {
                    spawn: false,
                    atBegin: true,
                    livereload: true
                }
            }
        },
        copy: {
            'main': {
                'dest': 'dist/',
                'expand': true,
                'src': 'theme-name/**',
            }
        },
        clean: { 'dist': { 'src': 'dist/*' } }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
