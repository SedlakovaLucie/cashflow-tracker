//  Transakce
export type Transaction = {
    id: string;
    amount: number;
    description: string;
    create_date: string;
    type: "expense" | "income";
  };
  
  export type NewTransaction = {
    amount: number;
    description: string;
    create_date: string;
  };
  
  export type RawTransaction = {
    id: string;
    amount: number;
    description: string;
    create_date: string;
  };
  
  export type TransactionFromFirestore = NewTransaction & {
    id: string;
  };
  
  export type TransactionItem = {
    amount: number;
    description: string;
    create_date: string;
  };
  
  // Props
  export type BalanceProps = {
    balance: number;
    totalExpenses: number;
    totalIncomes: number;
  };
  
  export type FilterProps = {
    onFilter: (startDate: string, endDate: string) => void;
  };
  
  export type FormProps = {
    onAdd: (type: "expense" | "income", item: NewTransaction) => void;
  };
  
  export type ListProps = {
    items: Transaction[];
    onUpdate: (
      type: "expense" | "income",
      id: string,
      item: NewTransaction
    ) => void;
    onDelete: (type: "expense" | "income", id: string) => void;
  };
  
  export type ListItemProps = {
    item: Transaction;
    type: "expense" | "income";
    onUpdate: (
      type: "expense" | "income",
      id: string,
      item: NewTransaction
    ) => void;
    onDelete: (type: "expense" | "income", id: string) => void;
  };
  
  // Formulář (reducer)
  export type FormState = {
    newAmount: string;
    newDescription: string;
    newDate: string;
    selectedType: "expense" | "income";
    errors: {
      amount: string;
      description: string;
      date: string;
    };
  };
  
  export type FormAction =
    | { type: "UPDATE_FIELD"; field: keyof FormState; value: string }
    | { type: "SET_ERRORS"; errors: FormState["errors"] }
    | { type: "RESET_FORM" };
  