import React, { Fragment, useState } from 'react';
import Boton from '../utils/Buton';
import Navbar from '../Navbar';
import mburger from '../assets/img/02-menu-burger.svg';
import ItemProductCatalog from '../utils/ItemProductCatalog';
import styles from './style.module.css';
import InfoClients from '../utils/InfoClients';
import InfoTotal from '../utils/InfoTotal';
import Modal from 'react-modal';
import Order from '../Order/Order.js';
import ShowWaiterName from '../utils/ShowWaiterName';
import ShowName from '../utils/ShowName';
import { db } from '../../firebase';

Modal.setAppElement('#root');

const Burger = ({
	dataHamburger,
	dataIngredients,
	dataExtras,
	dataDrinks,
	dataAccompaniments,
	order,
	setOrder,
	addingProductToOrder,
	deletingProductToOrder,
}) => {
	const [confBurger, setConfBurger] = useState({
		tipo: undefined,
		ingrediente: undefined,
		extra: undefined,
	});

	const total = order.items.reduce((sum, item) => sum + item.subtotal, 0);

	const [modalIsOpen, setModalIsOpen] = useState(false);

	const [userName, setUserName] = useState();
	const [waiterName, setWaiterName] = useState();

	const sendOrder = async () => {
		try {
			const convertToObject = { ...order };
			await db.collection('orders').doc().set(convertToObject);
			console.log('ya se envío data a firebase D:');
			setModalIsOpen(false);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Fragment>
			<Navbar />
			<div className={styles.logoUp}>
				<Boton image={mburger} adress='/menu-burger' />
			</div>
			<InfoClients setUserName={setUserName} />
			<section className={styles.container}>
				<strong>HAMBURGUESAS</strong>
				<br />
				<div className={styles.Burger}>
					<div className={styles.containerHamburguer}>
						<p>1.Tipo</p>
						{dataHamburger.map((product) => (
							<ItemProductCatalog
								key={product.id}
								product={product}
								order={order}
								setOrder={setOrder}
								addingProductToOrder={addingProductToOrder}
								deletingProductToOrder={deletingProductToOrder}
							/>
						))}

						<button
							className={styles.buttonNext}
							onClick={(product) => {
								setConfBurger({
									...confBurger,
									tipo: product,
								});
							}}
						>
							seleccionar ingrediente
						</button>
					</div>
					{confBurger.tipo && (
						<>
							<div className={styles.genericCont}>
								<p>2.Ingrediente</p>
								<div className={styles.containerIngredients}>
									{dataIngredients.map((product) => (
										<ItemProductCatalog
											key={product.id}
											product={product}
											order={order}
											setOrder={setOrder}
											addingProductToOrder={addingProductToOrder}
											deletingProductToOrder={deletingProductToOrder}
										/>
									))}
								</div>

								<button
									className={styles.buttonNext}
									onClick={(product) => {
										setConfBurger({
											...confBurger,
											ingrediente: product,
										});
									}}
								>
									seleccionar extra
								</button>
							</div>
							{confBurger.ingrediente && (
								<div className={styles.containerExtras}>
									<p>3.Extra</p>
									{dataExtras.map((product) => (
										<ItemProductCatalog
											key={product.id}
											product={product}
											order={order}
											setOrder={setOrder}
											addingProductToOrder={addingProductToOrder}
											deletingProductToOrder={deletingProductToOrder}
										/>
									))}
								</div>
							)}
						</>
					)}
				</div>

				<div className={styles.bebidasAccom}>
					<div className={styles.genericCont}>
						<p>BEBIDAS</p>
						<div className={styles.containerDrinks}>
							{dataDrinks.map((product) => (
								<ItemProductCatalog
									key={product.id}
									product={product}
									order={order}
									setOrder={setOrder}
									addingProductToOrder={addingProductToOrder}
									deletingProductToOrder={deletingProductToOrder}
								/>
							))}
						</div>
					</div>

					<div className={styles.genericCont}>
						<p>ACOMPAÑAMIENTOS</p>
						<div className={styles.containerAccompaniments}>
							{dataAccompaniments.map((product) => (
								<ItemProductCatalog
									key={product.id}
									product={product}
									order={order}
									setOrder={setOrder}
									addingProductToOrder={addingProductToOrder}
									deletingProductToOrder={deletingProductToOrder}
								/>
							))}
						</div>
					</div>
				</div>
			</section>
			<InfoTotal total={total} />
			<div className={styles.contentButtonNext}>
				<button
					className={styles.buttonNext}
					onClick={() => setModalIsOpen(true)}
				>
					Enviar pedido a cocina
				</button>
			</div>
			<div className={styles.modalContainer}>
				<Modal className={styles.Modal} isOpen={modalIsOpen}>
					<div>
						<ShowWaiterName waiterName={waiterName} />
						<ShowName userName={userName} />
						<Order order={order} />
					</div>

					<div className={styles.buttonsContainer}>
						<button
							className={styles.buttonNext}
							onClick={() => setModalIsOpen(false)}
						>
							Cancelar
						</button>
						<button className={styles.buttonNext} onClick={sendOrder}>
							Enviar a Cocina
						</button>
					</div>
				</Modal>
			</div>
		</Fragment>
	);
};

export default Burger;
