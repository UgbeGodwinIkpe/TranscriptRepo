// mui imports
import { Button, TextField } from "@mui/material";

// react imports
import { useEffect, useState } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import {HiOutlineInformationCircle} from 'react-icons/hi2'

// features imports
import { register, reset } from "../../../../features/auth/authSlice";


// rrd imports
import { Link } from "react-router-dom";

// components imports
import { Spinner } from "../../../../components";

function Signup() {

    const [formData, setFormData] = useState({
        fullName: '',
        emailAddress: '',
        password: '',
        confirmedPassword: ''
    })

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(()=>{
        if(isError){
            toast.error(message)
        }

        if(isSuccess || user) {
            console.log(user)
            navigate(`/alumni/${user.alumni._id}/verify`)
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, dispatch])

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)

        const {fullName, emailAddress, password} = formData

        if(formData.password !== formData.confirmedPassword) {
            toast.error('password do not match')
        }
        else{
            const userData = {
                fullName,
                emailAddress,
                password
            }

            dispatch(register(userData))
        }
    }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit} className='flex flex-col md:w-4/12 w-full gap-y-4 p-3 md:p-0'>
            {isLoading ? <Spinner/> : ``}
            <div className='flex flex-col gap-y-4'>

                <TextField
                    id="outlined-text-input"
                    label="name"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={inputChange}
                    required
                />

                <TextField
                    id="outlined-email-input"
                    label="email address"
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={inputChange}
                    required
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    value={formData.password}
                    onChange={inputChange}
                    required
                />

                <TextField
                    label="confirm Password"
                    type="password"
                    autoComplete="current-password"
                    name="confirmedPassword"
                    value={formData.confirmedPassword}
                    onChange={inputChange}
                    required
                />

            </div>

            <div className="">
                <span className="flex items-center gap-x-4 text-red-500">
                    <HiOutlineInformationCircle size={18} color=""/>
                    <small>a combination of uppercase, lowercase and special characters</small>
                </span>

                <span className="flex items-center gap-x-4 text-red-500">
                    <HiOutlineInformationCircle size={18} color=""/>
                    <small>atleast 8 characters long</small>
                </span>
            </div>

            <Button
                variant="contained"
                className='bg-[#6B3FA0] hover:bg-[#6B3FA0] lowercase'
                type="submit"
            >
                Sign up
            </Button>

            <div className='text-right text-xs font-light'>
                <Link to={`/alumni/login`}>Already have an account ? login</Link>
            </div>
            
        </form>  
    </div>
  )
}

export default Signup