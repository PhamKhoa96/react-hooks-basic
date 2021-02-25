import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

Clock.propTypes = {
};

function formatDate(date) {
    if (!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function Clock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const clockInterval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);

            setTimeString(newTimeString)
        }, 1000); // after 1000ms, it will do something

        return () => {
            // cleanup setInterval when component Clock is unmounted
            console.log('Clock cleanup');
            clearInterval(clockInterval);
        };
    }, []); // this useEffect just run 1 time

    return (
        <p style={{ fontSize: '42px' }}>{timeString}</p>
    );
}

export default Clock;