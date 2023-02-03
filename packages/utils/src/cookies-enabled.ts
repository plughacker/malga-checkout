export const cookiesEnabled = () => {
  try {
    document.cookie = 'cookietest=1; SameSite=Strict;'
    const result = document.cookie.indexOf('cookietest=') !== -1
    document.cookie =
      'cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT'
    return result
  } catch (e) {
    return false
  }
}
