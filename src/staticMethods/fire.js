/**
 * Main method to create a new SoftAlert2 popup
 *
 * @param  {...SoftAlertOptions} args
 * @returns {Promise<SoftAlertResult>}
 */
export function fire(...args) {
  const Swal = this // eslint-disable-line @typescript-eslint/no-this-alias
  return new Swal(...args)
}
