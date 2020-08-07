package com.longparameterlist;

public class Main {

    public static void main(String[] args) {

        Person person = new Person(); 
        Person person2 = new Person("Zeynep", "Bekem", "Strategy Manager", 7500, 23);

        System.out.println(person.raise("Filiz","Gözet" ,"Software Developer",2000,22));
        System.out.println("-------------------------");
        System.out.println(person.raise(person));
        System.out.println("-------------------------");
        System.out.println(person2.raise(person));
    }
}