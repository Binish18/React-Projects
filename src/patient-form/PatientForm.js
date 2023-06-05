import React from 'react'
import './PatientForm.css'
const PatientForm = () => {
  return (
    <>
      <div class="container overflow-hidden">
  <div class="row">
    <div class="col">
      <form className='mt-3'>
      <div class="form-group  label_name ">
    <label for="exampleFormControlSelect1" className='patient-label'>Patient Name:</label>
    
    <select class="form-control mt-2 border-primary" id="exampleFormControlSelect1">
      <option>Name</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
     
   
  </div>
  <div class="form-group mt-3 label_name">
    <label for="exampleFormControlSelect1" className='patient-label mt-3'>District:</label>
    
    <select class="form-control  mt-1 mb-4 border-primary" id="exampleFormControlSelect1">
      <option>District</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
    </div>
      <div class = "label_name">
      <label for="exampleFormControlSelect1" className='patient-label mb-2'>Antibiotic Required?</label>
      </div>
    
       <form>
   
        <div class="form-group  border d-flex p-3 border-primary ">
          <div class="form-check form-check-inline py-1 ">
            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions"  id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Yes</label>
          </div>
          <div class="form-check form-check-inline py-1">
            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">No</label>
          </div>
        
        </div>
      </form>
  
    
    
  </form>
    </div>
    <div class="col">
     <form className='mt-3'>
     <div class = "label_name">
      <label for="exampleFormControlSelect1" className='patient-label mb-2'>Age</label>
      </div>
    
       <form>
       <div class="form-row d-flex border border-primary py-2">
 
  <label class="form-label me-4 ms-3 ">Years</label>
    <div class="col">

      <input type="number"  class="form-control w-50 border-primary"/>
    </div>
    <label class="form-label me-4">Month</label>
    <div class="col">
      <input type="number"  class="form-control w-50 border-primary"/>
    </div>
  </div>
      </form>
      <div class="form-group  label_name mt-2">
    <label for="exampleFormControlSelect1" className='patient-label mt-2'>Diagnosis(Acute):</label>
    
    <select class="form-control mt-1 border-primary" id="exampleFormControlSelect1">
      <option>List</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
     
   
  </div>
     </form>
    </div>
    <div class="col">
    <form className='mt-3'>
    <div class = "label_name">
      <label for="exampleFormControlSelect1" className='patient-label mb-2'>Gender</label>
      </div>
    
       <form>
   
        <div class="form-group  border d-flex p-3 border-primary ">
          <div class="form-check form-check-inline py-0 ">
            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions"  id="inlineRadio1" value="option1"/>
            <label class="form-check-label" for="inlineRadio1">Male</label>
          </div>
          <div class="form-check form-check-inline py-0">
            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">Female</label>
          </div>
          <div class="form-check form-check-inline py-0">
            <input class="form-check-input border-primary" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label class="form-check-label" for="inlineRadio2">Others</label>
          </div>
        </div>
      </form>
      <div class="form-group  label_name mt-2">
    <label for="exampleFormControlSelect1" className='patient-label mt-1' style={{fontSize:"0.9em"}}>Suggested Non-Antibiotic Alernatives:</label>
    
    <select class="form-control mt-1 border-primary" id="exampleFormControlSelect1">
      <option>Select an Option</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
     
   
  </div>
    </form>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col-4">
    
    </div>
    <div class="col-8">
     <form className='border border-primary mb-3 px-5 py-5'>
     <div class = "label_name ">
      <label for="exampleFormControlSelect1" className='patient-label '>Accountable Justification</label>
      </div>
    
       <form>
   
        <div class="form-group  border mt-2 p-2 ps-3 border-primary ">
          <div class="form-check  py-0 ">
          <input class="form-check-input border-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label float-start" for="inlineRadio1">Reason 1</label>
          </div>
          <div class="form-check  py-0">
          <input class="form-check-input border-primary" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
            <label class="form-check-label float-start " for="inlineRadio2">Reason 2</label>
          </div>
        
        </div>
      </form> 
      <div class="form-group  label_name mt-2">
    <label for="exampleFormControlSelect1" className='patient-label mt-2'>Antibiotic Treatment Plan</label>
    
    <select class="form-control mt-1 mb-1 border-primary" id="exampleFormControlSelect1">
      <option>Antibiotic + Dose + Frequency</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
     
   
  </div>
 </form> 
</div>

   
  </div>
</div>
{/* <div className='float-end me-5'>
<button className='btn btn-primary btn-sm mb-5 px-4 '>Save</button>
<button className='btn btn-primary btn-sm mb-5 px-4 '>Cancel</button>
</div> */}

    <div className=' mb-5' style={{textAlign:"end",marginRight:"7em"}}>
<button className='btn btn-primary btn-sm mb-5 px-5 me-3 '>Save</button>
<button className='btn btn-primary btn-sm mb-5 px-5 '>Cancel</button>
</div>

    </>
  )
}

export default PatientForm
