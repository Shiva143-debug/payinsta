import {Component} from 'react'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'


import './App.css'
import DestinationItem from './DestinationItem'

const destinationList = [
  {
    id: 0,
    imageURL:
      'https://res.cloudinary.com/dxgbxchqm/image/upload/v1693661376/images_k4hcvx.jpg',
    name: 'Harvard University',
    description: 'Cambridge, Massachusetts, UK',
  },
  {
    id: 1,
    imageURL:
      'https://res.cloudinary.com/dxgbxchqm/image/upload/v1693661447/images_1_xawqnw.jpg',
    name: 'Oxford University',
    description: 'oxford ,England',
  },
  {
    id: 2,
    imageURL:
      'https://res.cloudinary.com/dxgbxchqm/image/upload/v1693661502/images_2_tkbapd.jpg',
    name: 'Stanford University',
    description: 'Stanford ,california',
  },
  {
    id: 3,
    imageURL:
      'https://res.cloudinary.com/dxgbxchqm/image/upload/v1693631743/download_xkr9aq.jpg',
    name: 'nanyang technological university',
    description: 'nanyang Ave ,singapura',
  },
]

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="nav">
          <div className="flex">
            <p>Home</p>
            <p>About</p>
            <p>schedules</p>
            <p>Membership</p>
            <p>pricing</p>
          </div>
          <div className="flex">
            <p>offers</p>
            <button type="button" className="button2">
              Courses
            </button>
          </div>
        </div>

        <div>
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693723221/Ellipse_46_nxaxi1.svg"
            alt="d"
            className="vector1"
          />
          <div className="signup">
            <div className="sign-left">
              <p className="p">Discover the beauty of tropics</p>
              <p className="heading">Tropical Destinations For students</p>
              <p className="p2">
                Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi
                bibendum integer rutrum nisi. A nec nisl vitae
              </p>
              <button type="button" className="button2">
                SIGN Up
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693723044/Ellipse_49_sbskux.svg"
              alt="p"
              className="l-vector"
            />
            <div className="eclipse">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693584798/image_37_1_xlndlj.png"
                alt="any"
                className="m-image"
              />
              <div className="ba">.</div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693723575/Subtract_yhn6pt.svg"
            alt="c"
            className="circle"
          />
        </div>
        <div className="Topical">
          <div className="card-set">
            <div className="card">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693589595/avatar_1_zj9bot.svg"
                alt="any"
                className="a-image"
              />
              <div className="J-info">
                <p className="a-name">Jenny wilson</p>
                <p className="a-d">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693656102/avatar_3_hnfsvz.png"
                alt="any"
                className="a-image"
              />
              <div className="J-info">
                <p className="a-name">Jenny wilson</p>
                <p className="a-d">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
            <div className="card">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693656114/avatar_4_cirme0.png"
                alt="any"
                className="a-image"
              />
              <div className="J-info">
                <p className="a-name">Jenny wilson</p>
                <p className="a-d">
                  Lorem ipsum dolor sit amet, consectetur adipiscing...
                </p>
              </div>
            </div>
          </div>

          <div className="t-l">
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693723221/Ellipse_46_nxaxi1.svg"
              alt="d"
              className="vector2"
            />
            <h2 className="h2-c">Topical Adventure For students</h2>

            <p className="relax">
              student Topical vacation: Relax and Recharge
            </p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit </li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <button type="button" className="button2">
              explore more
            </button>
          </div>
        </div>

        <div className="destination">
          <h3 className="desti">Our Destinations</h3>
          <div className="k-k">
            <ul className="d-cards">
              {destinationList.map(destinationDetails => (
                <DestinationItem
                  key={destinationList.id}
                  destinationDetails={destinationDetails}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="discount">
          <div className="info">
            <p className="off">Get 20% off for students</p>
            <h2 className="avail">Student discount available.</h2>
            <p className="some">Get ready for some fun in the sun!</p>
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Massa quis natoque sit quam</li>
              <li>Eros non pellentesque elit</li>
              <li>tortor id euismod habitant</li>
              <li>Sed suspendisse id in ultrices</li>
            </ul>
            <button type="button" className="button2">
              Explore More
            </button>
          </div>
          <div className="eclipse2">
            <div className="rectangle">.</div>
            <div className="rectangle2">.</div>
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693576611/image_40_kwvaxv.png"
              alt="p"
              className="f-image"
            />
            <div className="ci">.</div>
          </div>
        </div>

        <div className="image-form">
          <div className="eclipse">
            <div className="rectangular3">.</div>
            <img
              src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693639882/image_41_yowogr.png"
              alt="form-i"
              className="form-i"
            />

            <div className="ca">.</div>
          </div>

          <div className="form">
            <p className="book-now">Book Now</p>
            <p className="form-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
            <label htmlFor="city">CITY</label>
            <br />
            <input id="city" placeholder="city" className="city-input" />
            <br />

            <br />
            <div className="flex-i">
              <div>
                <label htmlFor="arrival">ARRIVAL</label>
                <br />
                <input id="arrival" placeholder="10 October" />
              </div>
              <div>
                <label htmlFor="departure">DEPARTURE</label>
                <br />
                <input id="departure" placeholder="11 October" />
              </div>
            </div>

            <div className="flex-i">
              <div>
                <label htmlFor="star">STAR</label>
                <br />
                <div className="icons">
                  <div className="icon">
                    <AiOutlineMinus />
                  </div>
                  <input id="star" placeholder="4" className="star-input" />
                  <div className="icon">
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="room">ROOM</label>
                <br />
                <div className="icons-r">
                  <div className="icon">
                    <AiOutlineMinus />
                  </div>
                  <input id="room" placeholder="1" className="star-input" />
                  <div className="icon">
                    <AiOutlinePlus />
                  </div>
                </div>
              </div>
            </div>

            <button type="button" className="book">
              Book Now
            </button>
          </div>
        </div>

        <div>
          <h1 className="test-heading">Testimonials</h1>
          <div className="test-flex">
            <div className="test-card">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693643818/Avatar_wy0dpj.png"
                alt="avatar"
              />
              <p>corey Korsgaard</p>
              <hr />
              <p className="center">
                It is a long established fact that a reader will be destracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
            <div className="test-card">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693644104/Avatar_1_wwsdjt.png"
                alt="avatar"
              />
              <p>Jacob Aminoff</p>
              <hr />
              <p className="center">
                It is a long established fact that a reader will be destracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="test-card">
              <img
                src="https://res.cloudinary.com/dxgbxchqm/image/upload/v1693644113/Avatar_2_qqhgry.png"
                alt="avatar"
              />
              <p>Carla press</p>
              <hr />
              <p className="center">
                It is a long established fact that a reader will be destracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>
          </div>
        </div>

        <div className="s-special">
          <h1 className="s-head">
            Student special: Discounted rates on tropical gateways!
          </h1>
          <p className="s-para">
            Let’s embody your beautiful ideas together, simplify the way you
            visualize your next big things.
          </p>
        </div>
        <div className="footer">
          <div className="f-flex">
            <p>privacy poicy</p>
            <p>Terms of use</p>
            <p>sales and Refunds</p>
            <p>Legal</p>
          </div>
          <div className="f-flex">
            <p>About</p>
            <p>Schedules</p>
            <p>pricing</p>
            <p>Membership</p>
            <p>joins</p>
          </div>
        </div>
      </div>
    )
  }
}

export default App
