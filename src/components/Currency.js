import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Select from "react-select";

const options = [
    { value: "$", label: "$ Dollar" },
    { value: "£", label: "£ Pound" },
    { value: "€", label: "€ Euro" },
    { value: "₹", label: "₹ Ruppee" },
];

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const defaultOption = options.find(option => option.value === currency);

    const handleChange = (selectedOption) => {
        console.log(selectedOption);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedOption.value,
        });
    };

    return (
        <div className='alert alert-secondary p-2'>
            <Select
                options={options}
                value={defaultOption}
                onChange={handleChange}
            />
        </div>
    );
};
export default Currency;