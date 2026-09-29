import Welcome from "./components/Welcome";
import UseCard from "./components/UserCard"
import UserCard from "./components/UserCard";

const users = [
  {
    id: 1,
    name: "Israel",
    role: "Software Developer",
    age: 25,
  },{
    id: 2,
    name: "David",
    role: "Student",
    age: 21,
  },{
    id: 3,
    name: "Emmanuel",
    role: "Designer",
    age: 24,
  },
];

const App = () => {
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;

