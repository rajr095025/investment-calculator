function UserInput ({label, type , value, onChange,step }) {
    return <div >
            <label>{label}</label>
            <input type={type} value={value} onChange = {onChange} step={step ? step : 1}></input>
    </div>
}

export default UserInput;