import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCheck } from "@fortawesome/free-solid-svg-icons";

import { StyledTable, StyledBoxIcon } from "./InfoTable.css";

const InfoTable: React.FC = () => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Godz:</th>
          <th>Data:</th>
          <th>Informacja:</th>
          <th>Zobacz:</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>14:35</td>
          <td>12 czerwiec 2021</td>
          <td>Zamówienie 126/6 zostało potwierdzone przez stylistkę.</td>
          <td>
            <Link to='/'>
              <StyledBoxIcon variant='see'>
                <FontAwesomeIcon icon={faEye} />
              </StyledBoxIcon>
            </Link>
            <Link to='/'>
              <StyledBoxIcon variant='check'>
                <FontAwesomeIcon icon={faCheck} />
              </StyledBoxIcon>
            </Link>
          </td>
        </tr>
        <tr>
          <td>17:25</td>
          <td>13 czerwiec 2021</td>
          <td>Zamówienie 126/6 zostało opłacone przez klientkę.</td>
          <td>
            <Link to='/'>
              <StyledBoxIcon variant='see'>
                <FontAwesomeIcon icon={faEye} />
              </StyledBoxIcon>
            </Link>
            <Link to='/'>
              <StyledBoxIcon variant='check'>
                <FontAwesomeIcon icon={faCheck} />
              </StyledBoxIcon>
            </Link>
          </td>
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default InfoTable;
