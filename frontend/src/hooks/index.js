import { useState } from 'react'

export const useField = (name) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        // console.log('value changed', event.target.value)
        setValue(event.target.value)
    }

    const reset = () => setValue('')

    return {
        inputValues: {
            name,
            value,
            onChange,
        },
        reset,
    }
}

export const useModal = () => {
    const [open, setOpen] = useState(false)

    const flipModalState = () => {
        setOpen(!open)
    }

    return {
        open,
        flipModalState,
    }
}
