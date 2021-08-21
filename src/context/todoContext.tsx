import * as React from "react";

export const TodoContext = React.createContext<ContextType | null>(null);

const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {

  const [todos, setTodos] = React.useState<ITodo[]>([]);

  const saveTodo = (todo: ITodo) => {
    const newTodo: ITodo = {
      id: Math.random(),
      title: todo.title,
      description: todo.description,
      status: false
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id: number) => {

    const todoSet = (todo: ITodo) => {
      todo.status = true
      return setTodos([...todos]);
    }

    return todos.filter((todo: ITodo) => todo.id === id && todoSet(todo));
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
