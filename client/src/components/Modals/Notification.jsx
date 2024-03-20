/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react' // import React

// Main Modal Component
export default function NotificationModal ({
  Title,
  Message,
  ButtonText,
  ButtonFunction
}) {
  return (
    <dialog id='StatusModal' className='modal'>
      <div className='modal-box'>
        <h3 className='font-bold text-lg'>{Title}</h3>
        <p className='py-4'>{Message}</p>
        <div className='modal-action'>
          <form method='dialog'>
            <button onClick={ButtonFunction} className='btn'>
              {ButtonText}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

// Default props
NotificationModal.defaultProps = {
  Title: '',
  Message: '',
  ButtonText: 'Close',
  CloseButtonFunction: () => {}
}
