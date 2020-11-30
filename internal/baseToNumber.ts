import isSymbol from '../package/Lang/isSymbol'

const NAN = 0 / 0

/**
 * The base implementation of `toNumber` which doesn't ensure correct
 * conversions of binary, hexadecimal, or octal string values.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 */
function baseToNumber(value: any) {
	if (typeof value === 'number') {
		return value
	}
	if (isSymbol(value)) {
		return NAN
	}
	return +value
}

export default baseToNumber
