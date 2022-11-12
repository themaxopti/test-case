import React from 'react'
import { Form } from './Form'
import makeStyles from "@mui/styles/makeStyles"
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useForm, FieldErrorsImpl } from "react-hook-form";
import { makeUser } from '../../store/reuducers/users.slice';


export interface Inputs {
    name: string
    email: string
    age: string
    surname: string
    country: string
}

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    submitButton: {
        width: '100px'
    }
});

export type Errors = Partial<FieldErrorsImpl<{
    name: string;
    email: string;
    age: string;
    surname: string;
    country: string;
}>>

export const FormContainer = () => {
    const dispatch = useAppDispatch()
    const errorFromServer = useAppSelector(state => state.users.error)
    const classes = useStyles()


    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const onSubmit = async (data: Inputs) => {
        dispatch(makeUser(data))
    }



    return (
        <>
            <Form
                classes={classes}
                errorFromServer={errorFromServer}
                errors={errors}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
                register={register}
            />
        </>
    )
}
