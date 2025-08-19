import RouterTest from "../RouterTest/index.jsx";
import { useNavigate } from "react-router-dom";
const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <RouterTest />
      <h1> No Page Not found 404</h1>
      <button onClick={() => navigate("/home")}>홈으로</button> {"  "}
      <button onClick={() => navigate(-1)}> 뒤로가기 </button> {"  "}
      <button onClick={() => navigate("/blogs")}> 블로그로 </button>
    </div>
  );
};
export default NoPage;