import React from 'react';

const Form = (props) => (
    <div>
        <div className="user-input">
                    <form onSubmit={props.submit}>
                        <input type='text' onChange={props.getVideoGame} placeholder='game' />
                        <input type='text' onChange={props.getTwitchViewers} placeholder='viewer count' />
                        <button type='submit'>Random streamer</button>
                    </form>
                </div>
    </div>
);

export default Form;