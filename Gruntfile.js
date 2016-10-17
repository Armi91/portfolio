module.exports = function(grunt){
	grunt.initConfig({
		less: {
			dev: {
				options: {
					paths: ['src/css']
				},
				files: {
					'src/css/main.css': 'src/css/main.less'
				}
			}
		},
		autoprefixer: {
			dev: {
				src: 'src/css/*.css'
			},
			options: {
				browsers: ['last 2 version']
			}
		},
		cssmin: {
		  options: {
		    shorthandCompacting: false,
		    roundingPrecision: -1
		  },
		  target: {
		    files: {
		      'build/css/main.css': ['src/owl-carousel/*.css', 'src/css/main.css'],
		      'build/css/font-awesome.css': ['src/css/font-awesome.css']
		    }
		  }
		},
		uglify: {
		    my_target: {
		      files: {
		        'build/scripts/scripts.js': ['src/owl-carousel/owl.carousel.js', 'src/scripts/*.js']
		      }
		    }
		  },
		  imagemin: {
		    dynamic: {
		      files: [{
		        expand: true,
		        cwd: 'src/img',
		        src: ['**/*.{png,jpg,gif}'],
		        dest: 'build/img'
		      }]
		    }
		  },
		watch: {
			options: {
				livereload: true
			},
			dev: {
				files: ['src/**/*'],
				tasks: ['compileLess']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');


	grunt.registerTask('compileLess', ['less', 'autoprefixer']);
	grunt.registerTask('build', ['compileLess', 'cssmin', 'uglify', 'imagemin'])

};