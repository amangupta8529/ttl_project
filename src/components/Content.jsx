import React from 'react'
import like from './likes.png';
import './content.css';
function Content() {
  return (
    <div className='container'>
        <div className="post">
            <h3> <span className='sp_1'>134 Posts</span></h3>
        </div>
        <div className="head_1" id="card">
            <div className="subHead">
             <h2 className=''>A changing World Order</h2>
             <img src={like} alt="" className="logo" />
            </div>
            <p className='para'>The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including...</p>
            <div className="foot">
                <p className="foot_1"><span className='sp_2'>musing</span> by anujgosaliya</p>
                <p className="foot_2">August 2 . 2 min Read . 102 views</p>
            </div>
        </div>
        <div className="head_2"id="card">
        <div className="subHead">
            <h2 className=''>India V/S Australia</h2>
             <img src={like} alt="" className="logo" />
            </div>
            <p className='para'>Think About it - this cricket series was akin to therapy.</p> <br />
            <p className='para'>Laying our childhood trauma up top, working with slowly and surely over to ...</p>
            <div className="foot">
                <p className="foot_1"><span className='sp_2'>thought</span> by anujgosaliya</p>
                <p className="foot_2">january 21 . 1 min Read . 156 views</p>
            </div>
        </div>
        <div className="head_3" id="card">
        <div className="subHead">
            <h2 className=''>Write to Build</h2>
             <img src={like} alt="" className="logo" />
            </div>
            <p className='para'>Writing is the first step to create: <br />
               <ul>
                <li>stories</li>
                <li>products</li>
                <li>comapanies</li>
               </ul>
            </p>
            <div className="foot">
                <p className="foot_1"><span className='sp_2'>thought</span> by anujgosaliya</p>
                <p className="foot_2">November 18 . 1 min Read . 228 views</p>
            </div>
        </div>
    </div>
  )
}

export default Content;