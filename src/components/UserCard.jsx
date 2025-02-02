/* eslint-disable react/prop-types */
const UserCard = ({ user }) => {
  const { firstName, lastName, age, gender, about, photoUrl } = user;
  return (
    <div className="card card-compact bg-base-300 w-96 shadow-xl items-center ">
      <figure>
        <img className="p-2 m-2" src={photoUrl} alt="user_pic" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{"Age: " + age + " Gender: " + gender}</p>}
        <p>{about}</p>
        <div className="card-actions justify-center my-4">
          <button className="btn bg-red-600 text-white">Ignore</button>
          <button className="btn bg-green-600 text-white">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
