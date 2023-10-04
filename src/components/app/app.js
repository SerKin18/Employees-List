import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [
				{ name: 'John C.', salary: 800, increase: false, rise: true, id: 1 },
				{ name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2 },
				{ name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3 }
			],
			term: '',
			filt: 'all'
		}
		this.maxId = 4;
	}
	deleteItem = (id) => {
		this.setState(({ data }) => {
			// const index = data.findIndex(elem => elem.id === id)
			// const before=data.splice(0,index);
			// const after=data.slice(index+1);
			// const newArr=[...before, ...after]
			return {
				data: data.filter(item => item.id !== id)
			}
		})
	}
	addItem = (name, salary) => {
		const newItem = {
			name,
			salary,
			increase: false,
			rise: false,
			id: this.maxId++
		}
		console.log(newItem.id)
		this.setState(({ data }) => {
			const newData = [...data, newItem];
			return {
				data: newData
			}
		})
	}

	onToggleProp = (id, prop) => {
		this.setState(({ data }) => ({
			data: data.map(item => {
				if (item.id === id) {
					return { ...item, [prop]: !item[prop] }
				}
				return item
			})
		}))
	}
onChangeInputSalary =(id,newsalary)=>{
	console.log(newsalary)
	this.setState(({data})=>({
		data:data.map(item =>{
			if(item.id === id){
				return {...item, salary: newsalary }
			}
			return item
		})
	}))
}

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items
		}
		return items.filter(item => {
			return item.name.toLowerCase().indexOf(term) > -1
		})
	}
	onUpdataSearch = (term) => {
		this.setState({ term })
	};

	filterEmp = (items, filt) => {
		switch (filt) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'moreThen1000':
				return items.filter(item => item.salary > 1000);
			default:
				return items
		}
	}

	onUpfilterEmp = (filt) => {
		this.setState({ filt })
	}
	render() {
		const { data, term, filt } = this.state
		const employees = this.state.data.length;
		const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterEmp(this.searchEmp(data, term), filt)

		return (
			<div className="app">
				<AppInfo
					employees={employees}
					increased={increased} />

				<div className="search-panel">
					<SearchPanel
						onUpdataSearch={this.onUpdataSearch} />
					<AppFilter
					filter={filt}
						onUpfilterEmp={this.onUpfilterEmp} />
				</div>

				<EmployeesList
					data={visibleData}
					onDelete={this.deleteItem}
					onToggleProp={this.onToggleProp}
					onChangeInputSalary={this.onChangeInputSalary}
				/>
				<EmployeesAddForm
					onAdd={this.addItem} />
					
			</div>
			
		);
	}

}

export default App;