import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GetSkeletons } from "./SkeletonRow";
import React from "react";
import { User } from "../../store/reuducers/users.slice";
import { ClassNameMap } from '@mui/styles'


interface BasicTableProps {
    users: User[]
    isPending: boolean
    amountOfSkeletons: number
    styles: ClassNameMap<"root" | "skeleton">
    tableRef: React.MutableRefObject<HTMLDivElement | undefined>
}

export const BasicTable: React.FC<BasicTableProps> = ({ amountOfSkeletons,
    isPending,
    users,
    tableRef,
    styles
}) => {

    return (
        // @ts-ignore
        <TableContainer ref={tableRef} className={styles.root} component={Paper}>
            <Table aria-label="Users">
                <TableHead>
                    <TableRow>
                        <TableCell>Number</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">Surname</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.length > 0 && users.map((el, i) => {
                            return <TableRow key={i}>
                                <TableCell component="th" scope="row">
                                    {i + 1}
                                </TableCell>
                                <TableCell align="right">{el.name}</TableCell>
                                <TableCell align="right">{el.surname}</TableCell>
                                <TableCell align="right">{el.email}</TableCell>
                                <TableCell align="right">{el.country}</TableCell>
                                <TableCell align="right">{el.age}</TableCell>
                            </TableRow>
                        }) || !isPending && <TableRow><TableCell align="left">no data</TableCell></TableRow>
                    }
                    {
                        isPending && <GetSkeletons amount={amountOfSkeletons} />
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}