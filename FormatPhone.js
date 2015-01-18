
	var FormatPhone= {};

	// Format a string to a phone number.
	// Input:
	// phone: Either of the format
	//	1234567890 (10 numerics) or
	//  1234567890x124 (10 numerics) followed by "x" followed by 1 to 6 digits for the extension.
	//
	// Returns:
	// (123)456-7890 (for 10 digits string)
	// (123)456-7890x123 (for 10 digit string, "x", and up to 6 digit extension.
	// "" Not a valid phone that adheres to the input.

	function formatPhone (phone)
	{
		// Check if it is 10 digits without extension
		var patt = /^(\d{3})(\d{3})(\d{4})$/;
 		var res = patt.test(phone);

		if (res)
		{
			// handle the case of 10 digits and no extension
			return phone.replace (patt, "("+'$1'+")"+'$2'+"-"+'$3');
		}

		// Lets test if it is 10 digits with an extension as in this example 8008872213x123
		// the extension can be of of 1 to 6 digits max

		patt = /^(\d{3})(\d{3})(\d{4})(x)(\d{1,6})$/;
 		res = patt.test(phone);
		if (res)
		{
			return phone.replace (patt,"("+'$1'+")"+'$2'+"-"+'$3'+'$4'+'$5');
		}
		// Not a matched phone pattern. Return an emplty string to indicate an error to the caller
		return "";
	}
	FormatPhone.formatPhone = formatPhone;
