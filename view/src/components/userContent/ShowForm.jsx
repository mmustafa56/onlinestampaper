import React, { createElement } from 'react';
import firstImg from '../Images/firstImg.jpeg';
import Printer, { print } from 'react-pdf-print'

const ShowForm = () => {
  const ids = ['1']
  return (
    <div className='container border border-primary bg-light'>
      <div className='row'>
        <div className="col-lg-2 bg-primary text-center">
         <button className='btn bg-light text-primary  my-3 mt-5 col-lg-8 fs-5 fw-bold  border-dark rounded-3' onClick={() => print(ids)}>Download</button>
         <br />
         <button className=' btn bg-light text-primary col-lg-8 fs-5 fw-bold border-dark rounded-3' onClick={() => print(ids)}>Print</button>
        </div>
        <div className='col-sm-10 text-center my-2'>
        <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm' }}>
            <img src={firstImg} alt="This is the stamp..." style={{width:'100%'}} />
            </div>
        </Printer>
         {/* <img src={firstImg} alt="This is the stamp..." /> */}
        </div>
      </div>
  
    </div>
        
        // <input type='button' style={{ position: 'relative', float: 'right' }}
        //   onClick={() => print(ids)} value='Stampa' />

  )
}
export default ShowForm;