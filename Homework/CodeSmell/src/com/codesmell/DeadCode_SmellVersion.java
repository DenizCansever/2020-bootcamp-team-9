package com.codesmell;

/* Dead code - code that is executed but redundant, either the results were never used or adds 
   nothing to the rest of the program. The execution of dead code wastes computation time and memory. */
public class DeadCode_SmellVersion {
    
    // Created but never used.
    public void smell_function1() {
        int a = 4, b = 5, c = 0;
        c = a + b;
        System.out.format("a + b = %d", c);
    }

    // Again this function is redundant, because it never prints the string.
    public void smell_function2() {
		int a = 1;
		int b = 10;

		if(a > b) {
			System.out.println("Never comes here because of if statement.");
        }
    }

    
	public static void main(String[] args) {
        DeadCode_SmellVersion object = new DeadCode_SmellVersion();
        object.smell_function2();
	}
}
