import {FaLinkedin, FaGithub} from "react-icons/fa"

const Homepage = () => {
  return (
  <>
    <section className="homepage">
        <div className="overlay text-white">
            <h1 > IZME TECHs</h1> 
            <p>Full Stack Web Developer</p> 
            <ul>  
                <li>
                    <a href="https://www.linkedin.com//in/ismail-khan-289per/" target="">
                        <FaLinkedin />
                    </a>
                </li>
                <li>
                <a href="https://github.com/ismailkhan289">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </div>
        </section>
    </>
  )
};

export default Homepage;
