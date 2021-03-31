// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function quotient(int_1, int_2) {

	if (int_1 == 0 && int_2 != 0)
			{
	                return 'ERROR';
			}else if (int_1 != 0 && int_2 == 0){
			return 'ERROR';
			}else if (!isNaN(int_1) && !isNaN(int_2))
			{
			return int_1 / int_2;
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
  // It should return the quotient of two numbers.
  var result = quotient(2, 2);
  if (result !== 1) throw new Error('Expected quotient(2, 2) to be 1. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return the text 'ERROR' when the second number is 0.
 var result = quotient(1, 0);
	if(result !== 'ERROR') throw new Error('Expected quotient(1,0) to be ERROR. Received: ' + result)

   // --------------------------------------------------
   // Test Case 3
    // --------------------------------------------------
	// It should return the text 'ERROR' when the first number is 0.
	var result = quotient(0, 1);
	if(result !== 'ERROR') throw new Error('Expected quotient(0,1) to be ERROR. Received: ' + result)
	
	// Test Case 4
  // --------------------------------------------------
  // It should ignore additional numbers.

  // --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.

  // --------------------------------------------------
  // Test Case 6
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.

  console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
