/*jslint node: true */
"use strict";

module.exports = function(grunt) {
  
  // measures the time each task takes
  require('time-grunt')(grunt);

  // load grunt config
  require('load-grunt-config')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
        push: {
            command: [
              'cd dist', 'git add --all .', 'git diff-index --quiet HEAD || git commit -F ../commit.txt', 'git aws.push --environment '+(grunt.option("env")||"pprod-runningheroes-env")
            ].join('&&')
        }
    }
  });

  grunt.registerTask('push', ['shell:push']);
};
