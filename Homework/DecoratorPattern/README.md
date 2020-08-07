# Decorator Design Pattern

In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class.

Decorator design pattern is used to modify the functionality of an object at runtime. At the same time other instances of the same class will not be affected by this, so individual object gets the modified behavior. Decorator design pattern is one of the structural design pattern (such as Adapter Pattern, Bridge Pattern, Composite Pattern) and uses abstract classes or interface with composition to implement.

### Decorator Design Pattern Application

This application calculates the total price the user will pay when ordering products from the online market using the decorator design pattern. If the user will pre-order, a 10% discount is made and the price is updated. If the user is a premium member, an additional 8% discount is applied on the pre-order. Updated payment results are shown on the screen.

##### Decorator Design Pattern – UML Class Diagram

<p align="center">
  <img witdth="500px" height="250px" src="https://github.com/eteration-bootcamp/2020-bootcamp-team-9/blob/master/Homework/DecoratorPattern/DecoratorUMLDiagram.jpg?raw=true" />
</p>
