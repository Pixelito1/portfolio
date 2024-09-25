import { useNavigate } from "react-router-dom";

function useRouting() {
  const navigate = useNavigate();
  return { navigate };
}
export default useRouting;
