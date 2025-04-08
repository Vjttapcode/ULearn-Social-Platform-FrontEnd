import "../styles/Rightsidebar.css";
const RightSidebar = () => {
  const users = [
    {
      id: 1,
      name: "Ngoc Duc",
      avatar:
        "https://i.pinimg.com/236x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg",
    },
    {
      id: 2,
      name: "Duy Khoi",
      avatar:
        "https://i.pinimg.com/236x/4e/22/be/4e22beef6d94640c45a1b15f4a158b23.jpg",
    },
  ];
  return (
    <aside className="right-sidebar">
      <div className="sidebar-section">
        <ul className="user-list">
            {users.map((user)=>{
                
            })}
        </ul>
      </div>
    </aside>
  );
};
export default RightSidebar;
