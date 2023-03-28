import React, { useState } from "react";

import { Badge, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "" || todo.length === 0) {
      alert("할일을 입력하세요!");
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };
  const delTodo = (index) => setTodos(todos.filter((_, i) => i !== index));
  return (
    <div className="wrap">
      <header className="App">
        <Container>
          <Row>
            <Col>
              <h1>할일 목록({todos.length})</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <form onSubmit={onSubmit}>
                <Badge>할일</Badge>
                <input type="text" id="input_todo" placeholder="오늘의 중요 일정을 작성하세요" value={todo} onChange={onChange} />
                <Button type="submit" variant="primary" size="sm">
                  추가
                </Button>
              </form>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <ul>
                {todos.map((todo, index) => (
                  <li key={index}>
                    {todo}{" "}
                    <Button size="sm" onClick={() => delTodo(index)}>
                      &times;
                    </Button>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
