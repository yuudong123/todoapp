import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css"; /* 누락 추가 */
import { Badge, Button, Container, Row, Col } from "react-bootstrap";

function App() {
  // 스테이트 변수 , 수정함수로만 변경가능(immutable), 직접 스테이트를 변경하려면 오류발생!!
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // 여러가지 데이터값 저장 : Array, Object
  const onChange = (e) => {
    setTodo(e.target.value);
    // console.log("입력값 : " + todo);
  };
  const onSubmit = (e) => {
    e.preventDefault(); // 기본 이벤트 전파를 막음(=화면 새로고침)
    if (todo === "" || todo.length === 0) {
      // 입력값 없으면
      alert("할일을 입력하세요!");
    } else {
      //todos.push(todo); // 직접 todos 배열을 조작하지만, 결국엔 수정함수로 변경
      setTodos([...todos, todo]);
      setTodo(""); // 입력폼 지우기
      // console.log(todos); // 입력된 todos를 출력
    }
  };
  const delTodo = (id) => setTodos(todos.filter((todo, i) => i !== id));

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
                <label htmlFor="input_todo">
                  <Badge bg="primary">할일</Badge>
                </label>
                <input type="text" id="input_todo" placeholder="오늘의 중요 일정을 작성하세요" value={todo} onChange={onChange} />
                <Button variant="primary" size="sm" type="submit">
                  등록
                </Button>
              </form>
            </Col>
          </Row>
          <hr />
          {/* 결과 출력 : 주석 */}
          <Row>
            <Col xl={6}>
              <ul>
                {todos.map((todo, index) => (
                  <li key={index} style={{ margin: "1rem 0", position: "relative" }}>
                    {todo}{" "}
                    <Button variant="danger" onClick={() => delTodo(index)} style={{ position: "absolute", right: "10px", height: "100%", margin: 0, padding: 0 }}>
                      삭제
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
