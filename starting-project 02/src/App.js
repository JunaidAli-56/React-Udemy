import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import ErrorModal from './components/UI/ErrorModal';
const user = {
  id: "2",
  name: 'Mahesh',
  age: 20,
}
const App = () => {
  let sendUser = [user]
  let SendError = {}
  const [userData, setUserData] = useState(sendUser)
  const [error, setError] = useState(SendError)
  const getDataHandler = (user) => {
    setUserData((prevState) => {
      return [user, ...prevState]
    })
  }
  const getErrorHandler = (err) => {
    console.log(err.title);
    setError(err)
  }
  return (
    <div>
      <ErrorModal error={error}></ErrorModal>
      <AddUser getData={getDataHandler} getError={getErrorHandler} />
      <UserList users={userData} />
    </div>
  );
}

export default App;
