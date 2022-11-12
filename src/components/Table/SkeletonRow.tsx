import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Skeleton from "@mui/material/Skeleton"
import makeStyles from "@mui/styles/makeStyles"
import { useEffect, useState } from "react";

const useStyles = makeStyles({
    skeleton: {
        width: "100%",
        height: '100%'
    }
});


export const SkeletonRow = () => {
    const styles = useStyles()

    return (
        <TableRow>
            <TableCell component="th" >
                <Skeleton className={styles.skeleton} variant="rectangular" />
            </TableCell>
            <TableCell align="right" >
                <Skeleton className={styles.skeleton} variant="rectangular" />
            </TableCell>
            <TableCell align="right" >
                <Skeleton className={styles.skeleton} variant="rectangular" />
            </TableCell>
            <TableCell align="right" >
                <Skeleton className={styles.skeleton} variant="rectangular" />
            </TableCell>
            <TableCell align="right" >
                <Skeleton className={styles.skeleton} variant="rectangular" />
            </TableCell>
            <TableCell align="right" >
                <Skeleton className={styles.skeleton} variant="rectangular" />
            </TableCell>
        </TableRow>
    )
}

interface GetSkeletonsProps {
    amount: number
}

export function GetSkeletons({ amount }: GetSkeletonsProps) {

    const [arr, setArr] = useState<any[]>([])

    useEffect(() => {
        const arr: any[] = []
        for (let i = 0; i < amount; i++) {
            arr.push(i)
        }
        setArr(arr)
    }, [])

    return (
        <>
            {
                arr.map((el, i) => <SkeletonRow key={i} />)
            }
        </>
    )
}

