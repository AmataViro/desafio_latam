import React, {useState} from 'react';

const isDisabled = (name) =>{
    return name === ''
}

const AddForm = function(props){
    const [name, setName] = useState('');
    const [race, setRace] = useState('');
    const [age, setAge] = useState(0);
    const [weapon, setWeapon] = useState('');
    const [live, setLive] = useState(true);
    const [usering, setUsering] = useState(true);

    
    return (
    <form>
        <label>Nombre:</label>
        <input className={'form-control'} name="name" type="text" value={name} onChange={(event) => {setName(event.target.value);}} />
        <br />
        <label>Raza</label>
        <input className={'form-control'} name="race" type="text" value={race} onChange={(event) => {setRace(event.target.value);}} />
        <br />
        <label>Edad</label>
        <input className={'form-control'} name="age" type="number" value={age} onChange={(event) => {setAge(event.target.value);}} />
        <br />
        <label>Arma</label>
        <input className={'form-control'} name="weapon" type="text" value={weapon} onChange={(event) => {setWeapon(event.target.value);}} />
        <br />
        <label>Live</label>
        {/*<input type="radio" name="live" value={true} checked={live?true:false} onChange={(event) => {setLive(event.target.value);}} /> True
        <input type="radio" name="live" value={false} checked={live?true:false} onChange={(event) => {setLive(event.target.value);}} /> False */}
        <input className={'form-control'} name="live" type="text" value={live} onChange={(event) => {setLive(event.target.value);}} />
        <br />
        <label>Use Ring</label>
        <input className={'form-control'} name="usering" type="text" value={usering} onChange={(event) => {setUsering(event.target.value);}} />
        <br />
        <button 
        disabled={isDisabled(name)}
        onClick={(event) => {
            event.preventDefault();
            const hero = {
                name, age, weapon,race, live, usering
            };
            props.onAddHero(hero);
            props.closeModal();
            setName(''); // sirve para dejar en valor inicial el input
        }}>Agregar</button>
    </form>)
};

export default AddForm;