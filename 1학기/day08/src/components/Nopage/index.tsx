// import RouterTest from "./RouterTest";
import { useNavigate } from "react-router-dom";
const NoPage = () => {
  const navigate = useNavigate();
  return (
    <div>
       
      <h1> No Page Not found 404</h1>
       <button onClick={()=>navigate(-1)}>돌아가기</button>
    </div>
  );
};
export default NoPage;
