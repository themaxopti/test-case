import React, { useEffect } from 'react'
import App from './App'
import makeStyles from "@mui/styles/makeStyles"
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { fetchUser } from '../../store/reuducers/users.slice'



const useStyles = makeStyles({
    root: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    showMoreBtn: {
        width: '150px',
        height: '50px',
        transform: 'translateY(10px)'
    },
    mainContainer: {
        padding: '20px'
    }
})

export const AppContainer = () => {
    const dispatch = useAppDispatch()
    const page = useAppSelector(state => state.users.currentPage)
    const isPanding = useAppSelector(state => state.users.isPending)

    useEffect(() => {
        dispatch(fetchUser({ page, totalItemsCount: 5, delayAmount: 2000 }))
    }, [])

    function showMoreUsers() {
        dispatch(fetchUser({ page, totalItemsCount: 3 }))
    }
    const styles = useStyles()

    return (
        <>
            <App
                isPanding={isPanding}
                showMoreUsers={showMoreUsers}
                styles={styles}
            />
        </>
    )
}
