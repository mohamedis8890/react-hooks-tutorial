import React, { useState } from "react";
import "./App.css";

const Todo = ({ todo, index, completeTodo, deleteTodo }) => {
	return (
		<div
			className="todo"
			style={{ textDecoration: todo.isComplete ? "line-through" : "" }}
		>
			{todo.text}
			<div>
				<button onClick={() => completeTodo(index)}>Complete</button>
				<button onClick={() => deleteTodo(index)}>X</button>
			</div>
		</div>
	);
};

const TodoForm = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={value}
				onChange={e => setValue(e.target.value)}
				className="input"
				placeholder="Add Todo"
			/>
		</form>
	);
};

const App = () => {
	const [todos, setTodos] = useState([
		{ text: "Learn React Hooks", isComplete: false },
		{ text: "Meet a friend for breakfast", isComplete: false },
		{ text: "Make it to work", isComplete: false }
	]);

	const addTodo = text => {
		const newTodos = [...todos, { text, isComplete: false }];
		setTodos(newTodos);
	};

	const completeTodo = index => {
		const newTodos = [...todos];
		newTodos[index].isComplete = true;
		setTodos(newTodos);
	};

	const deleteTodo = index => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				{todos.map((todo, i) => (
					<Todo
						todo={todo}
						key={i}
						index={i}
						completeTodo={completeTodo}
						deleteTodo={deleteTodo}
					/>
				))}
				<TodoForm addTodo={addTodo} />
			</div>
		</div>
	);
};

export default App;
