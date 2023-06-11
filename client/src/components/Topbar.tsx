import { Dispatch, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

import xvmartLogo from '../assets/images/xvmart.jpg';
import { categoryProps } from '../types/mainTypes'

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IProps {
    categories: categoryProps[],
    setSelectedCategory: Dispatch<SetStateAction<string>>
}

const Topbar: React.FunctionComponent<IProps> = (props: IProps) => {

    const [selectedCategory, setSelectedCategory] = useState("All")

    const handleDropdownChange = (event: SelectChangeEvent) => {
        setSelectedCategory(event.target.value as string)
        props.setSelectedCategory(event.target.value as string)
    }

    return (
        <div className="fixed top-0 w-full z-50 bg-white">
            <div className="flex flex-row container m-auto mt-4 items-center justify-between">
                <div className="flex items-center">
                    <Link to="/">
                        {/* eslint-disable-next-line */}
                        <img className="h-16 w-48" src={xvmartLogo} />
                    </Link>
                    <div className="pl-10">
                        <FormControl sx={{ minWidth: 160 }}>
                            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={selectedCategory}
                                label="Standard"
                                onChange={handleDropdownChange}
                            >
                                {props.categories.map((category,index) => (
                                    <MenuItem key={index} value={category.Name}>{category.Name}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <Link to="/cart">
                    CART
                </Link>
            </div>
        </div>
    )
}

export default Topbar