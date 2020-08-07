package com.longparameterlist;

public class Person{
	
    private String firstName;
    private String lastName;
    private String position;
    private int salary;
    private int age;

    public Person() { //default constructor

        this("Deniz","Cansever","Software Developer",5000,26);
    }
    
    
    public Person(String firstName,String lastName,String position, int salary,int age) { 
        this.firstName=firstName;
        this.lastName=lastName;
        this.position= position;
        this.salary=salary;
        this.age=age;
    }

    @Override
    public String toString() {
        return "Full Name: " + firstName + " " + lastName + "\nPosition: " + position + "\nSalary: " + salary + "\nAge: " + age;
    }


    public String getFirstName() {
        return firstName;
    } 
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getPosition() {
        return position;
    }
    
    public void setPosition(String position) {
        this.position = position;
    }
    
    public int getSalary() {
        return salary;
    }
    
    public void setSalary(int salary) {
        this.salary = salary;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }

    public String raise(String firstName,String lastName,String position, int salary,int age) {
        salary += 500;
        return "Full Name: " + firstName + " " + lastName + "\nPosition: " + position + "\nSalary: " + salary + "\nAge: " + age;
    }

    public String raise(Person person) {
        this.salary += 500;
        return toString();
    }
}
