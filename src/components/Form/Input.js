export default function Input({text, styleClass}){
    return (
        <div className={styleClass || ''}>
            {/* <span className="label">{text}</span> */}
            <input  type="text" name="" id="" placeholder={text} required></input>
        </div>
    )
}