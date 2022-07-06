import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchUser = ({ handleChange }) => {
  return (
    <div className="row">
      <div className="col-md-6 mx-auto">
        <InputGroup className="mb-3 mt-4">
          <InputGroup.Text
            className="bg-info text-white"
            id="inputGroup-sizing-default"
          >
            search
          </InputGroup.Text>
          <Form.Control
            type="search"
            onChange={handleChange}
            aria-describedby="inputGroup-sizing-default"
          />
        </InputGroup>
      </div>
    </div>
  )
}

export default SearchUser
