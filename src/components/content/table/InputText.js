import React from 'react';

const InputText = ({label, name}) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="col-sm-2 col-lg-2 control-label">{label}</label>

            <div className="col-sm-10 col-lg-10">
                <input type="text" className="form-control" id={name} name={name} placeholder={label} />
            </div>
        </div>
    );
};

export default InputText;