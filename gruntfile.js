module.exports = function(grunt){

	// Configure tasks(s)
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	});

	// Load the plugins
	grunt.loadNpmTasks();

	// Register task(s)
	grunt.registerTask('default', [ ]);

};