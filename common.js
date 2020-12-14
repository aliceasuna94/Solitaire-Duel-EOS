function getLanguageFromLanguageCode(languageCode) {
  if (/en/g.exec(languageCode)) {
    return 'en'
  }
  if (/zh/g.exec(languageCode)) {
    return 'cn'
  }
  return 'en'
}

var ua = navigator.userAgent.toLowerCase()
var deviceLang = getLanguageFromLanguageCode(navigator.language)

document.querySelector('html').setAttribute('lang', deviceLang)
