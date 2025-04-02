import { UserProvider } from "./UserContext";
import UserProfile from "./UserProfile";
import UserUpdate from "./UserUpdate";


const App = () => {
  return (
    <UserProvider>
      <UserProfile />
      <UserUpdate/>
    </UserProvider>
  );
}
export default App;