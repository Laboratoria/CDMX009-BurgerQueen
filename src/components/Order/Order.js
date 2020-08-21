import React from 'react';
import ItemToOrder from '../utils/ItemToOrder';
import Container from 'react-bootstrap/esm/Container';

const Order = ({ order }) => {
	const total = order.items.reduce((sum, item) => sum + item.subtotal, 0);
	return (
		<Container>
			<h3 style={{ color: 'white' }}>Confirmar Orden</h3>
			<hr color='white' size='7' />
			{order.items.map((product) => (
				<ItemToOrder key={product.id} product={product} />
			))}

			<hr color='white' size='7' />
			<div>
				<p>
					<strong>Total: ${total}</strong>
				</p>
			</div>
		</Container>
	);
};

export default Order;
