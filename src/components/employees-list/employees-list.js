import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onChangeInputSalary }) => {

	const elements = data.map(item => {
		const { id, ...itemProps } = item
		return (
			<EmployeesListItem key={id}
				{...itemProps}
				onDelete={() => onDelete(id)}
				onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
				onChangeInputSalary={(newsalary) => {
					onChangeInputSalary(id, newsalary)
					console.log(newsalary)
				}
				} 
				/>
		)
	})

	return (
		<ul className="app-list list-group">
			{elements}
		</ul>
	)
}

export default EmployeesList;