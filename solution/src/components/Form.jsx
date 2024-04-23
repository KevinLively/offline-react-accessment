import React, {useState, useEffect} from 'react';
import { isNameValid, getLocations } from '../mock-api/apis';

const Form = ({addEntry}) => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [locations, setLocations] = useState([]);
    const [isNameValidFlag, setIsNameValidFlag] = useState(true);

    useEffect(() => {
        const fetchLocation = async ()=>{
            const _locations = await getLocations();
            setLocations(_locations);
            setLocation(_locations[0])
        }
        fetchLocation();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && location){
            isNameValid(name).then((e) => {
                setIsNameValidFlag(e);
                if (e) {
                    addEntry({name, location});
                    setName('');
                    setLocation(locations[0]);
                }
            })
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="mb-3">
                <label  htmlFor="nameInput" className="form-label">Name</label>
                <input
                    type="text"
                    className={`form-control ${!isNameValidFlag ? 'is-invalid' : ''}`}
                    id="nameInput"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                {!isNameValidFlag && <div className="invalid-feedback"> Name is taken</div>}
            </div>
            <div className="mb-3">
                <label htmlFor="locationSelect" className="form-label">Location</label>
                <select
                    className="form-select"
                    id="locationSelect"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    {locations.map(loc => (
                        <option key={loc} value={loc}>{loc}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
};

export default Form;