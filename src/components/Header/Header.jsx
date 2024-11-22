
import moment from 'moment';
import image from '../../assets/logo.png'
import LatestNews from '../LatestNews';
const Header = () => {
    return (
            <div className='flex flex-col justify-center items-center py-3 gap-2'>
            <div>
            <img className='w-[350px]' src={image} alt="" />
            </div>
            <p className='text-gray-400 '>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
        
    );
};

export default Header;