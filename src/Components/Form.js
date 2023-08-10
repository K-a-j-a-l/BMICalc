import React, { useState } from "react";

export default function Form() {

    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [bmi, setBmi] = useState();
    const [message, setMsg] = useState('');

    const getWeight = (event) => {
        setWeight(event.target.value);
    }
    const getHeight = (event) => {
        setHeight(event.target.value);
    }
    let calcbmi = (e) => {
        e.preventDefault();
        if (weight === 0 || height === 0) {
            alert('Please enter a valid weight & height');
        } else {
            let bmi = (weight / (height * height));
            setBmi(bmi.toFixed(1));

            if (bmi < 25) {
                setMsg('You are underweight');
            } else if (bmi >= 25 && bmi < 30) {
                setMsg('You are Healthy');
            } else {
                setMsg('You are overweight');
            }
        }
    }
    let clear = () => {
        setWeight('');
        setHeight('');
        setMsg('');
        setBmi('');
    }

    return ( <
        >
        <
        div className = "max-w-md mx-auto my-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl" >
        <
        form className = "bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit = { calcbmi } >
        <
        div className = "mb-4" >
        <
        label className = "block text-gray-700 text-sm font-bold mb-2"
        forName = "Weight" >
        Weight( in kgs) <
        /label> <
        input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id = "Weight"
        type = "text"
        value = { weight }
        onChange = { getWeight }
        /> <
        /div> <
        div className = "mb-6" >
        <
        label className = "block text-gray-700 text-sm font-bold mb-2"
        forName = "Height" >
        Height( in m) <
        /label> <
        input className = "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id = "Height"
        type = "text"
        value = { height }
        onChange = { getHeight }
        /> <
        /div> <
        div className = "flex items-center justify-between" >
        <
        button className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type = "submit" >
        Calculate BMI <
        /button> <
        button onClick = { clear }
        className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type = "button" >
        Clear <
        /button> <
        /div> <
        div className = "mb-6" >
        <
        h3 className = "block text-gray-700 text-sm font-bold mb-2" > Your BMI is { bmi } < /h3> <
        p > { message } < /p> <
        /div> <
        /form>

        <
        /div> <
        />
    );
}