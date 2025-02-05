import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const { _id, firstName, lastName, age, gender, about, photoUrl } = user;
  const dispatch = useDispatch();

  const handleSendRequest = async (status, userId) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + userId,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUserFromFeed(userId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card card-compact bg-base-300 w-96 shadow-xl items-center ">
      <figure>
        <img className="p-2 m-2" src={photoUrl} alt="user_pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{"Age: " + age + " Gender: " + gender}</p>}
        {about && <p>{about}</p>}
        <div className="card-actions justify-center my-4">
          <button
            onClick={() => handleSendRequest("ignored", _id)}
            className="btn bg-red-600 text-white"
          >
            Ignore
          </button>
          <button
            onClick={() => handleSendRequest("interested", _id)}
            className="btn bg-green-600 text-white"
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
