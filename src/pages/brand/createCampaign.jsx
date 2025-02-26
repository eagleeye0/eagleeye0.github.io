import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/navbar";

export default function Brand() {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [campaignName, setCampaignName] = useState("");
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [platform, setPlatform] = useState("youtube");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page

    // Create a campaign object with the form data
    const campaignData = {
      campaignName,
      area,
      budget,
      platform,
    };

    // Log the campaign data (you can replace this with an API call)
    console.log("Campaign Data:", campaignData);

    // Reset the form fields after submission
    setCampaignName("");
    setArea("");
    setBudget("");
    setPlatform("youtube");
  };

  return (
    <div>
      <Navbar />
      <h1>Create Campaign Main Page</h1>
      Welcome {user.name}
      <h2>Enter Campaign Details</h2>
      <form onSubmit={handleSubmit}>
        <p>
          Campaign Name
          <input
            type="text"
            placeholder="Campaign Name"
            value={campaignName}
            onChange={(e) => setCampaignName(e.target.value)}
            required
            name="campaignName"
          />
        </p>
        <p>
          Area
          <input
            type="text"
            placeholder="Area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
            name="area"
          />
        </p>
        <p>
          Budget
          <input
            type="number"
            placeholder="Budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
            name="budget"
          />
        </p>
        <p>
          Platform
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            name="platform"
          >
            <option value="youtube">Youtube</option>
            <option value="instagram">Instagram</option>
          </select>
        </p>
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Campaign"}
        </button>
      </form>
    </div>
  );
}