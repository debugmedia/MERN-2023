import React, { Fragment, useCallback, useEffect, useState } from "react";
import Container from "../layout/Container";
import axios from "axios";
import UserListWithProps from "../components/UserListWithProps";

const ReactUseCallBack = () => {
   const [count, setCount] = useState(0);
   const [userList, setUserList] = useState([]);

   const onIncrement = () => {
      if (count < 10) setCount((prev) => prev + 1);
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
         console.log(id, "==id");
         console.log(userList, "==userList");
         const filteredList = userList?.filter((item) => item.id !== id);
         setUserList(filteredList);
      },
      [userList]
   );

   //   const handleUserListDelete = (id) => {
   //     console.log(id, "==id");
   //     console.log(userList, "==userList");
   //     const filteredList = userList?.filter((item) => item.id !== id);
   //     setUserList(filteredList);
   //   };

   return (
      <Container className="rerendering-container">
         <h4>useCallback()</h4>

         <div className="counter-container">
            <Fragment>
               <h1>Count {count}</h1>
            </Fragment>
            <Fragment>
               <button onClick={onDecrement}>-</button>
               <button onClick={onIncrement}>+</button>
            </Fragment>
         </div>

         <UserListWithProps userList={userList} handleUserListDelete={handleUserListDelete} />
      </Container>
   );
};

export default ReactUseCallBack;
