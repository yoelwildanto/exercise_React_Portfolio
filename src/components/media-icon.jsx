import {BsTwitter, BsInstagram} from 'react-icons/bs';
import '../CSS/media-icon.css'

export const Media_Icon = () => {
    return(
        <div className="media-icons">
            <button><BsInstagram/></button>
            <button><BsTwitter/></button>
        </div>
    )
};