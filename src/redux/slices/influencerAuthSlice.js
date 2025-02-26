import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storedUser = JSON.parse(localStorage.getItem("user")) || null;

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async ({ name, email, password }, thunkAPI) => {
    try {
      const response = await axios.post("/api/v1/auth/register", {
        name, email, password, role: "influencer",
      });

      if (response.status === 201 && response.data?.user_data) {
        const user = response.data.user_data;
        localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
        return { id: user.id, email: user.email, name: user.name };
      } else {
        return thunkAPI.rejectWithValue("Registration failed. Try again.");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "An error occurred during registration."
      );
    }
  }
);

// 🔹 Login User
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, thunkAPI) => {
    try {

      const body = {
        email: email,
        password: password,
        role: "influencer",
      }
      const response = await axios.post("api/v1/auth/login", body);

      if (response.status === 200 && response.data?.user_data) {
        const user = response.data.user_data;
        localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage
        return { id: user.id, email: user.email, name: user.name };
      } else {
        return thunkAPI.rejectWithValue("Invalid email or password");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed. Please try again."
      );
    }
  }
);

// 🔹 Logout User
export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
  // TODO: add logout API call to backend
  localStorage.removeItem("user");
  return null;
});

// 🔹 Redux Slice
const authSlice = createSlice({
  name: "auth",
  initialState: { user: storedUser, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Login User
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Logout User
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export default authSlice.reducer;
