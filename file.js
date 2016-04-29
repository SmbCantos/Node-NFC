var jsonfile = require('jsonfile')
var file = './profile.json'
var nfc  = require('nfc').nfc,
    util = require('util');
var device = new nfc.NFC();

device.on('read', function(tag) {

       var obj = { "cardNo": tag.uid, Read: "False" };
       jsonfile.writeFile(file, obj, function (err) {
          console.error(err)
       })

       setTimeout(function() {
       	 jsonfile.writeFile(file, function (err) {
          console.error(err)
       });
       }, 2000);

}).on('error', function(err) {
}).start();



    