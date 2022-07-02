import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import Footer from './Footer';

const Calendar = () => {
    return (
        <div>
            <div class="hero">
                <div >
                    <div class="max-w-md">
                        <DayPicker />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >

    );
};

export default Calendar;