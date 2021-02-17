import './Main.css'

function Main(props) {
    return (
        <div>
            <div className="main-container">
                <div className="main-left">
                    <img id="left-img1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3mkHM0olXt_9TDdePVA4U6UprVYRHIcHZA&usqp=CAU" />
                    <img id="left-img2" src="https://i.ibb.co/zFysjNm/cofee.jpg" />
                </div>
                <div className="main-middle">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AttDl9/oAtM/t+Prc8vcZvdQAudLq+Puh3ur3/f5Oxtq86PAAsc2m4OuK1+Wv4+02w9hhzN6E1eTN7fN50eHW8vY/xdpx0eFUydy65+/E6vGV2+i8Zc0vAAACBElEQVR4nO3bzY6CMBSG4ToD/oCAIogV7v86Z1yNuDjJpKfmi3mf3STTE14bg4s2BAAAAAAAAAAAAAAAAAAAAAAA8F5VoaxK7ivrb211mRZ4bNr0Tymnqm2OKev3TeIn9AZls09YPXZuD5JPNyYs3upv4e8mbhMWb77cniOfr03CYgolUGiiUAKFJgolUGiiUAKFJgolUGiiUAKFJgolUGiiUAKFJgolUGiiUAKFJgolUGiiUAKFJgolUGjKU3gtXMfJFV6nvnUdqFZY1uE0u05UK6xDOPtOFCusblV0HipUOHSXexHjZRzvnmN1CmNX7k+xH4dQnM4pp15fyBTG57OqRcqZ0BcqhffVK+IT97B/PhG/eL4vVAqn5z96t7FBp3AVFd3GBp3C9R56XuJQKVxt23Bxm6tT2K0uNnSOiSqF5bqp8/tZo1K4/iI+foB7kSm8Pl/eOR38BssUhvHvNV9Mxv/9l05hiHM13G79sbqeP/Ft8bCMSxGq9nZxvdOoVJgHhSYKJVBoolAChSYKJVBoolAChSYKJVBoolAChSYKJVBoolAChSYKJVBoolAChSYKJVBoolAChSYKJVBoolAChabz4PYc+Qwpd+EW12sDmcQlZfXO8SxvJodd0vL9rp5LZXO9S71C1U5bZZPvnWIAAAAAAAAAAAAAAAAAAAAAAIDwAyavFwNFJS5/AAAAAElFTkSuQmCC" />
                </div>
                <div className="main-right">
                    <img id="right-img1" src="https://i.pinimg.com/originals/ae/e0/6d/aee06d3422a8e6eeb44b2cbba0f6c8bf.jpg" />
                    <img id="right-img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ161j0h_i_PirYBmcEMHFRo45CIKgiO5ctRg&usqp=CAU" />
                </div>
            </div>

            <div className="main-text">
                <>Software Engineer | Full Stack Developer</>
            </div>

            <div className="left-links">
                <a href="https://github.com/leeuwork"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" /></a>
                <a href="https://www.linkedin.com/in/aslanshaken/"><img src="https://library.kissclipart.com/20180907/ehe/kissclipart-linkedin-icon-for-resume-clipart-social-media-link-79f9bc808e514401.jpg" /></a>
                <a href="#"><img src="https://www.pngfind.com/pngs/m/2-23339_black-and-white-instagram-logo-instagram-logo-2018.png" /></a>
            </div>
        </div>
    )
}

export default Main