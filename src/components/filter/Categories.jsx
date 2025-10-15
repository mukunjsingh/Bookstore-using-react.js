import React from 'react'

const Categories = ({ category, setcategory }) => {

    const handleChange = (e) => {
        if (e.target.checked) {
            setcategory([...category, e.target.value.toLowerCase()]);
        } else {
            setcategory(category.filter((c) => c !== e.target.value.toLowerCase()));
        }
    };












    return (
        <div className="p-2 space-y-2">
            <div>
                <input type="checkbox" id="self-help" name="category" value="Self-Help" onChange={handleChange} />
                <label htmlFor="self-help" className="ml-2">Self-Help</label>
            </div>
            <div>
                <input type="checkbox" id="productivity" name="category" value="Productivity" onChange={handleChange}/>
                <label htmlFor="productivity" className="ml-2">Productivity</label>
            </div>
            <div>
                <input type="checkbox" id="finance" name="category" value="Finance" onChange={handleChange}/>
                <label htmlFor="finance" className="ml-2">Finance</label>
            </div>
            <div>
                <input type="checkbox" id="philosophy" name="category" value="Philosophy" onChange={handleChange} />
                <label htmlFor="philosophy" className="ml-2">Philosophy</label>
            </div>
            <div>
                <input type="checkbox" id="history" name="category" value="History" onChange={handleChange} />
                <label htmlFor="history" className="ml-2">History</label>
            </div>
            <div>
                <input type="checkbox" id="psychology" name="category" value="Psychology" onChange={handleChange} />
                <label htmlFor="psychology" className="ml-2">Psychology</label>
            </div>
            <div>
                <input type="checkbox" id="fiction" name="category" value="Fiction" onChange={handleChange} />
                <label htmlFor="fiction" className="ml-2">Fiction</label>
            </div>
            <div>
                <input type="checkbox" id="business" name="category" value="Business" onChange={handleChange} />
                <label htmlFor="business" className="ml-2">Business</label>
            </div>
            <div>
                <input type="checkbox" id="spirituality" name="category" value="Spirituality" onChange={handleChange} />
                <label htmlFor="spirituality" className="ml-2">Spirituality</label>
            </div>
            <div>
                <input type="checkbox" id="memoir" name="category" value="Memoir" onChange={handleChange} />
                <label htmlFor="memoir" className="ml-2">Memoir</label>
            </div>
        </div>
    )
}

export default Categories