export default function Input({text}){
    return (
        <div className="input-container">
            {/* <span className="label">{text}</span> */}
            <input type="text" name="" id="" placeholder={text} required></input>
        </div>
    )
}