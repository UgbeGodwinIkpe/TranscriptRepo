import React, {useState} from 'react'

// asset imports
import contactImg from '../../../assets/contact.png'

// mui imports
import { Divider, TextField } from '@mui/material'

function Contact() {

    const [formData, setFormData] = useState({
        Name:'',
        Age: '',
        Contact: ''
    })

    const inputChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
      }
    
      const handleSubmit = async (e) => {
        e.preventDefault()
    
       console.log(formData) 

       const response = await fetch('https://script.google.com/macros/s/AKfycbwlOjpbW09pJmevVT1xaXCWMDiR1zgHyCK1clrwDVipxPV9lMJZ1YRlBFT56Dk7OGkD/exec?action=addUser', {
        method: 'POST',
        body: JSON.stringify(formData) 
       })

       if(!response.ok){
        const data = response
        console.log(data)
       }

       if(response.ok){
        const data = response
        console.log(data)
       }

      }

  return (
    <div className='flex-1  flex flex-col md:-mx-5'>
        <div className='flex flex-col items-center justify-items-center justify-center'>
            <div className='md:w-[1064px] md:h-[478px] md:p-5 p-3 bg-[#6B3FA0] bg-opacity-10 w-full grid grid-cols-1 md:grid-cols-2 my-12 items-center rounded-md'>
                <div className='flex flex-col gap-y-[16px]'>
                    <div className='flex flex-col gap-y-[8px]'>
                        <h5 className='text-[24px] md: text-[12px]'>Talk to us</h5>
                        <p className='md:text-[16px] text-[8px] font-light'>let us know how we can help you</p>
                    </div>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-y-[10px] md:w-9/12 w-full'>
                        <TextField
                            id="outlined-text-input1"
                            label="enter name"
                            type="text"
                            name= "Name"
                            onChange={inputChange}
                            value={formData.Name}
                        />

                        <TextField
                            id="outlined-email-input"
                            label="enter age"
                            type="number"
                            name='Age'
                            onChange={inputChange}
                            value={formData.Age}
                        />

                        <TextField
                            id="outlined-text-input"
                            label="enter messge"
                            type="text"
                            name='Contact'
                            onChange={inputChange}
                            value={formData.Contact}
                            multiline
                            rows={4}
                        />
                        <button type='submit'>submit</button>
                    </form>
                </div>
                <div className='flex  md:h-[356px]'>
                    <img src={contactImg} alt="contactImg" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact