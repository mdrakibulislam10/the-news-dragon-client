import React from 'react';
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
    return (
        <div className='py-4 my-4 bg-secondary text-center'>
            <h4>Q-Zone</h4>
            <div>
                <img src={qzone1} alt="" />
                <h5>Swimming</h5>
                <img className='mt-5' src={qzone2} alt="" />
                <h5 className='mb-5'>Class</h5>
                <img src={qzone3} alt="" />
                <h5>Play Ground</h5>
            </div>
        </div>
    );
};

export default QZone;