import React, {useEffect} from 'react'

const Modal = ({modalContent, hideModal}) => {
    useEffect(() => {
        setTimeout(() => {
            hideModal()
        }, 2500)
    })
    return (
        <React.Fragment>
            <div>{modalContent}</div>
        </React.Fragment>
    )
}

export default Modal
