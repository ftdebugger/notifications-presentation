var push = require('web-push-encryption');

var subscription = {
	"endpoint":"https://android.googleapis.com/gcm/send/dvqu-AAI8fA:APA91bGxZHmDkeCRjCTzOWs…zgpMYrCgVS4ha8i-xGAlJ7xli50Os5L2_H00ZwKaZs7hZj_kZl3SCLdHokb39DA5u2C3-7IdyI"
};

push.sendWebPush('Yay! Web Push!', subscription, 'AIzaSyCw6KeA-cBcPTBGgifS0Va0ygjQGaSLyHk');