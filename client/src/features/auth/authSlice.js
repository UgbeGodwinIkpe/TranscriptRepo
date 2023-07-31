// redux toolkit imports
import { createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

// get user from localstorage
const user = JSON.parse(localStorage.getItem('user')) 

// setting initial state
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// register user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = error.response.data.message || (error.response && error.response.data && error.response.data.message) || error.message || error.error || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message =  error.response.data.message || (error.response.data.message && error.response && error.response.data ) || error.message || error.error || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

// reset user password
export const resetPassword = createAsyncThunk('auth/resetPassword', async (emailAddress, thunkAPI) => {
    try {
        console.log(emailAddress)
         await authService.resetPassword(emailAddress)
    } catch (error) {
        const message = error.response.data.message || (error.response && error.response.data ) 

        return thunkAPI.rejectWithValue(message)
    }
})

// verify user
export const verify = createAsyncThunk('auth/verify', async (user, thunkAPI) => {
    try {
        return await authService.verify(user)
    } catch (error) {
        const message = error.response.data.message || (error.response && error.response.data && error.response.data.message) || error.message || error.error || error.toString()
    
        return thunkAPI.rejectWithValue(message)
    }
})

// logout user
export const changePassword = createAsyncThunk(`auth/changePassword`, async (password, thunkAPI) => {
    try {
        return await authService.changePassword(password)
    } catch (error) {
        const message = error.response.data.message || (error.response && error.response.data && error.response.data.message) || error.message || error.error || error.toString()
    
        return thunkAPI.rejectWithValue(message)
    }
})

// logout user
export const logout = createAsyncThunk(`auth/logout`, async () => {
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
            state.isLoading = false,
            state.isSuccess = false,
            state.message = ''
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })

            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })

            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true
            })

            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })

            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(verify.pending, (state) => {
                state.isLoading = true
            })

            .addCase(verify.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })

            .addCase(verify.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
            })

            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = 'email successfully sent'
            })

            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(changePassword.pending, (state) => {
                state.isLoading = true
            })

            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })

            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })

            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions

export default authSlice.reducer