import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import UserCard from "./UserCard";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;
  if (connections.length === 0) {
    return <h1>No Connections found</h1>;
  }
  return (
    <div className="text-center my-10">
      <h2 className="text-bold text-3xl text-white">Connections</h2>
      {connections.map((connection) => {
        const { firstName, lastName, age, gender, about, photoUrl, _id } =
          connection;
        return (
          <div
            key={_id}
            className=" flex m-4 p-4 rounded-lg bg-base-200 w-1/2 mx-auto"
          >
            <div>
              <img
                className="h-20 w-20 rounded-full"
                src={photoUrl}
                alt="conenction_img"
              />
            </div>
            <div className="text-left mx-4">
              <h2 className="text-xl font-bold">
                {firstName + " " + lastName}
              </h2>
              <p>{about}</p>
              {age && gender && <p>{age + ", " + gender}</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
