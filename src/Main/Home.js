import Note from '../Components/Note';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Link } from 'react-router-dom';




function Home() {

    return (
        <div>            
            <div className='row d-flex justify-content-center p-5' to={"/Homee"}>

                <Link to={"/addnote"} className="card d-flex justify-content-center align-items-center  m-4" style={{ width: "20rem" }} >
                    <AddCircleOutlineIcon className='text-dark fw-thin' style={{ width: "8rem", height: "8rem" }} />
                    <h5 className='text-primary mt-3'>Add Your Notes Here</h5>
                </Link>

                <Note />
                
            </div>
        </div>
    )
}

export default Home