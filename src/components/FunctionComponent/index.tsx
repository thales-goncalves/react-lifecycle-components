import { useEffect, useState } from 'react';

import styles from './styles.module.scss'

function FunctionComponent() {

	const [count, setCount] = useState(0);

	function handleIncrement() {
		setCount((prev) => prev + 1)
	}

	function handleDecrement() {
		setCount((prev) => prev - 1)
	}

	useEffect(() => {
		console.log('Functional - Building ... ')
	}, [])

	useEffect(() => {
		return () => {
			console.log('Functional - Destroying...')
		}
	}, [])

	useEffect(() => {
		// if (count) {
			console.log('Functional - Updateding...', count)
		// }
	}, [count])

	return (
		<div className={styles.container}>
			<h1>Functional Component Lifecycle</h1>

			<div className={styles.wrapper}>
				<button onClick={handleDecrement}> - </button>

				<h2>Counter: {count}</h2>

				<button onClick={handleIncrement}> + </button>
			</div>
		</div>
	)
}

export default FunctionComponent;