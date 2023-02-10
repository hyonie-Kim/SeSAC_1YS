import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  return (
    <>
      <Profile
        img={
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        }
        name={"hyonie"}
        title={"프론트엔드 개발자"}
        isNew={true}
      />
      <Profile
        img={
          "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        }
        name={"James Kim"}
        title={"백엔드 개발자"}
      />
      <Profile
        img={
          "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        }
        name={"Bob Yu"}
        title={"프론트엔드 개발자"}
      />
    </>
  );
}

export default AppProfile;