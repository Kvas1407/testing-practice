// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function difference(int_1, int_2) {

	if (!isNaN(int_1) && !isNaN(int_2))
		        {
		        return int_1-int_2;
		        } else
		        {
		        return 0;
		        }
}

// ==================================================
// DEFINE AND EXECUTE TEST CASES
// ==================================================
try {
  // --------------------------------------------------
  // Test Case 1
  // --------------------------------------------------
  // It should return the difference of two numbers.
  var result = difference(1, 1);
  if (result !== 0) throw new Error('Expected difference(1, 1) to be 0. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.

  var result = difference(1, 1, 2, 3, 4, 5, 6, 7);
  if (result !== 0) throw new Error('Expected difference(1, 1, 2, 3, 4, 5, 6, 7) to be 0. Received: ' + result);
  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

          var result = difference(1, null);
	  if (result !== 1) throw new Error('Expected difference(1, null) to be 1. Received: ' + result);
  // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
	var result = difference(null, null);
	if (result !== 0) throw new Error('Expected difference(null, null) to be 0. Received: ' + result);
 //--------------------------------------------------

 //Test case 5
 //-------------------------------------------------
 // When invoked with a character, it should return 0.
	var result = difference('b', 1);
	if (result !== 0) throw new Error('Expected difference(b, 1) to be 0. Received: ' + result);

 //------------------------------------------------------
 //Test case 6
 //------------------------------------------------------
 //When invoked with 2 character, it should return 0, according to the difference function
	var result = difference('k', 's');
	if (result !== 0) throw new Error('Expected difference(k, s) to be 0. Received: ' + result);

 //------------------------------------------------------
 //Test case 7
 //------------------------------------------------------
 //When invoked with 1 special character, it should return 0, according to the difference function
	var result = difference('!', 1);
	if (result !== 0) throw new Error('Expected difference(!, 1) to be 0. Received: ' + result);

//------------------------------------------------------
//Test case 8
//------------------------------------------------------
//When invoked with 2 special characters, it should return 0, according to the sum function
        var result = difference('$', ')');
        if (result !== 0) throw new Error('Expected difference($, )) to be 0. Received: ' + result);
	
	
  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
