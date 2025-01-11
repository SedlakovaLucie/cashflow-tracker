import ListItem from "./ListItem";

const List = ({ incomes, expenses, onUpdate, onDelete }) => {
  return (
    <div className="list-container">
      {/* Sekce pro příjmy */}
      <div className="list incomes">
        <h2>Příjmy</h2>
        {incomes.length > 0 ? (
          incomes.map((income) => (
            <ListItem
              key={income.id}
              item={income}
              type="income"
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>Žádné příjmy.</p>
        )}
      </div>

      {/* Sekce pro výdaje */}
      <div className="list expenses">
        <h2>Výdaje</h2>
        {expenses.length > 0 ? (
          expenses.map((expense) => (
            <ListItem
              key={expense.id}
              item={expense}
              type="expense"
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))
        ) : (
          <p>Žádné výdaje.</p>
        )}
      </div>
    </div>
  );
};

export default List;
