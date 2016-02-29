module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/* <%= pkg.name %> v<%= pkg.version %> \n' +
      ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> \n */\n',
    
    sass: {
      dev: {
        options: {
          style: 'expanded',
          banner: '<%= banner %>'
        },
        files: {
          'dist/weavr/OI.weavr.css' : 'sass/framework.scss',
          'dist/weavr/OI.redactor.css' : 'sass/redactor.scss'
        }
      },
      production: {
        options: {
          style: 'compact',
          sourcemap: 'none',
          banner: '<%= banner %>'
        },
        files: {
          'dist/weavr/OI.weavr.min.css' : 'sass/framework.scss'
        }
      }
    },
    
    uglify: {
      production: {
        options: {
          banner: '<%= banner %>'
        },
        files: {
          'dist/weavr/OI.weavr.min.js': ['dist/weavr/OI.weavr.js'],
          'dist/weavr/OI.placeholder.min.js': ['js/OI.placeholder.js'],
          'dist/weavr/OI.viewportunitsfix.min.js': ['js/OI.viewportunitsfix.js']
        }
      }
    },
    
    css_mqpacker: {
      production: {
        options: {
          map: false
        },

        expand: true,
        cwd: 'dist/weavr/',
        src: '*.css',
        dest: 'dist/weavr/'
      }
    },
    
    postcss: {
      options: {
        map: false,
        processors: [
          require('autoprefixer'),
        ]
      },
      production: {
        src: 'dist/weavr/*.css'
      }
    },
    
    watch: {
      default: {
        files: ['sass/**/*.scss', 'js/**/*.js'],
        tasks: ['default']
      },
      options: {
        interrupt: false,
        nospawn: true,
        event: 'all',
        interval: 1000,
        debounceDelay: 1000
      },
    },
    
    concat: {
      options: {
        separator: ';',
      },
      default: {
        src: ['js/modernizr.custom.js', 'js/OI.tooltip.js', 'js/OI.weavr.js', 'js/OI.layout.js', 'js/OI.chooseAmount.js'],
        dest: 'dist/weavr/OI.weavr.js',
      },
    }
    
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-css-mqpacker');

  // Default task(s).
  grunt.registerTask('default', [ 'sass:dev', 'sass:production', 'concat:default', 'postcss:production', 'css_mqpacker:production', 'uglify:production' ] );

};
