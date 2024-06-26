import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export const AppCalendar = ({current}) => {
    const [value, setValue] = useState(current);

    const onChange = (e) => {
        setValue(e);
        console.log(e);
    }

    return (
        <div className="w-100 h-100 px-3">
            <Calendar maxDetail='month' view='month' className="border rounded-4 w-100 border border-green" onChange={onChange} value={value} />
        </div>
    )
}