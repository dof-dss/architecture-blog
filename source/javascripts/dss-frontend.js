var DSSFrontend = {

  enableGoogleAnalytics: function () {
    // how do we recreate the cookies?
    window['ga-disable-UA-150837477-4'] = false
  },

  disableGoogleAnalytics: function () {
    DSSFrontend.deleteCookie('_ga')
    DSSFrontend.deleteCookie('_gid')
    window['ga-disable-UA-150837477-4'] = true
  },

  setCookie: function (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  },

  getCookie: function (cname) {
    var name = cname + '='
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  },

  deleteCookie: function (cname) {
    var expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC'
    document.cookie = cname + '=;' + expires + ';path=/'
  },

  showElement: function (element) {
    var x = document.getElementById(element)
    x.style.display = 'block'
  },

  hideElement: function (element) {
    var x = document.getElementById(element)
    x.style.display = 'none'
  },

  showCookieConfirmation: function () {
    DSSFrontend.showElement('dss-cookie-confirmation')
  },

  hideCookieConfirmation: function () {
    DSSFrontend.hideElement('dss-cookie-confirmation')
  },

  showCookieMessage: function () {
    DSSFrontend.showElement('dss-cookie-message')
    DSSFrontend.hideCookieConfirmation()
  },

  hideCookieMessage: function () {
    DSSFrontend.hideElement('dss-cookie-message')
  },

  showCookieDialogue: function () {
    DSSFrontend.showElement('global-cookie-message')
  },

  hideCookieDialogue: function () {
    DSSFrontend.hideElement('global-cookie-message')
  },

  checkCookies: function () {
    var cookieConsent = DSSFrontend.getCookie('cookie-preferences-set')
    if (cookieConsent !== '') {
      // cookie message has been displayed before
      DSSFrontend.hideCookieDialogue()
    } else {
      // show the cookie consent dialogue
      DSSFrontend.showCookieDialogue()
    }
    // setup the event listeners for the cookie consent dialogue
    document.getElementById('accept-cookies-btn').addEventListener('click', DSSFrontend.acceptCookies)
    document.getElementById('reject-cookies-btn').addEventListener('click', DSSFrontend.rejectCookies)
    document.getElementById('hide-confirmation-btn').addEventListener('click', DSSFrontend.hideCookieDialogue)
  },

  // function to respond to 'Yes' to allow analytics cookies
  acceptCookies: function () {
    // update the consent cookie
    DSSFrontend.setCookie('cookie-policy', '{"essential":true,"settings":false,"usage":true,"campaigns":false}', 365)
    DSSFrontend.enableGoogleAnalytics()
    DSSFrontend.setCookie('cookie-preferences-set', 'true', 365)
    DSSFrontend.hideCookieMessage()
    DSSFrontend.showCookieConfirmation()
  },

  // function to respond to 'No' to allow analytics cookies
  rejectCookies: function () {
    DSSFrontend.setCookie('cookie-policy', '{"essential": true,"settings":false,"usage":false,"campaigns":false}', 365)
    DSSFrontend.disableGoogleAnalytics()
    DSSFrontend.setCookie('cookie-preferences-set', 'true', 365)
    DSSFrontend.hideCookieDialogue()
  }
}
