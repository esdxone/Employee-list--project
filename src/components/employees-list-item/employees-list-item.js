import './employees-list-item.css';

const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleProp, increase, favorite, onSalaryChange} = props;
        let liClasses = "list-group-item d-flex justify-content-between";

        if (increase) liClasses += " increase";
        if (favorite) liClasses += " like";

        return (
            <li className={liClasses}>
                <span onClick={onToggleProp} className="list-group-item-label" data-toggle="favorite">{name}</span>
                <input type="text" className="list-group-item-input" onChange={(e) => onSalaryChange(e.target.value)} defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={onToggleProp} type="button"
                        className="btn-cookie btn-sm "
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

export default EmployeesListItem;