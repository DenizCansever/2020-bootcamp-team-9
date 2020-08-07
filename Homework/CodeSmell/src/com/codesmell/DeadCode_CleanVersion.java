package com.codesmell;

public class DeadCode_CleanVersion {
	
	// Write your code before return statement 
	public void reachable_method() {
        System.out.println("This is a reachable area!");
        System.out.println("Now it is reachable!");
        return;
    }
 

	public static void main(String[] args) {
		DeadCode_CleanVersion object = new DeadCode_CleanVersion();
		object.reachable_method();
	}
}
