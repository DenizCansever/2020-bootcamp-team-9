## Decorator Pattern

Decorator design pattern is used to modify the functionality of an object at runtime. At the same time other instances of the same class will not be affected by this, so individual object gets the modified behavior. Decorator design pattern is one of the structural design pattern (such as Adapter Pattern, Bridge Pattern, Composite Pattern) and uses abstract classes or interface with composition to implement.

This application calculates the total price the user will pay when ordering products from the online market using the decorator design pattern. If the user will pre-order, a 10% discount is made and the price is updated. If the user is a premium member, an additional 8% discount is applied on the pre-order. Updated payment results are shown on the screen.


![alt text](https://github.com/eteration-bootcamp/2020-bootcamp-team-9/blob/master/Homework/DecoratorPattern/DecoratorUMLDiagram.ucls?raw=true)
