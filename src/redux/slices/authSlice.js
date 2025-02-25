import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const storedUser = JSON.parse(localStorage.getItem("user")) || null;

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, thunkAPI) => {
        try {

            const body = {
                email: email,
                password: password
            }
            const response = await axios.post("api/v1/auth/login", body);
            
            if (response.data) {
                localStorage.setItem("user", JSON.stringify(response.data.user_data));
            }
            const user = response.data.user_data;

            if (response.status === 200) {
                return { id: user.id, email: email, name: user.name };
            } else {
                return thunkAPI.rejectWithValue("Invalid email or password");
            }
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState: { user: storedUser, loading: false, error: null },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
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
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
