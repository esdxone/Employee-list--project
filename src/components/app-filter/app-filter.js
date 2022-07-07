import "./app-filter.css";

const AppFilter = (props) => {
    const {onFilterUpdate, filterCurrentValue} = props;

    const filterElements = [
        {label: 'Все сотрудники', filter: ''},
        {label: 'На повышение', filter: 'increase'},
        {label: 'З/П больше 1000$', filter: 'salary'}
    ]

    const elements = filterElements.map(item => {
        const {label, filter} = item;
        const active = filterCurrentValue === filter;
        const classes = active ? "btn-light" : "btn-outline-light"
        return (
            <button
            key={label}
            type="button"
            className={`btn ${classes}`}
            data-filter={filter}
            onClick={(e) => {onFilterUpdate(e.target.getAttribute('data-filter'))}}
            >
               {label}
            </button>
        );
    });


    return (
        <div className="btn-group">
            {elements}
        </div>
    )
}

export default AppFilter;