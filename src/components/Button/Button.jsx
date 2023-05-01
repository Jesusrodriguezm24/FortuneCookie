import "./button.css"
const Button = ({handlered}) => {
  return (
    <div className="cls_button">
        <button onClick={handlered}>
            Probar mi suerte
        </button>
    </div>
  )
}
export default Button