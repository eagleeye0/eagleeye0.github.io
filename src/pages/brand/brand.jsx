import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/slices/brandAuthSlice";
import Navbar from "../../components/molecules/navbar";

export default function Brand() {
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleCreateCampaignClick = () => {
    navigate("/create-campaign");
  };

  const handleSearchCreatorClick = () => {
    navigate("/creator-search");
  };

  return (
    <div>
      <Navbar />
      <h1>Brand Main Page</h1>
      Welcome {user.name}
      <h2>Create a Campaign and connect with creators</h2>
      <button onClick={handleCreateCampaignClick}>Create campaign</button>
      <button onClick={handleSearchCreatorClick}>Search Creator</button>
    </div>
  );
}

