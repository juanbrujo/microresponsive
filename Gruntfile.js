module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("microresponsive.json"),
		meta: {
			banner: '/*!\n' +
				' *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n' +
				' *  <%= pkg.description %>\n' +
				' *  <%= pkg.homepage %>\n' +
				' *  By: <%= pkg.author.name %> |  <%= pkg.author.twitter %>\n' +
				' *  License: <%= pkg.licenses[0].type %>\n' +
				' */\n'
		},
		less: {
	      dist: {
	      	options: {
	      		compress: true,
				banner: '<%= meta.banner %>'
	      	},
	        files: {
	            'dist/css/microresponsive.min.css': 'src/less/microresponsive.less',
	            'dist/css/demo.css': 'src/less/demo.less'
	        }
	      } 
	    },
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['src/less/*.less'],
				tasks: ['less'],
				options: {
					spawn: false
				}
			},
			html: {
				files: ['dist/*.html'],
			},
		    tasks: ['default']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["less"]);

};
