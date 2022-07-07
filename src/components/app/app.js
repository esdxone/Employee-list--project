import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: "John Doe", salary: "1500", increase: true, favorite: true, id: 1},
        {name: "Doe Jhon", salary: "400", increase: false, favorite: false, id: 2},
        {name: "mr. Motroskin", salary: "10", increase: true, favorite: true, id: 3}
      ],
      term: '',
      filter: ''
    }
    this.idCount = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        return {
          data: data.filter(item => item.id !== id)
        }
    })
  }

  onAddItem = (name, salary) => {
    const formData = [{
      name: name,
      salary: salary,
      increase: false,
      id: this.idCount++
    }]
    this.setState(({data}) => ({
      data: [...data,...formData]
    }))
  }

  onToggleProp = (id, prop) => {
      this.setState(({data}) => ({
          data: data.map(item => {
            if (item.id === id) {
                return {...item, [prop]: !item[prop]}
            }
            return item;
          })
      }))
  }

  searchEmployyes = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter(item => {
        return item.name.indexOf(term) > -1
    });
  }

  onSearchUpdate = (term) => {
    this.setState({term});
  }

  onFilter = (items ,filter) => {
    switch (filter) {
      case 'increase':
        return items.filter(item => item.increase);
      case 'salary':
        return items.filter(item => item.salary > 1000)
       default:
         return items
    }

  }

  onFilterUpdate = (filter) => {
    this.setState({filter})
  }

  onSalaryChange = (id, salary) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
            return {...item, salary: salary}
        }
        return item;
      })
  }))
  }

  render() {
    const totalEmployees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length
    const {data, term, filter} = this.state;
    const visibleItems = this.onFilter(this.searchEmployyes(data ,term), filter)
    const filterCurrentValue = filter;
    return (
      <div className="app">
          <AppInfo
          totalEmployees={totalEmployees}
          increased={increased}
          />

          <div className="search-panel">
              <SearchPanel
              onSearchUpdate={this.onSearchUpdate}
              />
              <AppFilter
              filterCurrentValue={filterCurrentValue}
              onFilterUpdate={this.onFilterUpdate}
              />
          </div>

          <EmployeesList
          data={visibleItems}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onSalaryChange={this.onSalaryChange}
          />
          <EmployeesAddForm onAddItem={this.onAddItem}/>
      </div>
    )
  }
}

export default App;
