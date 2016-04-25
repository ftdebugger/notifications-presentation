---

layout: default

---

# Яндекс

## **{{ site.presentation.title }}** {#cover}

<div class="s">
    <div class="service">{{ site.presentation.service }}</div>
</div>

{% if site.presentation.nda %}
<div class="nda"></div>
{% endif %}

<div class="info">
	<p class="author">{{ site.author.name }}, <br/> {{ site.author.position }}</p>
</div>

## Living standard
{:.section}

### Notifications API

## Example

![placeholder](pictures/notify.png)

## Step 1. Check caniuse.com

![placeholder](pictures/support.png){:.w100}

http://caniuse.com/#feat=notifications

## Step 2. Check user agent support

~~~ javascript
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else {
    // do something great
  }
~~~

## Step 3. Request permissions

~~~ javascript
if (Notification.permission === "granted") {
    // So good 
}
else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
        if (permission === "granted") {
            // So good!
        } else {
            // So bad!
        }
    });
} else {
    // So unexpected
}
~~~

## Step 3. Request permissions

~~~ javascript
Notification.requestPermission().then(function(result) {
  console.log(result); // granted
});
~~~

<script type="text/javascript">
    function exampleReq(button) {
        Notification.requestPermission().then(function(result){
            button.textContent = 'Result: ' + result;
        });
    }
</script>
<button onclick="exampleReq(this)">Request permission</button>

## Step 4. Wait user accept

![placeholder](pictures/fb.png){:.w100}

## Step 5. Create your first notification

~~~ javascript
var notification = new Notification('Hi there!');
~~~

<script type="text/javascript">
    function example1() {
        Notification.requestPermission().then(function() {
            var notification = new Notification("Hi there!");
        });
    }
</script>
<button onclick="example1()">Show notification</button>

## Step 6. Configure for great good

~~~ javascript
var notification = new Notification('Hi there!', {
    icon: 'themes/yandex/images/mail.png',
    body: 'Check your mail, men'
});
~~~

<script type="text/javascript">
    function example2() {
        Notification.requestPermission().then(function() {
            var notification = new Notification('Hi there!', {
                icon: 'themes/yandex/images/mail.png',
                body: 'Check your mail, men'
            });
        });
    }
</script>
<button onclick="example2()">Show notification</button>

## Step 6. Configure events

~~~ javascript
var notification = new Notification('Hi there!', {
    icon: 'themes/yandex/images/mail.png',
    body: 'Check your mail, men'
});

notification.onclick = function() {
    button.textContent = 'Clicked!';
    
    setTimeout(function() {
        notification.close();
    }, 3000);
}
~~~

<script type="text/javascript">
    function example3(button) {
        Notification.requestPermission().then(function() {
            var notification = new Notification('Hi there!', {
                icon: 'themes/yandex/images/mail.png',
                body: 'Check your mail, men'
            });

            notification.onclick = function() {
                button.textContent = 'Clicked!'
            }

            setTimeout(function() {
                notification.close();
            }, 3000);
        });
    }
</script>
<button onclick="example3(this)">Show notification</button>

## Step 7. Reduce number of notifications
~~~ javascript
for (var i = 0; i < 5; i++) {
    var notification = new Notification('Title ' + i, {
        icon: 'themes/yandex/images/mail.png',
        body: 'Check your mail, men'
    });  
}
~~~

<script type="text/javascript">
    function example4(button) {
        for (var i = 0; i < 5; i++) {
            var notification = new Notification('Title ' + i, {
                icon: 'themes/yandex/images/mail.png',
                body: 'Check your mail, men'
            });  
        }
    }
</script>
<button onclick="example4(this)">Show notification</button>

## Step 7. Reduce number of notifications
~~~ javascript
for (var i = 0; i < 5; i++) {
    var notification = new Notification('Title ' + i, {
        tag: 'mail-notify',
        icon: 'themes/yandex/images/mail.png',
        body: 'Check your mail, men'
    });  
}
~~~

<script type="text/javascript">
    function example5(button) {
        for (var i = 0; i < 5; i++) {
            var notification = new Notification('Title ' + i, {
                tag: 'mail-notify',
                icon: 'themes/yandex/images/mail.png',
                body: 'Check your mail, men'
            });  
        }
    }
</script>
<button onclick="example5(this)">Show notification</button>

## Draft
{:.section}

### Service Workers

## Service Workers overview

![placeholder](pictures/sw-lifecycle.png){:.h400}

## Step 1. Check caniuse.com

![placeholder](pictures/support-sw.png){:.w100}

http://caniuse.com/#feat=serviceworkers

## Step 2. Check user agent support

~~~ javascript
  if ('serviceWorker' in navigator) {
    // do something great
  } else {
    alert('Sorry');
  }
~~~

## Step 3. Request permissions

~~~ javascript
navigator.serviceWorker.register('/sw.js').then(function(registration) {
    console.log('Successful with scope: ',registration.scope);
}).catch(function(err) {
    console.log('Failed: ', err);
});

// sw.js
console.log('I am alive!');
~~~

<script type="text/javascript">
    function swExample1(button) {
        navigator.serviceWorker.register('/notifications-presentation/sw.js')
            .then(function(registration) {
                button.textContent = 'Scope: ' + registration.scope;
            })
            .catch(function(err) {
                button.textContent = 'Fail ' + err;
            });
    }
</script>
<button onclick="swExample1(this)">Request permission</button>

## Step 4. Support lifecycle

~~~ javascript
// sw.js
self.addEventListener('install', function(event) {
    // Perform install steps
});

self.addEventListener('activate', function(event) {
    // Activate
}); 

self.addEventListener('push', function(event) {
  console.log('Push message received', event);
});
~~~

## Step 5. Communicate with Service Workers

~~~ javascript
//...
    .then(function(serviceWorkerRegistration) {
        return serviceWorkerRegistration.pushManager.getSubscription()
            .then(function(subscription) {
                if (subscription) {
                    return subscription;
                } else {
                    return serviceWorkerRegistration.pushManager
                        .subscribe({userVisibleOnly: true});
                }
            })
    })
    .then(function(subscription) {  
        console.log(JSON.stringify(subscription));
    });
~~~

## Step 6. Service worker

~~~ javascript
self.addEventListener('push', function(event) {
  event.waitUntil(  
    self.registration.showNotification(title, {  
      body: 'Service Worker message',  
    });
  );  
});
~~~

## Step 7. Magick

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>

<script type="text/javascript">
    function swExample2(button) {        
        Notification.requestPermission()
            .then(function() {
                navigator.serviceWorker.register('/notifications-presentation/sw.js')
            })
            .then(function(registration) {
                return navigator.serviceWorker.ready;
            })
            .then(function(serviceWorkerRegistration) {
                return serviceWorkerRegistration.pushManager.getSubscription()
                    .then(function(subscription) {
                        if (subscription) {
                            return subscription;
                        } else {
                            return serviceWorkerRegistration.pushManager.subscribe({userVisibleOnly: true});
                        }
                    })
            })
            .then(function(subscription) {  
                var url = location.origin + '/notifications-presentation/push.html?' + encodeURIComponent(subscription.endpoint.substr(40));

                console.log(url);

                jQuery("#magick").qrcode(url);
            })
            .catch(function(err) {
                button.textContent = 'Fail ' + err;
            });
    }
</script>
<button onclick="swExample2(this)">Magick</button>
<div id="magick"></div>
