"use strict";var precacheConfig=[["/zoo-quiz/index.html","b5134b4073283a02bd4bbf3de389a359"],["/zoo-quiz/static/css/main.9f6d5499.css","26cfbb0fd0b960020a9135f3aeb05a0a"],["/zoo-quiz/static/js/main.2bbd1b30.js","ebfb7d0a5c7f911cfb5af52343822091"],["/zoo-quiz/static/media/1.59fa81cf.svg","59fa81cf42190f1a1fb492b07d3a9f90"],["/zoo-quiz/static/media/2.64721198.svg","647211986c802f2992f1bbf374ba1508"],["/zoo-quiz/static/media/3.620af3c3.svg","620af3c3599968ef0385c61496063db8"],["/zoo-quiz/static/media/4.d8455d17.svg","d8455d170aecfc3587e6516c2fc3d2e4"],["/zoo-quiz/static/media/5.dde0e9d3.svg","dde0e9d33234f889d47d5897b5df71fc"],["/zoo-quiz/static/media/avatar.04974360.svg","049743603aba383499412b1d5fc30a22"],["/zoo-quiz/static/media/avatar.4e9e54a7.svg","4e9e54a73f491d8c8e037f47914a1454"],["/zoo-quiz/static/media/avatar.6c1ea515.svg","6c1ea515017022e2e9b4b84b452662d1"],["/zoo-quiz/static/media/avatar.83dcfcb7.svg","83dcfcb7503a2a1fccd6460590dfd599"],["/zoo-quiz/static/media/avatar.94c94270.svg","94c94270e5d691f45f49c530d2c8c9a2"],["/zoo-quiz/static/media/background.5af1a92f.svg","5af1a92f3f99e9c9bea1c05b81d717ed"],["/zoo-quiz/static/media/background.d993c670.svg","d993c6707dc42fc804b6d9924d29e8b2"],["/zoo-quiz/static/media/background.ed7e10ef.svg","ed7e10ef0f8fd52e1304cf252a5d02bc"],["/zoo-quiz/static/media/bat.1a58f7c0.svg","1a58f7c019cca7559f532f84d227596c"],["/zoo-quiz/static/media/bird.1bd7634b.svg","1bd7634b106f6b108d8a25c60ce8b17d"],["/zoo-quiz/static/media/bird.d15ef439.svg","d15ef439e6b5e41eb2c02dbd6cd13d3b"],["/zoo-quiz/static/media/bird.fde89cea.svg","fde89cea573550681a1aeeab856dd5fb"],["/zoo-quiz/static/media/book.ce3fade9.svg","ce3fade964374654805093fcb0cd05bc"],["/zoo-quiz/static/media/branch.f87cb03b.svg","f87cb03b1f842668c7850b1301e7bcec"],["/zoo-quiz/static/media/cat.3f09c4c4.svg","3f09c4c4f7d57a6c463e6e6fba4b5919"],["/zoo-quiz/static/media/cat.4566e888.svg","4566e88813f70faa77507053be85b53d"],["/zoo-quiz/static/media/coin04.5386564a.mp3","5386564ac6312c56d2c102cb7c3c108b"],["/zoo-quiz/static/media/coin05.69ca0709.mp3","69ca0709ea821d19fc374d9809e85119"],["/zoo-quiz/static/media/correct.75bcad55.svg","75bcad55e7a3bfae174c19196a40dfcf"],["/zoo-quiz/static/media/dialog.825687b7.svg","825687b70cfc77e0e77a66bb0d1c1880"],["/zoo-quiz/static/media/failure.9bc31357.svg","9bc31357700cc2aeba9a839d8a5991a1"],["/zoo-quiz/static/media/grass.bfd66af2.svg","bfd66af2e0384219a5c94a0e329f5610"],["/zoo-quiz/static/media/illustration-failure.4e176cc0.svg","4e176cc067e30cde7936150015f32887"],["/zoo-quiz/static/media/illustration-failure.85110127.svg","85110127f9cf995a2e730df6c0456fb8"],["/zoo-quiz/static/media/illustration-failure.b45d4fba.svg","b45d4fbaa1c0a397a5bfab38c267168f"],["/zoo-quiz/static/media/illustration-failure.d3111261.svg","d3111261a5b9db21914d90265cf3f5a9"],["/zoo-quiz/static/media/illustration-failure.e3158c95.svg","e3158c95874e05476d1f8febb3780ffb"],["/zoo-quiz/static/media/illustration-success.1e289749.svg","1e2897490bb5aa853730e42904044a2e"],["/zoo-quiz/static/media/illustration-success.2da138ed.svg","2da138ed950699944fb52aa8e26c6930"],["/zoo-quiz/static/media/illustration-success.30c5d8b1.svg","30c5d8b19defc588489827dea13f618e"],["/zoo-quiz/static/media/illustration-success.4ca85c82.svg","4ca85c827b2f496a4d68fd19286d03f3"],["/zoo-quiz/static/media/illustration-success.c5b9ec39.svg","c5b9ec39a3e0122022cce86d62815362"],["/zoo-quiz/static/media/illustration.049a0c26.svg","049a0c265f19d512da4c7e430af38bdd"],["/zoo-quiz/static/media/illustration.5372a14f.svg","5372a14f36e3007ded6fdbb5013d48d8"],["/zoo-quiz/static/media/illustration.5a60ca44.svg","5a60ca4422e973f9a0e745c82d2c9a21"],["/zoo-quiz/static/media/illustration.9c3438b3.svg","9c3438b32565b5fe0b9fe8e0b69cf45e"],["/zoo-quiz/static/media/illustration.fd5bd9bb.svg","fd5bd9bbc853c95f7c19bbe8ef7e7434"],["/zoo-quiz/static/media/incorrect.a56b48a8.svg","a56b48a81065fbfd15419cb529ef8c7b"],["/zoo-quiz/static/media/jump01.760c68af.mp3","760c68afcb60ae53dc0a30f12222b3f6"],["/zoo-quiz/static/media/jump04.6507b4af.mp3","6507b4af5c7e6660dbd87e13d87a4853"],["/zoo-quiz/static/media/lizard.24a4d726.svg","24a4d7268b8c6078eac8ba736c45fe76"],["/zoo-quiz/static/media/logo.e8b7bb34.svg","e8b7bb3491ba1fbfc0b93d2c11f0dd78"],["/zoo-quiz/static/media/medal.3377886b.svg","3377886b58f99bcb99fc9f91982fc703"],["/zoo-quiz/static/media/medal.48d619cf.svg","48d619cf7c7edd893b6492b5c38b49b2"],["/zoo-quiz/static/media/medal.870033f8.svg","870033f8841d2142c08f61795dcb7fb3"],["/zoo-quiz/static/media/mouse.044996a8.svg","044996a8095ec01feb5e05d551ae79a0"],["/zoo-quiz/static/media/ribbon.4f075868.svg","4f07586842168439ef164b02fda91e08"],["/zoo-quiz/static/media/ribbon.59515cc3.svg","59515cc3a8bc57bfb1420d5dac3218f0"],["/zoo-quiz/static/media/ribbon.9179a2ab.svg","9179a2ab03a2389e15884d0db11ea984"],["/zoo-quiz/static/media/ribbon.fef80b14.svg","fef80b1442a9cdfdd038c429b1686359"],["/zoo-quiz/static/media/success.a83784a6.svg","a83784a60d77e51558a72d8de327822b"],["/zoo-quiz/static/media/title.6893a235.svg","6893a2358a3d043e21028f4ef62b0da1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var i=new URL(e);return t&&i.pathname.match(t)||(i.search+=(i.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),i=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));0,e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});