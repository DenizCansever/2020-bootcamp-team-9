package com.deadcode;

// A code block/statement in Java to which the control never reaches and never 
// gets executed during the lifetime of the program is known as 
// unreachable block/statement.

public class DeadCode_SmellVersion {
		
	public void unreachable_method1() {
        System.out.println("This is a reachable area!");
        return;
        System.out.println("This is an unreachable code");
    }
 
    public void unreachable_method2() {
        System.out.println("This is a reachable area!");
        if (true) {
            return;
        }
        System.out.println("This is an unreachable code");
    }
 
    public void unreachable_method3() {
        System.out.println("This is a reachable area!");
        while (true) {
            return;
        }
        System.out.println("This is an unreachable code");
    }

	public static void main(String[] args) {
		DeadCode_SmellVersion object = new DeadCode_SmellVersion();
		object.unreachable_method1();
		object.unreachable_method2();
		object.unreachable_method3();
	}

}
