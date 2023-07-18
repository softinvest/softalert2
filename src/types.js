/**
 * @typedef { import('./SoftAlert').SoftAlert } SoftAlert
 * @typedef { import('softalert2').SoftAlertOptions } SoftAlertOptions
 * @typedef { import('softalert2').SoftAlertIcon } SoftAlertIcon
 * @typedef { import('softalert2').SoftAlertInput } SoftAlertInput
 * @typedef { import('softalert2').SoftAlertResult } SoftAlertResult
 */

/**
 * @typedef { import('./utils/Timer').default } Timer
 */

/**
 * @typedef GlobalState
 * @property {SoftAlert} [currentInstance]
 * @property {Element | null} [previousActiveElement]
 * @property {Timer} [timeout]
 * @property {NodeJS.Timeout} [restoreFocusTimeout]
 * @property {(this: HTMLElement, event: KeyboardEvent) => any} [keydownHandler]
 * @property {HTMLElement | (Window & typeof globalThis)} [keydownTarget]
 * @property {boolean} [keydownHandlerAdded]
 * @property {boolean} [keydownListenerCapture]
 * @property {Function} [swalCloseEventFinishedCallback]
 */

/**
 * @typedef DomCache
 * @property {HTMLElement} popup
 * @property {HTMLElement} container
 * @property {HTMLElement} actions
 * @property {HTMLElement} confirmButton
 * @property {HTMLElement} denyButton
 * @property {HTMLElement} cancelButton
 * @property {HTMLElement} loader
 * @property {HTMLElement} closeButton
 * @property {HTMLElement} validationMessage
 * @property {HTMLElement} progressSteps
 */
