import { useContext } from "react";
import UserContext from "@/UserContext";

export default function ALLInfoSideBox() {
  const { user } = useContext(UserContext);
  return <div>{JSON.stringify(user)}</div>;
}
