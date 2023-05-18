import { memo } from "react";
import { AiFillDelete } from "react-icons/ai";

const UserListWithProps = ({ userList, handleUserListDelete }) => {
   return (
      <div className="userlist-container">
         <h2>User List</h2>
         <div className="usercontainer">
            {userList?.map((item) => (
               <div key={item.id} className="user">
                  <p>{item.id} {item.title}</p>

                  <span className="btndelete">
                     <AiFillDelete
                        className="btndelete"
                        onClick={() => {
                           handleUserListDelete(item.id);
                        }}
                     />
                  </span>
               </div>
            ))}
         </div>
      </div>
   );
};

export default memo(UserListWithProps);
