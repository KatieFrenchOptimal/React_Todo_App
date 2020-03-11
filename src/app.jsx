class Todo extends React.Component {
  constructor(props){
    super(props);

    this.state = { done: (this.props.done == "true" && props.done),
                   text: props.text
                 };
    this.handleClick  = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleClick(event) {
    this.setState(
      state => ({
        done: !state.done
      }),
      function(event){
        this.handleSubmit(event)
      }
    );
  }

  handleChange(event){
    let text = event.target.value;

    this.setState(state => ({
      text: text
    }));
  }

  handleSubmit(event){
    console.log("This is where the submit will happen");

    // this.setState(state => ({
    // }))
  }

  render () {

    return  <div className="todo">
      <span>
        <input type="checkbox" checked={this.state.done}
                                onClick={this.handleClick} />
        <input type="text" value={this.state.text}
                            onChange={this.handleChange}
                            onBlur={this.handleSubmit} />
      </span>
    </div>
  }
}

class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        { id: 1,
          text: "Item 1",
          done: false},
        { id: 2,
          text: "Item 2",
          done: false},
        { id: 3,
          text: "Item 3",
          done: false},
        { id: 4,
          text: "Item 4",
          done: false}
      ]
    }
    this.newTodo = this.newTodo.bind(this);
  }

  newTodo(event){
    event.preventDefault();

    todos = this.state.todos;
    todos.push({ id: ""});

    this.setState(state => ({
      todos: todos
    }));
  }

  render(){
    const todoList = this.state.todos.map((todo) =>
      <Todo key={todo.id.toString()} id={todo.id} text={todo.text} done={todo.done} />
    );

    return <React.Fragment>
      <h1>React Todo App</h1>
      {todoList}
      <a href="#" onClick={this.newTodo}>New Todo</a>
    </React.Fragment>
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);