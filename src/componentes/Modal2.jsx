import React from 'react'
import { Box, Modal } from "@mui/material"




function Modal2 ({ children, status, handleClose }) {
    return (
        <Modal
            open={status}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                {children}
            </Box>
        </Modal>
    )
}


export {
    Modal2
}