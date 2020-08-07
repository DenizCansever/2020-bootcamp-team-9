package com.codesmell;

/* Here is the corrected version of redundant code or code that adds nothing to the to the program. */
public class DeadCode_CleanVersion {

	public void clean_function1() {
        int a = 4, b = 5, c = 0;
        c = a + b;
        System.out.format("a + b = %d%n", c);
	}
	
	public void clean_function2() {
		int a = 1;
		int b = 10;

		if(a < b) {
			System.out.println("Now if statement used.");
		}
	}

	public static void main(String[] args) {
		DeadCode_CleanVersion object = new DeadCode_CleanVersion();
		object.clean_function1();
		object.clean_function2();
	}
}
