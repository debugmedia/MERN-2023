import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
  useTransition,
} from "react";
import Container from "../layout/Container";
import axios from "axios";
import UserListWithProps from "../components/UserListWithProps";

const StartTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [count, setCount] = useState(0);
  const [userList, setUserList] = useState([]);

  const onIncrement = () => {
    setCount((prev) => prev + 1);

    startTransition(() => {
      const newList = Array.from({ length: 5000 }).map((_, index) => {
        return { id: index, title: "Some Name" };
      });

      setUserList(newList);
    });
  };

  const onDecrement = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await axios("https://jsonplaceholder.typicode.com/todos");
    setUserList(response.data);
  };

  const handleUserListDelete = useCallback(
    (id) => {
      const filteredList = userList?.filter((item) => item.id !== id);
      setUserList(filteredList);
    },
    [userList]
  );

  return (
    <Container className="rerendering-container">
      <h4>useTransition()</h4>

      <div className="counter-container">
        <Fragment>
          <h1>Count {count}</h1>
        </Fragment>
        <Fragment>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </Fragment>
      </div>

      <UserListWithProps
        userList={userList}
        handleUserListDelete={handleUserListDelete}
      />
    </Container>
  );
};

export default StartTransition;
