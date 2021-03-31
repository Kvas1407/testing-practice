// ==================================================
// DEFINE FUNCTION(S)
// ==================================================
function product(int_1, int_2) 
{

	if (int_1 == (null || undefined) && int_2 != (null || undefined))
	{
        return int_2;
	}else if (int_1 != (null || undefined) && int_2 == (null || undefined)){
	return int_1;
	}else if (!isNaN(int_1) && !isNaN(int_2))
	{
	return int_1*int_2;
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
  // It should return the product of two numbers.
var result = product(1, 2);
  if (result !== 2) throw new Error('Expected product(1, 2) to be 2. Received: ' + result);

  // --------------------------------------------------
  // Test Case 2
  // --------------------------------------------------
  // It should return 0 when either of the numbers are 0.

var result = product(1, 0);
 if (result !== 0) throw new Error('Expected product(1, 0) to be 0. Received: ' + result);
 //---------------------------------------------------
  // Test Case 3
  // --------------------------------------------------
  // It should ignore additional numbers.
 var result = product(1, 2, 3, 4, 5, 6, 7, 8);
	  if (result !== 2) throw new Error('Expected product(1, 2, 3, 4, 5, 6, 7, 8) to be 2. Received: ' + result);
 //----------------------------------------------------
  // Test Case 4
  // --------------------------------------------------
  // When invoked with only 1 number, it should return that number.
 var result = product(1, null);
	  if (result !== 1) throw new Error('Expected product(1, null) to be 1. Received: ' + result);
// --------------------------------------------------
  // Test Case 5
  // --------------------------------------------------
  // When invoked with no numbers, it should return 0.
 var result = product(null, null);
	if (result !== 0) throw new Error('Expected product(null, null) to be 0. Received: ' + result);

//-------------------------------------------------	
//Test case 6
//------------------------------------------
// When invoked with a character, it should return 0.
  var result = product('b', 1);
	         if (result !== 0) throw new Error('Expected product(b, 1) to be 0. Received: ' + result);
	

//------------------------------------------------------
//Test case 7
//------------------------------------------------------
//When invoked with 2 character, it should return 0, according to the function
        var result = product('a', 'z');
               if (result !== 0) throw new Error('Expected product(a, z) to be 0. Received: ' + result);

//------------------------------------------------------
//Test case 8
//------------------------------------------------------
//When invoked with 1 special character, it should return 0, according to the function
         var result = product('!', '1');
                   if (result !== 0) throw new Error('Expected product(!, 1) to be 0. Received: ' + result);
	
	
	
	
	console.log('All tests passed successfully.');

// ==================================================
// PRINT ERRORS
// ==================================================
} catch (e) {
  console.warn('Whoops, the following test did not pass:');
  console.error(e.message);
}
