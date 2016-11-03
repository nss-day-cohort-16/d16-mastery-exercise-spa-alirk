module.exports = function(grunt) {
  grunt.initConfig({

    jshint: {
      files: ['../src/**/*.js'], 
      options: {
        predef: ["document", "console", "$", "require" ], 
        esnext: true, 
        globalstrict: true, 
        globals: {'CarLot': true}
      }
    },

    copy: {
      bootstrap: {
        expand: true,
        cwd: 'node_modules/bootstrap/dist',
        src: ['**'],
        dest: '../dist'
      },
      jquery: {
        expand: true,
        cwd: 'node_modules/jquery/dist',
        src: ['jquery.min.js'],
        dest: '../dist'
      }
    },

    sass: {
      dist: {
        files: {
          '../css/main.css': '../scss/main.scss'
        }
      }
    },
    
    watch: { 
      src: {
        files: ['../src/**/*.js'], 
        tasks: ['jshint'] 
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.registerTask('default', ['jshint', 'copy', 'sass', 'watch']);
};