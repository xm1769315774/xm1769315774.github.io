/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7d7e587efb23d1f6db5eef2a09a36feb"
  },
  {
    "url": "about/index.html",
    "revision": "e2fedc0b08f77d1bf1dd02b2386b1de2"
  },
  {
    "url": "assets/css/0.styles.1265d445.css",
    "revision": "fdb47d6a5b1ed17ebe9623a763976049"
  },
  {
    "url": "assets/img/01.68fe4681.jpg",
    "revision": "68fe4681531acbd4d136c6d704b128c4"
  },
  {
    "url": "assets/img/bg04.c858c416.jpg",
    "revision": "c858c4168dd18fedd5568241445e2fde"
  },
  {
    "url": "assets/img/search.77214953.svg",
    "revision": "7721495388609799a2917d9392789f58"
  },
  {
    "url": "assets/imgs/head.jpg",
    "revision": "350f554add56a7fd561ad1b481daa1e7"
  },
  {
    "url": "assets/imgs/home01.jpg",
    "revision": "e17b6eb5d00e5578483279052ccc5c7e"
  },
  {
    "url": "assets/js/1.a8f1ea8c.js",
    "revision": "af525153e62be3bcebea26fc2f52420c"
  },
  {
    "url": "assets/js/10.0373185b.js",
    "revision": "76ed3a118f90aa027f136d28daa416a0"
  },
  {
    "url": "assets/js/11.31decc37.js",
    "revision": "a6b25b3a03c7522271243a5a2edf1f24"
  },
  {
    "url": "assets/js/12.52edc86f.js",
    "revision": "4e36738f47ae6300e952de07b94520d0"
  },
  {
    "url": "assets/js/13.a8c7ab72.js",
    "revision": "2e1c69bd30d3ae6d38b2ec74f7a1f8be"
  },
  {
    "url": "assets/js/14.e9802852.js",
    "revision": "3e110ae2f5deacd2c130f917811062b6"
  },
  {
    "url": "assets/js/15.d8d58ead.js",
    "revision": "a97e756bb2201a603e30dd7bc27b2fa9"
  },
  {
    "url": "assets/js/16.24439938.js",
    "revision": "3c2733ee5c7d11da0f2728743123d0a0"
  },
  {
    "url": "assets/js/17.dcde67c2.js",
    "revision": "63f1cca9c71571afbec90d82820cd021"
  },
  {
    "url": "assets/js/18.6f2b7a47.js",
    "revision": "315c7b6c6456ec85863f0ef4435ed860"
  },
  {
    "url": "assets/js/19.069ec5b5.js",
    "revision": "5e2fbe93ec32fc557cfbdb2343717d33"
  },
  {
    "url": "assets/js/2.34f85e76.js",
    "revision": "ea55339a79967c49fc870d1a065ece90"
  },
  {
    "url": "assets/js/20.1726ad32.js",
    "revision": "81cae4533730ab4441e29ba50812d357"
  },
  {
    "url": "assets/js/21.f87d8806.js",
    "revision": "c9c9c995dffd6c573c07e6dda340474d"
  },
  {
    "url": "assets/js/22.b4d498d7.js",
    "revision": "d25478ce324444bc3a815c89712e01eb"
  },
  {
    "url": "assets/js/23.1a6aa68a.js",
    "revision": "7e318c8a3f058e17faebc33f945a9084"
  },
  {
    "url": "assets/js/24.29a18128.js",
    "revision": "33374256957c61b848b5f3f71b97e3d2"
  },
  {
    "url": "assets/js/25.95bc4004.js",
    "revision": "79bcc5d55e9e5002d7ac9e928f58b81b"
  },
  {
    "url": "assets/js/26.b07c44a2.js",
    "revision": "50c7e51f70b7c9a5f6834e2c232d51c4"
  },
  {
    "url": "assets/js/27.0f21a64d.js",
    "revision": "47f8c77533c23ad4db33d4437b831c26"
  },
  {
    "url": "assets/js/28.dab75bef.js",
    "revision": "d72aec38d7d76b894536fad2696bc838"
  },
  {
    "url": "assets/js/29.e196f1c9.js",
    "revision": "c67adba96b8df7cf5a0d5f693a3b804d"
  },
  {
    "url": "assets/js/30.505235b6.js",
    "revision": "db9e53f81bce25d7d0929bc768c32bf9"
  },
  {
    "url": "assets/js/31.72ae8dec.js",
    "revision": "dbf9b2a3fd9e071aa6e4444fb33fc17a"
  },
  {
    "url": "assets/js/32.78388ef9.js",
    "revision": "8bf5256ab30d773821cf5f68e4f80ea8"
  },
  {
    "url": "assets/js/33.4caaf3b1.js",
    "revision": "d9fd534b085cb90667e2856d92df1525"
  },
  {
    "url": "assets/js/34.38546679.js",
    "revision": "b48436dadbd026a18d1182ec5069b8e9"
  },
  {
    "url": "assets/js/35.650e0ca9.js",
    "revision": "eea2d119c7e1b314262b1548e8fa4967"
  },
  {
    "url": "assets/js/36.fd8a7f91.js",
    "revision": "b20e98dba98be395bb798fa565703af7"
  },
  {
    "url": "assets/js/37.b4efc45b.js",
    "revision": "a3af0f499f356a0f67b95cbf1dcd5706"
  },
  {
    "url": "assets/js/38.dc882daf.js",
    "revision": "ef30fb0ac43e1d88ca8e13bf15bb8e4e"
  },
  {
    "url": "assets/js/39.e5788cb9.js",
    "revision": "9ca7378f3f983bb09a205258e123dd3e"
  },
  {
    "url": "assets/js/4.e80a3063.js",
    "revision": "1f3433b342579c80ef511547f1b9b228"
  },
  {
    "url": "assets/js/40.7b139c17.js",
    "revision": "0b610a4e45b855ab165268820082a3f6"
  },
  {
    "url": "assets/js/41.817808c4.js",
    "revision": "bf948a947415325f6d7577fe07322fb1"
  },
  {
    "url": "assets/js/42.a2891115.js",
    "revision": "f3518be76bfca2941017eb66faac2251"
  },
  {
    "url": "assets/js/43.50fe9f2b.js",
    "revision": "a6ae9d8c84477d3ee2cf8b75f40b5dcd"
  },
  {
    "url": "assets/js/44.51d78e5e.js",
    "revision": "80c425261e5624e9acf1a38ca7dba0ab"
  },
  {
    "url": "assets/js/45.2cf7c723.js",
    "revision": "d99ab8a79fa764deefb11e3d510ebe08"
  },
  {
    "url": "assets/js/46.476a5d31.js",
    "revision": "89a4d08b3e240782acce2c621726b245"
  },
  {
    "url": "assets/js/47.4e9e84fd.js",
    "revision": "a58cef6c2e1639021275f1723099d0a3"
  },
  {
    "url": "assets/js/48.d1a54dd7.js",
    "revision": "a8e748fb31ffb2ad8bd3d15a3d697780"
  },
  {
    "url": "assets/js/49.297441f6.js",
    "revision": "ef661782456b4dabf1cbea4d07925c99"
  },
  {
    "url": "assets/js/5.53239156.js",
    "revision": "62af2a69f7e18f1a24288c20c482d983"
  },
  {
    "url": "assets/js/50.ad832e72.js",
    "revision": "75a19a42a925dcc46e4a2979ea781b58"
  },
  {
    "url": "assets/js/51.8a47fefb.js",
    "revision": "7de7ccaff9cda9af239d3b208611297d"
  },
  {
    "url": "assets/js/52.e42f3532.js",
    "revision": "d998531d8a80e59e57d03d2ebfdf6648"
  },
  {
    "url": "assets/js/53.bb059c35.js",
    "revision": "d6cdb968adf1d28d59e53384a0a15ad2"
  },
  {
    "url": "assets/js/54.413d8c22.js",
    "revision": "a93a61ddc0230db81b1af3467f8eedf5"
  },
  {
    "url": "assets/js/55.7baee1e8.js",
    "revision": "9d7eb72464467415eca4d3ef3464da90"
  },
  {
    "url": "assets/js/56.f0216e85.js",
    "revision": "4b55bfa52c1a25880d6358d3dfcb155f"
  },
  {
    "url": "assets/js/57.7da04cec.js",
    "revision": "3fc8a66f76c76eb0786c5875a0dd8f06"
  },
  {
    "url": "assets/js/6.7a105530.js",
    "revision": "93f8545e63663002c2c16dd6b4389006"
  },
  {
    "url": "assets/js/7.082d2642.js",
    "revision": "b2aee296ea12f9aa3039aa6fae1ef093"
  },
  {
    "url": "assets/js/8.4928c0c9.js",
    "revision": "bb428433f917ec7ff61a22d0c6ea5302"
  },
  {
    "url": "assets/js/9.c2250104.js",
    "revision": "f9f277f22ee30be940a43b172726c980"
  },
  {
    "url": "assets/js/app.3d4b6ffd.js",
    "revision": "1798528d7eda175f251a0bebe73b3e0a"
  },
  {
    "url": "backEnd/Express/index.html",
    "revision": "fd55db4dbb057af447682a6c937d9b58"
  },
  {
    "url": "backEnd/MySQL/index.html",
    "revision": "948c39d141e2f23310b49a1a9bcd4cac"
  },
  {
    "url": "backEnd/MySQL/MySQL.html",
    "revision": "348cc4353107eae8ae0089192b0c0c4d"
  },
  {
    "url": "backEnd/NodeJS/index.html",
    "revision": "9a1dda03cbae16888ba3c9f07684cda4"
  },
  {
    "url": "backEnd/NodeJS/NodeJS.html",
    "revision": "f056959129b66d6918bb746b443e7ccb"
  },
  {
    "url": "categories/article/index.html",
    "revision": "4b734e9f57f8ac591daa6ee780aebf4e"
  },
  {
    "url": "categories/article/page/2/index.html",
    "revision": "b6c8a25635f38223d312857ad63fed3c"
  },
  {
    "url": "categories/article/page/3/index.html",
    "revision": "0505259819cbac85f35c0bde316e6ce9"
  },
  {
    "url": "categories/article/page/4/index.html",
    "revision": "af04c11678834aca95657c4c26373439"
  },
  {
    "url": "categories/chicken broth/index.html",
    "revision": "f222dd1c1c5a2c80689630bedbb896b0"
  },
  {
    "url": "categories/index.html",
    "revision": "0bae5aa66aceb4fcdec2294e22ede899"
  },
  {
    "url": "categories/life/index.html",
    "revision": "221af7866f7d89898b16834060227056"
  },
  {
    "url": "categories/note/index.html",
    "revision": "c83191e7eb327fc413d13a8b0820c723"
  },
  {
    "url": "categories/tool/index.html",
    "revision": "75ac3b80cdd0cdf9c3f7bf7bc10f6775"
  },
  {
    "url": "countUp/index.html",
    "revision": "c5941e9218bd6ff92fd8bdda020d0ec4"
  },
  {
    "url": "frontEnd/CSS/CSS.html",
    "revision": "e5d63ae1ce794219433cfbe8fc7cb1cd"
  },
  {
    "url": "frontEnd/CSS/index.html",
    "revision": "db8e610869149179bb0cd8d22794ecf6"
  },
  {
    "url": "frontEnd/HTML/HTML.html",
    "revision": "6f902695bd6c39c79bc4b284a8d7343e"
  },
  {
    "url": "frontEnd/HTML/index.html",
    "revision": "055b7a8aee26f5dac877195a56e5e59d"
  },
  {
    "url": "frontEnd/JavaScript/index.html",
    "revision": "814c812886541e204977c194144ad94a"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptAdvance01.html",
    "revision": "f327307c7e1517a7aedea308a8210354"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptAdvance02.html",
    "revision": "6f40bea4edc7dcca589e04889ec39cb9"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptBasics01.html",
    "revision": "3cb3b0010d7f65c2ed447bf52a0c96ad"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptBasics02.html",
    "revision": "626fdb91460d0afc5b6f2a6d4bb2ab01"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptHigh01.html",
    "revision": "b7c8aca96b37b690dadbcfc53ae1dd31"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptHigh02.html",
    "revision": "bd967182211f6f45b5ca607696bd840f"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptHigh03.html",
    "revision": "05069124a24e463e1231d3a8ecfc28cb"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptHigh04.html",
    "revision": "71959496ced2b5bbcdf0c404b2d8dc8d"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptHigh05.html",
    "revision": "b89690764f96db744ef1900cbfc99ee2"
  },
  {
    "url": "frontEnd/JavaScript/JavaScriptHigh06.html",
    "revision": "c7ce08af4a990d634fe07cd0437934cf"
  },
  {
    "url": "frontEnd/React/index.html",
    "revision": "d73bdcab90ef4ded29568bd079b693b7"
  },
  {
    "url": "frontEnd/React/React01.html",
    "revision": "8107be771d760257abd98806b7286831"
  },
  {
    "url": "frontEnd/React/React02.html",
    "revision": "22a41b182e4c1f57315d80fab259bad3"
  },
  {
    "url": "frontEnd/React/React03.html",
    "revision": "9cd477d19d7d8009e60ebfe15961130b"
  },
  {
    "url": "frontEnd/React/Redux.html",
    "revision": "e64075ec6cc9d81bde53bee85457c65f"
  },
  {
    "url": "frontEnd/React/Router.html",
    "revision": "3d1030f35e8a93c871026523651d204d"
  },
  {
    "url": "frontEnd/TypeScript/index.html",
    "revision": "89f047fb92d28bbdcb06e8b1b5a07c6f"
  },
  {
    "url": "frontEnd/TypeScript/TypeScript.html",
    "revision": "2cffdb2a266acd43accc3e1953a273b3"
  },
  {
    "url": "frontEnd/uni-app/index.html",
    "revision": "39f579482bcb11004907c26ca70ab123"
  },
  {
    "url": "frontEnd/uni-app/uni-app.html",
    "revision": "4377170ae33635daea0f9c90aa0d3a78"
  },
  {
    "url": "frontEnd/Vue/index.html",
    "revision": "95b6c94b75e0ad4b53842d1a23e3969b"
  },
  {
    "url": "frontEnd/Vue/Vue.html",
    "revision": "487221b7f82c77046786670fa95feb04"
  },
  {
    "url": "frontEnd/Vue/Vue02.html",
    "revision": "ee31fb75c95c91739971f55cc3978f01"
  },
  {
    "url": "frontEnd/Vue/Vue03.html",
    "revision": "ab4c7b5cb2466c8b9874b64aaded7260"
  },
  {
    "url": "icons/01.gif",
    "revision": "478beee4526f8087331c7703603e6d92"
  },
  {
    "url": "icons/01.jpg",
    "revision": "68fe4681531acbd4d136c6d704b128c4"
  },
  {
    "url": "icons/02.gif",
    "revision": "bcfc72397a43e19bc2edd42927f027dd"
  },
  {
    "url": "icons/02.jpg",
    "revision": "0b57bd8204eaaea47e565bcc7788e41f"
  },
  {
    "url": "icons/03.gif",
    "revision": "adddb860149fa45303f3523694a747a7"
  },
  {
    "url": "icons/avatar.png",
    "revision": "debe2494fda90eedff723b245fdaae09"
  },
  {
    "url": "icons/bg.jpg",
    "revision": "59b53b8a7afe08cd76e1a0e9fc499734"
  },
  {
    "url": "icons/layout01.jpg",
    "revision": "a271434381df69684288027f4d01531b"
  },
  {
    "url": "icons/layout02.jpg",
    "revision": "c48fecf6dfd8a207ecffb566bd91404b"
  },
  {
    "url": "icons/layout03.jpg",
    "revision": "d314a70ba0816c128fe8c6dd0087c8bc"
  },
  {
    "url": "icons/layout04.jpg",
    "revision": "587cec190e0a191ec07e3aa2d98f75bd"
  },
  {
    "url": "icons/login02.jpg",
    "revision": "e138e90fe6a7f83330412e157d9836bd"
  },
  {
    "url": "index.html",
    "revision": "73f694f4b2a074eacfad60b2d4908807"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "life/index.html",
    "revision": "02788dd15b768ca39059faf9c887c591"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "message/index.html",
    "revision": "e67450ae1cf01e0fa0f22f50718c31e7"
  },
  {
    "url": "music/index.html",
    "revision": "d9adfa8a241d0a14a864915f3c9657a4"
  },
  {
    "url": "other/git/index.html",
    "revision": "6cf6b7bcce0901ea117f4cdb6c79e566"
  },
  {
    "url": "other/Markdown/index.html",
    "revision": "c8792045190156c109dc6bb946fa8314"
  },
  {
    "url": "other/tool/index.html",
    "revision": "d9828651a6a6d5ea28fe9b43c45595a4"
  },
  {
    "url": "tag/countUp/index.html",
    "revision": "056e2e73447d1d20ef9397481dccbf83"
  },
  {
    "url": "tag/CSS/index.html",
    "revision": "620de7e7f4483f7e7760ed8aab15061d"
  },
  {
    "url": "tag/Express/index.html",
    "revision": "3d7803f0fee3642f162fe8cf23327af4"
  },
  {
    "url": "tag/git/index.html",
    "revision": "12ed8f28298978ef93ab154a8506b1bf"
  },
  {
    "url": "tag/h5/index.html",
    "revision": "2c64f4dd6989db3617375b92e00671f0"
  },
  {
    "url": "tag/index.html",
    "revision": "1e154b3163e225756cfe017d081c2ed5"
  },
  {
    "url": "tag/js/index.html",
    "revision": "dcba3ce0148e01a26b70a752cfaf99ee"
  },
  {
    "url": "tag/js/page/2/index.html",
    "revision": "2d783b0820e327086dfc2c0535fb87ed"
  },
  {
    "url": "tag/node/index.html",
    "revision": "9ff6b8ff487fa609f6f60af28945e31b"
  },
  {
    "url": "tag/note/index.html",
    "revision": "2356ef5da407a19b442ad4f701b6afa0"
  },
  {
    "url": "tag/NySQL/index.html",
    "revision": "f9fd730bf51f93f7802698e7a9bd0c7a"
  },
  {
    "url": "tag/React/index.html",
    "revision": "c807578f555dc164d722da9f8e615cdf"
  },
  {
    "url": "tag/tool/index.html",
    "revision": "e95f39fdfae005fd8b5a67441d31da1e"
  },
  {
    "url": "tag/TypeScript/index.html",
    "revision": "20faf4aaf034944c6a98436083412989"
  },
  {
    "url": "tag/uni-app/index.html",
    "revision": "27b4a725404292b380b7c80c472a799e"
  },
  {
    "url": "tag/Vue/index.html",
    "revision": "fb06bd9e8d3a207dd4c03ba27fbf69cf"
  },
  {
    "url": "tag/数据库/index.html",
    "revision": "de6e2cfee6b7224b831dad2a9a40fa6a"
  },
  {
    "url": "tag/生活/index.html",
    "revision": "9c2e4be182439f210939fdedda056bb8"
  },
  {
    "url": "timeline/index.html",
    "revision": "321d59c4e5f3f21276752eda93b3b936"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
