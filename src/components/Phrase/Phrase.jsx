import './Phrase.css'
const Phrase = ({phrase}) => {
  return (
    <div className='phrase_container'>
        <div>
            <p>{phrase}</p>
        </div>   
    </div>
  )
}
export default Phrase