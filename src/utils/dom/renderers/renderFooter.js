import * as dom from '../../dom/index.js'

/**
 * @param {SoftAlert} instance
 * @param {SoftAlertOptions} params
 */
export const renderFooter = (instance, params) => {
  const footer = dom.getFooter()
  if (!footer) {
    return
  }

  dom.toggle(footer, params.footer)

  if (params.footer) {
    dom.parseHtmlToContainer(params.footer, footer)
  }

  // Custom class
  dom.applyCustomClass(footer, params, 'footer')
}
