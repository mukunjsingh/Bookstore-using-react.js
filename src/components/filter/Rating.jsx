import React from 'react';

const Rating = ({ rating, setrating }) => {
    const handleChange = (e) => {
        const value = Number(e.target.value); // convert to number

        if (e.target.checked) {
            setrating((prev) => [...prev, value]); // add
        } else {
            setrating((prev) => prev.filter((c) => c !== value)); // remove
        }
    };

    return (
        <div className="p-2">
            <label className="block">
                <input
                    type="checkbox"
                    value={5}
                    checked={rating.includes(5)}
                    onChange={handleChange}
                />{' '}
                5⭐
            </label>
            <label className="block">
                <input
                    type="checkbox"
                    value={4}
                    checked={rating.includes(4)}
                    onChange={handleChange}
                />{' '}
                4⭐
            </label>
            <label className="block">
                <input
                    type="checkbox"
                    value={3}
                    checked={rating.includes(3)}
                    onChange={handleChange}
                />{' '}
                3⭐
            </label>
            <label className="block">
                <input
                    type="checkbox"
                    value={2}
                    checked={rating.includes(2)}
                    onChange={handleChange}
                />{' '}
                2⭐
            </label>
            <label className="block">
                <input
                    type="checkbox"
                    value={1}
                    checked={rating.includes(1)}
                    onChange={handleChange}
                />{' '}
                1⭐
            </label>
        </div>
    );
};

export default Rating;
