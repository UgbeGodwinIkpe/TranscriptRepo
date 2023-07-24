// mui imports
import { Button, TextField } from "@mui/material";

// rrd imports
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <div className='flex flex-col md:w-4/12 w-full gap-y-4 p-3 md:p-0'>
            <div className='flex flex-col gap-y-4'>

                <TextField
                    id="outlined-text-input"
                    label="name"
                    type="text"
                />

                <TextField
                    id="outlined-email-input"
                    label="email address"
                    type="email"
                />

                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                />

                <TextField
                    label="confirm Password"
                    type="password"
                    autoComplete="current-password"
                />
            </div>

            <Button
                variant="contained"
                className='bg-[#6B3FA0] hover:bg-[#6B3FA0] lowercase'
            >
                Sign up
            </Button>

            <div className='text-right text-xs font-light'>
                <Link to={`/alumni/login`}>Already have an account ? login</Link>
            </div>
            
        </div>  
    </div>
  )
}

export default Signup