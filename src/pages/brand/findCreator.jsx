import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/molecules/navbar";

export default function FindCreator() {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [creatorName, setCreatorName] = useState("");


  return (
    <div>
      <Navbar />
      <h1>Find Creators Main Page</h1>
      Welcome {user.name}
      <form>
      <input
            type="name"
            placeholder="the.rebel.kid"
            value={creatorName}
            onChange={(e) => setCreatorName(e.target.value)}
            required
          />
          <button>🔍</button>
      </form>
    </div>
  );
}