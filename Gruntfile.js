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

	grunt.registerTask('compileLess', ['less', 'autoprefixer']);


};