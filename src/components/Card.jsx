import axios from 'axios'
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBCol, 
  MDBInput,
  MDBContainer, 
  MDBRow, } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';


const Card = () => {
  const [dataList , setDataList] = useState([])
  const [searchTerm, setSearchTerm] = useState('');

  //------------ Connection ------------
  const FetchData =  async() => {
    try{
      const response = await axios.get("https://restcountries.com/v3.1/all")
      setDataList(response.data.map((item) => ({ ...item, id: item.cca3 })));
    }catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    FetchData()
  }, [])

  //------------ Delete Item ------------
  const  handleDelete = (id) => {
    setDataList(dataList.filter(item => item.id !== id))
  }

  //------------ Handle Change ------------
  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //------------ Search ------------
  const filteredDataList = dataList.filter((item) => {
    return item.name.common.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <MDBContainer>
      {/* ------------ Search Input ------------*/}
        <MDBInput label='Search by country name'  value={searchTerm} onChange={handleSearchInputChange} type='text' />
      <MDBRow>
        {filteredDataList.map(item=>(
          // ------------ Card  ------------
        <MDBCol key={item.id} sm={12} md={6} lg={4}>
          <MDBCard  style={{height : "95vh" , margin : "10px" }}>
              <MDBCardImage position='top' alt='...' style={{height : "30vh"}} src={item.flags.png} />
            <MDBCardBody>
              <MDBCardTitle>{item.name.common}</MDBCardTitle>
              <MDBCardText>
                <p>
                  {item.altSpellings[2]} 
                <br />
                Area Code : {item.area}
                </p>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem>Capital : {item.capital}</MDBListGroupItem>
                <MDBListGroupItem>Region : {item.region}</MDBListGroupItem>
                <MDBListGroupItem>Population: {item.population}</MDBListGroupItem>
              </MDBListGroup>
              <Button variant="danger" className="mt-2 w-100" size="lg" 
              onClick={ () =>handleDelete(item.id)}>Delete</Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  )
}

export default Card
