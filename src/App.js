import { useState, useRef } from "react";
import "./App.css";

const codes = `const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt)}</pre>
        <input
          ref={focusRef}
          value={cnt}
          onChange={e => {
            const value = Math.floor(Math.random() * 5) + 5;
            setCnt(prev => Number(prev) + value);
          }}
          onKeyDown={e => console.log("키다운", e)}
          onKeyUp={e => console.log("키업", e)}
        />
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
      </div>
    </div>
  );
};

export default App;const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt)}</pre>
        <input
          ref={focusRef}
          value={cnt}
          onChange={e => {
            const value = Math.floor(Math.random() * 5) + 5;
            setCnt(prev => Number(prev) + value);
          }}
          onKeyDown={e => console.log("키다운", e)}
          onKeyUp={e => console.log("키업", e)}
        />
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
      </div>
    </div>
  );
};

export default App;const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt)}</pre>
        <input
          ref={focusRef}
          value={cnt}
          onChange={e => {
            const value = Math.floor(Math.random() * 5) + 5;
            setCnt(prev => Number(prev) + value);
          }}
          onKeyDown={e => console.log("키다운", e)}
          onKeyUp={e => console.log("키업", e)}
        />
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
      </div>
    </div>
  );
};

export default App;const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt)}</pre>
        <input
          ref={focusRef}
          value={cnt}
          onChange={e => {
            const value = Math.floor(Math.random() * 5) + 5;
            setCnt(prev => Number(prev) + value);
          }}
          onKeyDown={e => console.log("키다운", e)}
          onKeyUp={e => console.log("키업", e)}
        />
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
      </div>
    </div>
  );
};

export default App;const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt)}</pre>
        <input
          ref={focusRef}
          value={cnt}
          onChange={e => {
            const value = Math.floor(Math.random() * 5) + 5;
            setCnt(prev => Number(prev) + value);
          }}
          onKeyDown={e => console.log("키다운", e)}
          onKeyUp={e => console.log("키업", e)}
        />
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
      </div>
    </div>
  );
};

export default App;const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt)}</pre>
        <input
          ref={focusRef}
          value={cnt}
          onChange={e => {
            const value = Math.floor(Math.random() * 5) + 5;
            setCnt(prev => Number(prev) + value);
          }}
          onKeyDown={e => console.log("키다운", e)}
          onKeyUp={e => console.log("키업", e)}
        />
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
      </div>
    </div>
  );
};

export default App;
`;

const App = () => {
  const [cnt, setCnt] = useState(0);
  const focusRef = useRef(null);

  return (
    <div
      className={"container"}
      onClick={() => {
        console.log("하이1");
        focusRef.current.focus();
      }}
    >
      <div className={"code_container"}>
        <pre>{codes.substring(0, cnt * 10)}</pre>
      </div>

      <div className={"utils_container"}>
        <h3>ETC studing link</h3>
        <div>
          <span>React 기초 : </span>
          <span>
            <a href="#">asdasdasd</a>
          </span>
        </div>
        <div></div>
      </div>

      <input
        ref={focusRef}
        value={cnt}
        onChange={e => {
          const value = Math.floor(Math.random() * 5) + 5;
          setCnt(prev => Number(prev) + value);
        }}
        onKeyDown={e => console.log("키다운", e)}
        onKeyUp={e => console.log("키업", e)}
      />
    </div>
  );
};

export default App;
