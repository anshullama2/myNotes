import React from 'react'

function Note() {   
    return (
        <>
            <div className="card d-flex justify-content-center m-4" style={{ width: "20rem" }} >
                <div className="card-body">
                    <h3 className="card-title ">Breakfast ka kahan</h3>
                    <p className="card-text text-justify">Some quick example text to build on the card title and make up the bulk of the dddFDASFSAFEAVDGGcard's content.</p>
                    <div className='d-flex justify-content-between mt-4'>
                        <button className="btn btn-primary btn-sm">View Note</button>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note