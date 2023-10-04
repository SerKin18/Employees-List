import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {

	onChangeInputSalary = (e) => {
		let changeInput = 0
		if (isNaN(e.target.value)) {
			return changeInput = 0
		}
		else
			changeInput = Number(e.target.value)
		console.log(changeInput)
		this.props.onChangeInputSalary(changeInput)
	}


	render() {
		const { name, salary, onDelete, onToggleProp, increase, rise, } = this.props
		let classNames = "list-group-item d-flex justify-content-between";
		if (increase) {
			classNames += ' increase';
		} else
			if (rise) {
				classNames += ' like'
			}

		return (
			<li className={classNames}>
				<span className="list-group-item-label"
					onClick={onToggleProp}
					data-toggle="rise"
				>{name}</span>
				<input type="text" className="list-group-item-input"
					onChange={this.onChangeInputSalary}
					value={salary}
				/>
				<label>$</label>
				<div className='d-flex justify-content-center align-items-center'>
					<button type="button"
						className="btn-cookie btn-sm "
						onClick={onToggleProp}
						data-toggle="increase">
						<i className="fas fa-cookie"></i>
					</button>

					<button type="button"
						className="btn-trash btn-sm "
						onClick={onDelete}>
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}


}



export default EmployeesListItem;