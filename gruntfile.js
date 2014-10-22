module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %> */\n',
    
    sass: {
      dev: {
        files: {
          'css/OI.framework.css' : 'sass/framework.scss'
        }
      },
      production: {
        options: {
          style: 'compact'
        },
        files: {
          'css/OI.framework.min.css' : 'sass/framework.scss'
        }
      }
    },
    
    uglify: {
      production: {
        files: {
          'js/OI.framework.min.js': ['js/OI.framework.js']
        }
      }
    }
    
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', [ 'sass:dev', 'sass:production', 'uglify:production' ] );

};
