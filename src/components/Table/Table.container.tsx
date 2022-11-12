import React from 'react'
import { BasicTable } from './Table'
import Skeleton from "@mui/material/Skeleton"
import { GetSkeletons } from "./SkeletonRow";
import { useSelector } from "react-redux";
import { useAppSelector } from "../../store/hooks";
import { useEffect, useRef } from "react";
import makeStyles from "@mui/styles/makeStyles"


const useStyles = makeStyles({
    root: {
        maxHeight: '650px',
        overflowY: 'scroll',
        "&::-webkit-scrollbar-track": {
            borderRadius: "1px"
        },
        "&::-webkit-scrollbar": {
            width: "5px",
            height: '5px'
        },
        "&::-webkit-scrollbar-thumb": {
            background: "#1976D2",
            borderRadius: "5px"
        }
    },
    skeleton: {
        width: "100%",
        height: '100%'
    }
});



export const TableContainer = () => {
    const tableRef = useRef<HTMLDivElement>()
    const styles = useStyles()
    const isPending = useAppSelector(state => state.users.isPending)
    const users = useAppSelector(state => state.users.users)
    const amountOfSkeletons = useAppSelector(state => state.users.amountOfSkeletons)

    useEffect(() => {
        setTimeout(() => {
            tableRef.current!.scrollTop = tableRef.current!.scrollHeight
        }, 10)
    }, [isPending])

    return (
        <>
            <BasicTable
                styles={styles}
                tableRef={tableRef}
                amountOfSkeletons={amountOfSkeletons}
                isPending={isPending}
                users={users}
            />
        </>
    )
}
