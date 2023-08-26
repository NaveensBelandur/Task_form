import React from 'react'
import {useState} from 'react'
import {
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBBtn,
    MDBTypography,
    MDBInput,
    MDBCol,
    MDBRadio,
    MDBTextArea 
} from 'mdb-react-ui-kit'


const Home = () => {
    const [Form,SetForm] = useState({
       firstName:'',
       lastName:'',
       email:'',
       phoneNumber:'',
       passWord:'',
       confirmPassword:'',
       dateofbirth:'',
       Country:'',
       State:'',
       City:'',
       Address:'',
       Message:''
    })
    const  [Gender,SetGender] = useState('Male')

    

const [Error,Seterror] = useState({
    firstNameErr:'',
    firstNameLengthErr:'',
    lastNameErr:'',
    lastnameLengthErr:'',
    emailErr:'',
    phoneNumberErr:'',
    passWordErr:'',
    confirmPasswordErr:'',
    dateofbirthErr:'',
    CountryErr:'',
    StateErr:'',
    CityErr:'',
    AddressErr:'',
    MessageErr:''
})
 


const  {firstName,lastName,email,passWord,confirmPassword,dateofbirth,Country,State,City,Address,phoneNumber,Message} = Form

const {firstNameErr,lastNameErr,emailErr,passWordErr,confirmPasswordErr,dateofbirthErr,CountryErr,StateErr,CityErr,AddressErr,phoneNumberErr,MessageErr,firstNameLengthErr,lastnameLengthErr} = Error

const handleFirstName = (e) =>{
    SetForm({
        ...Form,firstName:e.target.value
    })
}


const handleLastName = (e) =>{
    SetForm({
       ...Form,lastName:e.target.value 
    })
}


const handleEmail = (e) =>{
    SetForm({
        ...Form,email:e.target.value
    })
}

const handlePhoneNumber = (e) =>{
    SetForm({
        ...Form,phoneNumber:e.target.value
    })
}

const handlePassword = (e) =>{
    SetForm({
        ...Form,passWord:e.target.value
    })
}


const handleConfirm = (e) =>{
    SetForm({
        ...Form,confirmPassword:e.target.value
    })
}

const handleDate = (e) =>{
    SetForm({
        ...Form,dateofbirth:e.target.value
    })
}


const handleCountry = (e) =>{
    SetForm({
        ...Form,Country:e.target.value
    })
}


const handleState = (e) =>{
    SetForm({
        ...Form,State:e.target.value
    })
}

const handleCity = (e) =>{
    SetForm({
        ...Form,City:e.target.value
    })
}

const handleAddress = (e) =>{
    SetForm({
        ...Form,Address:e.target.value
    })
}

const handleMessage = (e) =>{
    SetForm({
        ...Form,Message:e.target.value
    })
}


const Submit = (e) =>{
    e.preventDefault()

    if(firstName == '' && lastName == '' && email == '' && phoneNumber == '' && passWord == '' && confirmPassword == '' && dateofbirth == '' && Country =='' && State =='' && City == '' && Address == '' && Message == '' ){
        Seterror({
            firstNameErr:"First Name Cannot Be Empty",
            lastNameErr:"LastName Cannot Be Empty",
            emailErr:"Email Cannot Be Empty",
            phoneNumberErr:"Phone Number Cannot Be Empty",
            passWordErr:"Password Cannot Be Empty",
            confirmPasswordErr:"Confirm Password Cannot Be Empty",
            dateofbirthErr:"Date Of Bith Cannot be Empty",
            CountryErr:"Country Cannot Be Empty",
            StateErr:"State Cannot Be Empty",
            CityErr:"City Cannot Be Empty",
            AddressErr:"Address Cannot Be Empty",
            MessageErr:"Message Cannot Be Empty",
        })
    }else if(firstName == ''){
        Seterror({
            firstNameErr:"First Name Cannot Be Empty",
        })
    }else if(firstName.length > 10) {
        Seterror({
            firstNameLengthErr:"First Name Cannot be More than 10 Words"
        })
    }else if(lastName == ''){
        Seterror({
            lastNameErr:"Last Name Cannot be empty"
        })
    }else if(lastName.length > 10){
        Seterror({
            lastnameLengthErr:"Last Name Cannot be more than 10 Words"
        })
    }


    }
    




    return (
        <React.Fragment>
        <section className='mt-5'>
           <MDBContainer>
              <h3 variant='h3' className="text-center" >Form Page</h3>
              <MDBRow>
                 {/*Form*/}
                 <form>
                    <MDBCard className='py-5 px-5 mt-5'>
                       <MDBRow className='mb-4'>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={firstName} onChange={handleFirstName} name='firstName' label='First Name' />
                            <p  className='link-danger mt-2 '>{firstNameErr}</p>
                            <p className='link-danger mt-2'>{firstNameLengthErr}</p>
                          </MDBCol>
                          <MDBCol>
                             <MDBInput id='form6Example2' value={lastName} onChange={handleLastName} label='Last Name'
                                name='Lastname' />
                                <p className='link-danger mt-2 '>{lastNameErr}</p>
                                <p className='link-danger mt-2'>{lastnameLengthErr}</p>
                          </MDBCol>
                       </MDBRow>
                       <MDBRow className='mb-4'>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={email} onChange={handleEmail} name='Email' label='Email' />
                             <p className='link-danger mt-2 lead'>{emailErr}</p>
                          </MDBCol>
                          <MDBCol>
                             <MDBInput id='form6Example2' value={phoneNumber} onChange={handlePhoneNumber} label='Phone Number'
                                name='Phone Number' />
                                <p className='link-danger mt-2 lead'>{phoneNumberErr}</p>
                          </MDBCol>
                       </MDBRow>
                       <MDBRow className='mb-4'>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={passWord} onChange={handlePassword} name='Password' label='Password' />
                             <p className='link-danger mt-2 lead'>{passWordErr}</p>
                          </MDBCol>
                          <MDBCol>
                             <MDBInput id='form6Example2' value={confirmPassword} onChange={handleConfirm} label='Confirm Password'
                                name='Confirm Password' />
                                <p className='link-danger mt-2 lead'>{confirmPasswordErr}</p>
                          </MDBCol>
                       </MDBRow>
                       <MDBRow className='mb-4'>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={dateofbirth} onChange={handleDate} name='Date' label='Date of Birth' />
                             <p className='link-danger mt-2 lead'>{dateofbirthErr}</p>
                          </MDBCol>
                          <MDBCol>
                             <div>
                                <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' checked={Gender === 'Male'} onClick={()=>SetGender('Male')}value='Male' label='Male' defaultChecked />
                                <MDBRadio name='flexRadioDefault' id='flexRadioDefault2'  checked={Gender === 'Female'} value='Female' onClick={()=>SetGender('Female')} label='Female'  />
                             </div>
                          </MDBCol>
                       </MDBRow>
                       <MDBRow className='mb-4'>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={Country} onChange={handleCountry} name='Country' label='Country' />
                             <p className='link-danger mt-2 lead'>{CountryErr}</p>
                          </MDBCol>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={State} onChange={handleState} name='State' label='State' />
                             <p className='link-danger mt-2 lead'>{StateErr}</p>
                          </MDBCol>
                       </MDBRow>
                       <MDBRow className='mb-4'>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={City} onChange={handleCity} name='City' label='City' />
                             <p className='link-danger mt-2 lead'>{CityErr}</p>
                          </MDBCol>
                          <MDBCol>
                             <MDBInput id='form6Example1' value={Address} onChange={handleAddress} name='Address' label='Address' />
                             <p className='link-danger mt-2 lead'>{AddressErr}</p>
                          </MDBCol>
                       </MDBRow>
                       <MDBRow className='mb-4'>
                          <div>
                             <MDBTextArea label='Message' value={Message} onChange={handleMessage}  id='textAreaExample' rows={4} />
                             <p className='link-danger mt-2 lead'>{MessageErr}</p>
                          </div>
                       </MDBRow>
                       <div className="d-grid gap-2 col-6 mx-auto">
                          <MDBBtn rounded color='success' onClick={Submit}>Submit</MDBBtn>
                       </div>
                    </MDBCard>
                 </form>
              </MDBRow>
           </MDBContainer>
        </section>
     </React.Fragment>
    )
}




export default Home