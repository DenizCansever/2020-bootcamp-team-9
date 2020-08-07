package com.longparameterlist;

public class Main {

    public static void main(String[] args) {
    	
        Person person = new Person();

        System.out.println(person.raise("Filiz","Gözet" , "Software Developer", 6000, 23));
        System.out.println("-------------------------");
        System.out.println(person.raise(person));
        
    }
}