import { rows } from "@/utils/common";
import { Avatar, Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";

const StyledCell = styled(TableCell)`
  color: white;
  border-color: #444;
  margin: 0px;
  padding: 10px;
`;

const StyledHeadingCell = styled(TableCell)`
  color: white;
  font-weight: bold;
  border-color: #444;
`;

export function BasicTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledHeadingCell align="left">Customer</StyledHeadingCell>
            <StyledHeadingCell align="center">Order No.</StyledHeadingCell>
            <StyledHeadingCell align="center">Amount</StyledHeadingCell>
            <StyledHeadingCell align="left">Status</StyledHeadingCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledCell
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Avatar alt="profile-pic" src={row.pic} />
                {row.name}
              </StyledCell>
              <StyledCell align="center">{row.orderNo}</StyledCell>
              <StyledCell align="center">
                ${parseFloat(row.amount).toFixed(2)}
              </StyledCell>
              <StyledCell align="right">
                <Status text={row.status} type={row.status} />
              </StyledCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const Status = ({ type, text }) => {
  const color =
    type === "Delivered"
      ? "bg-green-900 text-green-100"
      : "bg-red-900 text-red-100";
  return (
    <Box
      className={`w-20 h-5 grid place-items-center bg-opacity-50 rounded-full ${color} text-opacity-40 text-xs font-bold`}
    >
      {text}
    </Box>
  );
};
