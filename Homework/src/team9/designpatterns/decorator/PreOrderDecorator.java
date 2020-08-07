package team9.designpatterns.decorator;

public class PreOrderDecorator implements Order {

	protected Order order;

	public PreOrderDecorator(Order o) {
		this.order = o;
	}

	@Override
	public double operation() {
		Product product = new Product();
		System.out.print("\nCalculating the total price of your pre-order...\n");
		double preorder = (product.operation()) - (product.operation() * 0.10);
		return preorder;

	}

}