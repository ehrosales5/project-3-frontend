
import { useState } from 'react'
import './CarForm.css'


import { useNavigate } from 'react-router'

const initialState = {
    brand: '',
    year: 0,
    model: ''
}

export default function CarForm(props) {

    const [formData, setFormData] = useState(initialState)

    const navigate = useNavigate()

    function handleChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        props.onSubmit(formData)
        setFormData(initialState)

        
    }

    return (
        <form className='car-form' onSubmit={handleSubmit}>
            <label htmlFor="brand">Make:</label>
            <input type="text" name='brand' id='brand' value={formData.brand} onChange={handleChange} />

            <label htmlFor="model">Model:</label>
            <input type="text" name='model' id='model' value={formData.model} onChange={handleChange} />

            <label htmlFor="year">Year:</label>
            <input type="text" name='year' id='year' value={formData.year} onChange={handleChange} />



            <button type='submit'>{props.buttonLabel}</button>
        </form>
    )
}
