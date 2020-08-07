package team9.designpatterns.test;

import team9.designpatterns.decorator.Order;
import team9.designpatterns.decorator.Product;
import team9.designpatterns.decorator.PreOrderDecorator;
import team9.designpatterns.decorator.PremiumOrderDecorator;

public class DecoratorPatternTest {
	
	public static void Apply(Order o) {
		System.out.print(o.operation());
	}	

	public static void main(String[] args) {
		System.out.print("Decorator Pattern\n");
		System.out.print("\nCalculating the total price of your order...\n");

		Order order = new Product();
		Apply(order);
		Apply(new PreOrderDecorator(order));
		Apply(new PremiumOrderDecorator(order));

	}
	
}
