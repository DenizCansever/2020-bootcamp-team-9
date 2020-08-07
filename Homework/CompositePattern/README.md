# Composite Pattern

The composite design pattern belongs to the structural group and is to regulate the hierarchical use of object patterns in the tree structure. According to dofactory.com, the frequency of use is around 80%, so it is an important pattern that is used frequently. This design pattern creates the parts that make up the structure in the community of objects that make up a structure according to the hierarchical structure of the tree and provides order for the relations between them.

## Composite Design Pattern Application
Composite pattern organizes hierarchies. We considered course types and course hierarchy as an example of this hierarchy. At the top there are the course types. Then, under that, again, the course types or courses can be found. This ranking goes all the way to the bottom until courses appear.

#### Composite Design Pattern – UML Class Diagram

* Component -> ICourse:  Component declares the interface for objects in the composition and for accessing and managing its child components. It also implements default behavior for the interface common to all classes as appropriate.
* Leaf -> Course: Leaf defines behavior for primitive objects in the composition. It represents leaf objects in the composition.
* Composite -> CourseType: Composite stores child components and implements child related operations in the component interface.
* Client -> CompositeDemo: Client manipulates the objects in the composition through the component interface.

<p align="center">
  <img src="https://github.com/eteration-bootcamp/2020-bootcamp-team-9/blob/master/Homework/CompositePattern/images/compositepattern_UMLClassDiagram.png?raw=true" />
  </p>

### Detailed UML Class Diagram

<p align="center">
  <img src="https://github.com/eteration-bootcamp/2020-bootcamp-team-9/blob/master/Homework/CompositePattern/images/CompositePatternUMLClassDiagram.png?raw=true" />
</p>


