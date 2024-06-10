// jscow
// Version: 1.0
/**
 * Validates a target string based on the provided model validation rules.
 * 
 * @param {string} targetValidation - The string to be validated.
 * @returns {Object} An object with a method to validate against the provided model.
 */
function validate(targetValidation) {
    return {
        /**
         * Validates the target string against the model validation rules.
         * 
         * @param {Object} modelValidation - The validation model containing validation rules.
         * @param {boolean} modelValidation.required - Specifies if the target is required.
         * @param {number} modelValidation.minLength - Minimum length of the target.
         * @param {number} modelValidation.maxLength - Maximum length of the target.
         * @param {number} modelValidation.minValue - Minimum numeric value of the target.
         * @param {number} modelValidation.maxValue - Maximum numeric value of the target.
         * @param {boolean} modelValidation.specialCharacters - Allow special characters in the target.
         * @param {boolean} modelValidation.isEmail - Specifies if the target should be a valid email.
         * @returns {boolean} True if the target passes all validation rules, otherwise false.
         */
        with: function(modelValidation) {
            if (modelValidation.required && !targetValidation) {
                return false;
            }

            if (targetValidation.length < modelValidation.minLength) {
                return false;
            }
            if (targetValidation.length > modelValidation.maxLength) {
                return false;
            }

            if (modelValidation.minValue !== undefined && targetValidation < modelValidation.minValue) {
                return false;
            }
            if (modelValidation.maxValue !== undefined && targetValidation > modelValidation.maxValue) {
                return false;
            }

            if (!modelValidation.specialCharacters && /[^a-zA-Z0-9]/.test(targetValidation)) {
                return false;
            }

            if (modelValidation.isEmail) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(targetValidation)) {
                    return false;
                }
            }

            return true;
        }
    }
}

module.exports = validate ;