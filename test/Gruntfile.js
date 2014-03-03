module.exports = function(grunt) {
  grunt.initConfig({
    nodewebkit: {
      options: {
        build_dir: './build', // Where the build version of my node-webkit app is saved
        credits: './public/credits.html',
        mac_icns: './example/icon.icns', // Path to the Mac icon file
        //mac: false, // We want to build it for mac
        //win: true, // We want to build it for win
        mac: true, // We want to build it for mac
        win: false, // We want to build it for win
        linux32: false, // We don't need linux32
        linux64: false, // We don't need linux64
      },
      src: './public/**/*' // Your node-webkit app
    },
    copy: {
        main: {
          files: [
            {
              src: 'libraries/mac/ffmpegsumo.so',
              dest: 'build/releases/nw-demo/mac/nw-demo.app/Contents/Frameworks/node-webkit\ Framework.framework/Libraries/ffmpegsumo.so',
              flatten: true
            },
          ]
        }
    }
  });

  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('default', ['nodewebkit', 'copy']);
};
