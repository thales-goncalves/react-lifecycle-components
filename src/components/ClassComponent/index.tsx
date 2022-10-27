import React from 'react'


import styles from './styles.module.scss'

interface ClassComponentProps {}

interface ClassComponentState {
	count: number
}

class ClassComponent extends React.Component<ClassComponentProps, ClassComponentState> {

	constructor(props: ClassComponentProps) {
		super(props);
		this.state = {
			count: 0
		};

		this.handleIncrement = this.handleIncrement.bind(this);
		this.handleDecrement = this.handleDecrement.bind(this);
	}

	handleIncrement() {
		this.setState({ count: this.state.count + 1 });
	}

	handleDecrement() {
		this.setState({ count: this.state.count - 1 });
	}


	// The mounting phase is when a new component is created and inserted into the DOM or,
	// in other words, when the life of a component begins. This can only happen once, and
	// is often called “initial render.”
	componentDidMount(): void {
		console.log('Class - Building ... ')
	}

	// The updating phase is when the component updates or re-renders. This reaction is 
	// triggered when the props are updated or when the state is updated. This phase can
	// occur multiple times, which is kind of the point of React.
	componentDidUpdate(): void {
		console.log('Class - Updateding...', this.state.count)
	}

	// The last phase within a component's lifecycle is the unmounting phase, when the component
	// is removed from the DOM.
	componentWillUnmount(): void {
		console.log('Class - Destroying ... ')
	}

	render() {
		return (
			<div className={styles.container}>
				<h1>Class Component Lifecycle</h1>

				<div className={styles.wrapper}>
					<button onClick={this.handleDecrement}> - </button>

					<h2>Counter: {this.state.count}</h2>

					<button onClick={this.handleIncrement}> + </button>
				</div>
			</div>
		)
	}
}

export default ClassComponent;