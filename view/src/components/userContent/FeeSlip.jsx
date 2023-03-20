import React from 'react';
import './TotalForm.css';
import './FeeSlip.css';
import feeImg from '../Images/feeSlip.jpeg'

import Printer, { print } from 'react-pdf-print'

 const FeeSlip = () => {
  const ids = ['1']
  return(
     <div className='container bg-primary' style={{overflow:'hidden',display:'flex',justifyContent:'center',flexDirection:"column"}} >
      <div className="overF" style={{overflowX:'scroll',padding:"20px",width:'100%'}}>
      <Printer>
       {/* <div id={ids[0]} className='row' style={{backgroundColor:"white" ,padding:"10px",width:"277mm" ,height:'277mm'}}> */}
       <div className='row' id={ids[0]} style={{ width:'277mm', height: '297mm' }}>
        
         <div className="col-4  my-2 bg-light br-1">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2'>
             Account No...................................................
           </h6>
           <h6 className='mx-2'>
             Bank Branch Name.....................................
           </h6>
           <h6 className='mx-2'>
             Branch Code.................................................
           </h6>
           <h6 className='mx-2'>
             Challan No....................................................
           </h6>
           <h6 className='mx-2'>
             Licence No....................................................
           </h6>
           <h6 className='mx-2'>
             Name.............................................................
           </h6>
           <h6 className='mx-2'>
            Father Name................................................
           </h6>
           <div className="col my-5  border-top border-dark ">
           <h6 className='mx-2 my-2'>
            Form Price.....................................................
           </h6>
           <h6 className='mx-2'>
            Total Form.....................................................
           </h6>
           <h6 className='mx-2'>
             Amount Paid ................................................
           </h6>
           <h6 className='mx-2'>
             Date................................................................
           </h6>
           </div>
           <h5 className='text-center'>User Copy</h5>
         </div>
         <div className="col-4  my-2  bg-light br-2">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2'>
             Account No...................................................
           </h6>
           <h6 className='mx-2'>
             Bank Branch Name.....................................
           </h6>
           <h6 className='mx-2'>
             Branch Code.................................................
           </h6>
           <h6 className='mx-2'>
             Challan No....................................................
           </h6>
           <h6 className='mx-2'>
             Licence No....................................................
           </h6>
           <h6 className='mx-2'>
             Name.............................................................
           </h6>
           <h6 className='mx-2'>
            Father Name................................................
           </h6>
           <div className="col my-5  border-top border-dark ">
           <h6 className='mx-2 my-2'>
            Form Price.....................................................
           </h6>
           <h6 className='mx-2'>
            Total Form.....................................................
           </h6>
           <h6 className='mx-2'>
             Amount Paid ................................................
           </h6>
           <h6 className='mx-2'>
             Date................................................................
           </h6>
           </div>
           <h5 className='text-center'>Office Copy</h5>
         </div>




         <div className="col-4   my-2  bg-light br-3">
           <h4 className='text-center mb-5'>Fee Slip</h4>
           <h6 className='mx-2'>
             Account No...................................................
           </h6>
           <h6 className='mx-2'>
             Bank Branch Name.....................................
           </h6>
           <h6 className='mx-2'>
             Branch Code.................................................
           </h6>
           <h6 className='mx-2'>
             Challan No....................................................
           </h6>
           <h6 className='mx-2'>
             Licence No....................................................
           </h6>
           <h6 className='mx-2'>
             Name.............................................................
           </h6>
           <h6 className='mx-2'>
            Father Name................................................
           </h6>
           <div className="col my-5  border-top border-dark ">
           <h6 className='mx-2 my-2'>
            Form Price.....................................................
           </h6>
           <h6 className='mx-2'>
            Total Form.....................................................
           </h6>
           <h6 className='mx-2'>
             Amount Paid ................................................
           </h6>
           <h6 className='mx-2'>
             Date................................................................
           </h6>
           </div>
           <h5 className='text-center'>Bank Copy</h5>
         </div>
       </div>
        </Printer>
        </div>

       <div className='row m-2'>
        <div className="col-sm-12 pb-2">
         <div className='float-end pe-5 d-flex' >
          <button className='btn col-7 rounded border-2 bg-light mx-1  fw-bolder' onClick={() => print(ids)}> Download</button>
          <button className='btn col-7 rounded border-2  bg-light  fw-bolder'>Print</button>
         </div>
        </div>
        </div>
        
     </div> 
  )
}
export default FeeSlip;