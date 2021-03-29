// ===================================================
// DEFINE FUNCTION(S)
// ===================================================
function sum(int_1, int_2) {
         

if (!isNaN(int_1) && !isNaN(int_2))
	{
	return int_1+int_2;
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
  // It should return the sum of two numbers.
  var result = sum(1, 1);
  if (result !== 2) throw new Error('Expected sum(1, 1) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should ignore additional numbers.
          var result = sum(1, 1, -3, 5, 99, 100, 550);
	  if (result !== 2) throw new Error('Expected sum(1, 1, -3, 5, 99, 100, 550) to be 2 by ignoring the additional numbers. Received: ' + result);

  // --------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
          var result = sum(null, 1);
	  if (result !== 1) throw new Error('Expected sum(1, null) to be 1. Received: ' + result);
 // --------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
          var result = sum(null, null);
	  if (result !== 0) throw new Error('Expected sum(null, null) to be 0. Received: ' + result);
 

//--------------------------------------------------
  //Test case 5
 //-------------------------------------------------
 // When invoked with a character, it should return 0.
	 var result = sum('b', 1);
	 if (result !== 0) throw new Error('Expected sum(b, 1) to be 0. Received: ' + result);

//------------------------------------------------------
//Test case 6
//------------------------------------------------------
//When invoked with 2 character, it should return 0, according to the sum function
	var result = sum('a', 'z');
	if (result !== 0) throw new Error('Expected sum(a, z) to be 0. Received: ' + result);
	
//------------------------------------------------------
//Test case 7
//------------------------------------------------------
//When invoked with 1 special character, it should return 0, according to the sum function
	       var result = sum('a', 'z');
	       if (result !== 0) throw new Error('Expected sum(a, z) to be 0. Received: ' + result);
	
	console.log('All tests passed successfully.');
// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
