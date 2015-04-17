module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.name %> v<%= pkg.version %> \n' +
      ' * Compiled <%= grunt.template.today("mm-dd-yyyy") %>\n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n */\n',
    
    sass: {
      dev: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/weavr/OI.weavr.css' : 'sass/framework.scss',
          'dist/weavr/OI.weavr.grid.css' : 'sass/grid-only.scss'
        }
      },
      production: {
        options: {
          style: 'compact',
          sourcemap: 'none',
          banner: '<%= banner %>'
        },
        files: {
          'dist/weavr/OI.weavr.min.css' : 'sass/framework.scss',
          'dist/weavr/OI.weavr.grid.min.css' : 'sass/grid-only.scss'
        }
      }
    },
    
    uglify: {
      production: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/weavr/OI.weavr.min.js': ['js/OI.weavr.js']
        }
      }
    },
    
    
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', [ 'sass:dev', 'sass:production', 'uglify:production' ] );

};
