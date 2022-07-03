import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
import auth from '../firebase.init';

import ToDo from './ToDo';
// import auth from '../../firebase.init';

const Home = () => {

    // const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const onSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const task = { name, email: user.email };
        const url = `https://red-crown-02976.herokuapp.com/addtask/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(task)
        })

            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset();
            })
    }



    return (
        <div>
            <h3 className='font-bold py-3'>Add Your Up Coming Work</h3>
            <form onSubmit={onSubmit} className="p-5 pb-10">
                <input type="text" placeholder="Type here & press Enter" name='name'
                    className="input input-bordered input-success w-full max-w-xs" />
                <br /><br />
                <button type="submit" className="btn btn-bordered btn-success w-full max-w-xs home-btn" >Enter</button>

            </form>

            <ToDo></ToDo>

        </div>
    );
};

export default Home;