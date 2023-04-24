import axios from "axios";
import { useEffect, useState } from "react";
import "../Components/UserList.css";

const UserList = () => {
  const [userList, setUserList] = useState([{}]);
  console.log("🚀 ~ file: UserList.jsx:9 ~ UserList ~ userList:", userList);

  useEffect(() => {
    getUserList();
  }, []);

  const getUserList = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    
    setUserList(response.data);
  };

  const handleUserListDelete = (id) => {
    const filteredList=userList?.filter((item) => item.id !== id);
    setUserList(filteredList);
  };

  return (
    <div>
      <div>
       
        <div className="usercontainer">
        <h2>User List</h2>
          {userList?.map((item) => (
            <div key={item.id} className="user">
              <p><b>{item.id}. </b>{item.title}</p>
              <span>
                <button
                  onClick={() => {
                    handleUserListDelete(item.id);
                  }}
                >
                  X
                </button>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
