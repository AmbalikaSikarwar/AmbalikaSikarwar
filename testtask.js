import React, {useState} from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';


function Testtask() {

  const [basePrice, setBasePrice] = useState(1000);
  const [color, setColor] = useState(0);
  const [power, setPower] = useState(0);
  const [warpDrive, setWarpDrive] = useState(0);
  const [optionPackage, setOptionPackage] = useState(0);


  return (
    <div>
    <center><h2><u>Spaceship configerator</u></h2></center>
    <div class="container">
    <div class="row">
      <div class="col">
      <p>
      <h4>Select Color</h4>
      <button type="button" class="btn btn-light"  onClick = {() => setColor(0)}>+0€ <br></br> Snow</button>{" "}
      <button type="button" class="btn btn-danger"  onClick = {() => setColor(100)}>+100€ <br></br>  volacano</button>{" "}
      <button type="button" class="btn btn-info"  onClick = {() => setColor(100)}>+100€ <br></br>  Sky</button>{" "}
      </p><br></br>
      <p>
      <h4>Select Power</h4>
      <button type="button" class="btn btn-outline-secondary" onClick = {() => setPower(0)}>100 MW<br></br>  +0€ </button>{" "}
      <button type="button" class="btn btn-outline-secondary" onClick = {() => setPower(200)}>140 MW <br></br> +200€ </button>{" "}
      <button type="button" class="btn btn-outline-secondary" onClick = {() => setPower(400)}>200 MW <br></br> +400€ </button>{" "}
      </p><br></br>
      <p>
      <h4>Warp Drive</h4>
      <button type="button" class="btn btn-outline-info"  onClick = {() => setWarpDrive(0)}>NO <br></br> +0€ </button>{" "}
      <button type="button" class="btn btn-outline-info"  onClick= {() => setWarpDrive(1000)} >YES <br></br>  +1000€ </button>{" "}
      </p><br></br>
      <p>
      <h4>Select Option Package:</h4>
      <p><button type="button" class="btn btn-success"  onClick ={() => setOptionPackage(0)}><h4>Basic</h4><p>. Air Conditioning</p>
      <p>. Cloth seats</p>
      <p>. Fm radio</p>    
      <p>.</p> 
      
      </button>{" "}
  
      <button type="button" class="btn btn-success"   onClick ={() => setOptionPackage(200)}><h4>Sport +100€ </h4>
      <p>. Air Conditioning</p>
      <p>. Cloth seats</p>
      <p>. Fm radio</p>    
      <p>. Personal tech support</p>  
      
      </button>{" "}
  
      <button  type="button" class="btn btn-success" onClick ={() => setOptionPackage(400)}><h4>Lux +400€ </h4>
      <p>. Air Conditioning</p>
      <p>. luxury seats</p>
      <p>. chrome weels</p>
      <p>. window tint</p>      
        
      </button>
      </p>
      </p>
      
      </div>
      
      <div class="col">
      <MDBCard style={{ maxWidth: '22rem' }}>
      <MDBCardBody>
      <h4>Base Price: {basePrice} € </h4>
      <h4>Color:  {color} € </h4>
      <h4>Power:  {power} € </h4>
      <h4>Warp drive: {warpDrive} €</h4>
      <h4>Option package: {optionPackage} € </h4>
      <div class="card-footer">
      <h4>Total:  {basePrice + color + power + warpDrive + optionPackage} €  </h4>
      </div>
      </MDBCardBody>
      </MDBCard>
      </div>
    </div>
    </div>

    </div>
  )
}

export default Testtask;