package team9.designpatterns.decorator;

public class Product implements Order {
	public double book = 20;
	public double puzzle = 100;
	public double notebook = 30;

	@Override
	public double operation() {
		double total = book + puzzle + notebook;
		return total;

	}

}