import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Table from "react-bootstrap/Table";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Winetanks() {
  return (
    <div>
      <br></br>
      <br></br>

      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
        <Dropdown.ItemText>
          This is all the text that drops down{" "}
        </Dropdown.ItemText>
      </DropdownButton>
      <br></br>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
        <Dropdown.ItemText>
          This is all the text that drops down{" "}
        </Dropdown.ItemText>
      </DropdownButton>
      <br></br>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
        <Dropdown.ItemText>
          This is all the text that drops down{" "}
        </Dropdown.ItemText>
      </DropdownButton>
      <br></br>
      <DropdownButton id="dropdown-item-button" title="Dropdown button">
        <Dropdown.ItemText>AUTONOMOUS CONTROL</Dropdown.ItemText>
        <Dropdown.ItemText>
          This is all the text that drops down{" "}
        </Dropdown.ItemText>
      </DropdownButton>

      <br></br>

      <Table striped bordered hover>
        <thead></thead>
        <tbody>
          <tr>
            <td>weight</td>
            <td>2550kg</td>
          </tr>
          <tr>
            <td>capacity</td>
            <td>Jacob</td>
          </tr>
          <tr>
            <td>dimensions</td>
            <td>Jacob</td>
          </tr>
        </tbody>
      </Table>

      <br></br>
    </div>
  );
}

export default Winetanks;
