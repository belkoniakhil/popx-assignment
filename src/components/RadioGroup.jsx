function RadioGroup({
    value, onChange
}){
    return(
        <div className="radio-group">
            <label className="radio-option">
                <input type="radio" name="agency" value="Yes" checked={value==="Yes"} onChange={onChange} 
                /> Yes
            </label>
            <label className="radio-option">
                <input type="radio" name="agency" value="No" checked={value==="No"} onChange={onChange} />
                No
            </label>
        </div>
    );
}

export default RadioGroup;