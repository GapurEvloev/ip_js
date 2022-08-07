import {useCallback, useEffect, useMemo, useState} from 'react';
import {Container} from 'react-bootstrap';

const countTotal = (num) => {
  console.log("counting total")
  return num + 10;
}

const SliderHook = () => {
  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const getSomeImg = useCallback(() => {
    console.log("Fetching");
    return [
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg"
    ]
  }, []);

  const logging = () => {
    // console.log("Log!");
  }

  useEffect(() => {
    document.title = `Slide: ${slide}`;

    window.addEventListener("click", logging);
    return () => {
      window.removeEventListener("click", logging);
    }
  }, [slide]);

  const changeSlide = (i) => {
    setSlide(slide => slide + i);
  }

  const toggleAutoplay = () => {
    setAutoplay(autoplay => !autoplay);
  }

  const total = useMemo(() => countTotal(slide), [slide]);

  const style = useMemo(() => ({
    color: slide > 4 ? "red" : "black",
  }), [slide])

  useEffect(() => console.log(style), [style])

  return (
    <Container>
      <div className="slider w-50 m-auto">

        <Slide getSomeImg={getSomeImg}/>

        <div className="text-center mt-5">Active slide {slide} <br/> {autoplay ? 'auto' : null}</div>
        <div style={style} className="text-center mt-5">Total slides: {total}</div>
        <div className="text-center buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1
          </button>
          <button
            className="btn btn-primary me-2"
            onClick={toggleAutoplay}>toggle autoplay
          </button>
        </div>
      </div>
    </Container>
  )
}

const Slide = ({getSomeImg}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getSomeImg())
  }, [getSomeImg])

  return (
    <>
      {images.map((url, i) => (
        <img key={i} className="d-block w-100" src={url} alt="slide" />
      ))}
    </>
  )
}

export default SliderHook;