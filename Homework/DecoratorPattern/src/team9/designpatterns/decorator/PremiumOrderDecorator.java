package team9.designpatterns.decorator;

public class PremiumOrderDecorator implements Order {

	protected Order order;

	public PremiumOrderDecorator(Order o) {
		this.order = o;
	}

	@Override
	public double operation() {
		Product product = new Product();
		System.out.print("\nAdding premium discount to your order...\n");
		double premiumorder = ((product.operation()) - (product.operation() * 0.10))
				- (((product.operation()) - (product.operation() * 0.10)) * 0.08);
		return premiumorder;

	}

}