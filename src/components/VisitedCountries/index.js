import './index.css'

const VisitedCountries = props => {
  const {imageList, clickRemove} = props
  const {imageUrl, name, id} = imageList

  const onClickRemove = () => {
    clickRemove(id)
  }

  return (
    <li className="countries-item">
      <img className="image" src={imageUrl} alt="thumbnail" />
      <div className="countries-container-btn">
        <p className="countries-text">{name}</p>
        <button
          data-testid="deleted"
          className="remove-btn"
          type="button"
          onClick={onClickRemove}
        >
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedCountries
