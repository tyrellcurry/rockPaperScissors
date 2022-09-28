import React from 'react'
import { useState } from 'react';
import CloseIcon from '../images/icon-close.svg';
import RulesImg from '../images/image-rules.svg';

function RulesButton() {
    const [buttonState, setButtonState] = useState(false);
    console.log(buttonState);
    function rulesModal() {
        setButtonState(!buttonState)
    }
  return (
    <>
        { buttonState &&
        <section className='rules_modal absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-1/2 w-1/4 rounded-xl'>
            <div className="toprow flex p-12 py-8 items-center justify-between">
            <h2 className='text-dark-text text-5xl uppercase'>Rules</h2>
            <img className='cursor-pointer w-6 h-6' src={CloseIcon} onClick={rulesModal} />
            </div>

            <div className="rulesimg">
                <img src={RulesImg} className="m-auto w-9/12"/>
            </div>
        </section>
        }
        <section className='rules_button h-full flex flex-col justify-end ml-auto p-4 sm:p-12'>
            <button className='text-2xl sm:text-3xl text-white border-solid border-2 border-white py-1 px-4 sm:py-2 sm:px-6 rounded-xl hover:text-dark-text hover:bg-white transition ease-in-out duration-200' onClick={rulesModal}>Rules</button>
        </section>
    </>
  )
}

export default RulesButton