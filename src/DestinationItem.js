import './Destination.css'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const DestinationItem = props => {
  //   const settings = {
  //     dots: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //   }

  const {destinationDetails} = props
  const {imageURL, name, description, id} = destinationDetails
  return (
    <div className="destination-item-container">
      <div>
        <div className="image-container">
          <img
            className="destination-item-image"
            src={imageURL}
            alt={`project-item${id}`}
          />
          <button type="button" className="r-button">
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693663285/Vector_q4arlk.png"
              alt="star"
            />
            4.8
          </button>
          <button type="button" className="exclusive">
            EXCLUSIVE
          </button>
        </div>
        <h4>{name}</h4>
        <p className="p-desc">{description}</p>
      </div>
    </div>
  )
}

export default DestinationItem