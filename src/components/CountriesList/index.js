import './index.css'

const CountriesList = props => {
  const {countryDetail, clickIsVisited} = props
  const {name, id, isVisited} = countryDetail

  const visitCountry = isVisited ? 'visited' : 'visit'

  const onClickIsVisited = () => {
    clickIsVisited(id)
  }

  return (
    <li className="list-item-countries">
      <p className="name-text">{name}</p>
      {isVisited ? (
        <p className="text">{visitCountry}</p>
      ) : (
        <button className="visit-btn" type="button" onClick={onClickIsVisited}>
          {visitCountry}
        </button>
      )}
    </li>
  )
}

export default CountriesList
