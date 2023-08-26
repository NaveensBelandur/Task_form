import React, { useEffect } from 'react'
import { MDBContainer, MDBTypography, MDBBtn } from 'mdb-react-ui-kit'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Error = () => {

    useEffect(() => {
        Swal.fire({
            title: 'Error!',
            text: '404 Error Page Not Found',
            icon: 'error',
        })
    }, [])


    const Navigate = useNavigate()

    const Home = () => {
        Navigate('/')
    }

    return (
        <React.Fragment>
            <MDBContainer>
                <div classNam>
                    <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4 mt-5' alt='404 Error Page not found' loading="lazy" />
                </div>
                <div className='mt-5  text-center '>
                    <MDBTypography variant='h3 lead' className='lead'>Error Page Not Found</MDBTypography>
                    <MDBBtn className='me-1 mt-2' color='danger' onClick={Home}>
                        Go Back
                    </MDBBtn>
                </div>
            </MDBContainer>
        </React.Fragment>
    )
}





export default Error