import React from "react";
import {toast} from "react-toastify";


export const SuccessTool = (message) => {
    return (
        toast.success(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}

export const ErrorTool = (message) => {
    return (
        toast.error(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}

export const DangerTool = (message) => {
    return (
        toast.warn(message, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    )
}

export const PromisseTool = (promise) => {
    return (
        toast.promise(promise, {
            pending: 'Wait a moment',
            success: 'Welcome to Motion 👌',
            error: 'Password Incorrect 🤯'
        })
    )
}