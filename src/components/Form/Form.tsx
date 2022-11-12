import React, { LegacyRef } from 'react'
import { TextField } from "@mui/material";
import Button from '@mui/material/Button'
import { registerInput } from './utils'
import { motion } from 'framer-motion';
import { ClassNameMap } from '@mui/styles'
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { Errors, Inputs } from './Form.container';


interface FormPros {
    classes: ClassNameMap<"root" | "submitButton">
    handleSubmit: UseFormHandleSubmit<Inputs>
    errors: Errors
    register: UseFormRegister<Inputs>
    errorFromServer: string | null
    onSubmit: (data: Inputs) => Promise<void>
}

export const Form: React.FC<FormPros> = ({
    classes,
    errorFromServer,
    errors,
    onSubmit,
    handleSubmit,
    register
}) => {

    return (
        <motion.form
            className='form'
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className='title'>Create user</div>
            <motion.div
                className='fields'
                initial={{ opacity: 0, scale: 0.5, marginLeft: '100px' }}
                animate={{ opacity: 1, scale: 1, marginLeft: '0px' }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <TextField
                    className={classes.root}
                    error={errors.name && true}
                    {...registerInput(register, 'name', { minLenght: 2, onlyString: true })}
                    label={`Name`}
                    variant="standard"
                />
                {errors.name && <div className='error'>{errors.name.message}</div>}

                <TextField
                    className={classes.root}
                    error={errors.surname && true}
                    defaultChecked={true}
                    {...registerInput(register, 'surname', { minLenght: 2, onlyString: true })}
                    variant="standard"
                    label={`Surname`}
                />
                {errors.surname && <div className='error'>{errors.surname.message}</div>}


                <TextField
                    error={errors.email && true}

                    className={classes.root}
                    {...registerInput(register, 'email', { email: true })}
                    label="Email"
                    variant="standard"
                />
                {errors.email && <div className='error'>{errors.email.message}</div>}


                <TextField
                    className={classes.root}
                    error={errors.country && true}
                    {...registerInput(register, 'country', { minLenght: 2, onlyString: true })}
                    label="Country"
                    variant="standard"
                />
                {errors.country && <div className='error'>{errors.country.message}</div>}


                <TextField
                    type={"number"}
                    error={errors.age && true}
                    className={classes.root}
                    {...registerInput(register, 'age', { maxLength: 3 })}
                    label="Age"
                    variant="standard"
                />
                {errors.age && <div className='error'>{errors.age.message}</div>}

            </motion.div>
            {errorFromServer && <div className='error-server'>{errorFromServer}</div>}
            <Button
                className={classes.submitButton}
                type='submit'
                variant="contained"
                disableElevation
            >
                Add
            </Button>
        </motion.form>
    )
}