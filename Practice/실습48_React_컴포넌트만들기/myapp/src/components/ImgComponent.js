import logo from '../logo.svg';

function ImgComponent (){
    const imageStyle = {width:"300px", hight:"300px", backgroundColor:"gray"}
    return (
        <img src={logo} alt="logo" style={imageStyle}/>
    )
}

export default ImgComponent
