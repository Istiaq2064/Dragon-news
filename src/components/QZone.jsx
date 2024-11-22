import baby from '../assets/swimming.png';
import play from '../assets/playground.png';
import clg from '../assets/class.png';
import add from '../assets/bg.png'

const QZone = () => {
    return (
        <div>
            <div>
                <h2 className="font-semibold mb-3">Q-Zone</h2>
            </div>
            <div>
                <img src={baby} alt="" />
            </div>
            <div>
                <img src={clg} alt="" />
            </div>
            <div>
                <img src={play} alt="" />
            </div>
            <div>
                <img src={add} alt="" />
            </div>
        </div>
    );
};

export default QZone;