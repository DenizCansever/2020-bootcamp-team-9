package com.deadcode;

public class DeadCode_CleanVersion {
	
	// Write your code before return statement 
	public void reachable_method1() {
        System.out.println("This is a reachable area!");
        System.out.println("Now it is reachable!");
        return;
    }
 
    public void reachable_method2() {
        System.out.println("This is a reachable area!");
        if (true) {
        	System.out.println("This is an unreachable code");
            return;
        }
    }
 
    public void reachable_method3() {
        System.out.println("This is a reachable area!");
        while (true) {
        	System.out.println("This is an unreachable code");
            return;
        }
    }
 

	public static void main(String[] args) {
		DeadCode_CleanVersion object = new DeadCode_CleanVersion();
		object.reachable_method1();
		object.reachable_method2();
		object.reachable_method3();
	}
}
