module.exports = function (grunt) {

    'use strict';
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-php');

    var wordpressDir = '/var/www/html/';
    var wordpressThemesDir = '/var/www/html/wp-content/themes';

    // Project configuration.
    grunt.initConfig({
        clean: { 'dist': { 'src': 'dist/*' } },
        copy: {
            'main': {
                'dest': 'dist/',
                'expand': true,
                'src': 'theme-name/**',
            }
        },
        sync: {
            main: {
                verbose: true,
                files: [
                    {
                        cwd: 'dist/',
                        src: '**',
                        dest: wordpressThemesDir
                    }
                ]
            }
        },
        php: {
            dist: {
                options: {
                    port: 8080,
                    base: wordpressDir
                }
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
                    'php',
                    'sync'
                ],
                options: {
                    spawn: false,
                    atBegin: true,
                    livereload: true
                }
            }
        }
    });

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
