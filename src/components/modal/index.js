import BottomSheet from '@gorhom/bottom-sheet'
import React, { useEffect, useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'
import { clearModal } from '../../redux/actions/modal';
import Plus from './home/plus';
import AddPictureAndVideo from './home/addPitureAndVideo';

const Modal = () => {
    const modalState = useSelector(state => state.modal);
    const bottomSheetRef = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => {
        if (modalState.open && bottomSheetRef.current) {
            bottomSheetRef.current?.expand()
        }
    }, [modalState])

    const renderContent = () => {
        switch (modalState.modalType) {
            case 0:
                return (<Plus post={modalState.data} onClose={onClose} />)
            case 1:
                return (<AddPictureAndVideo post={modalState.data} onClose={onClose} />)  
            default:
                return (<></>)
        }
    }
    const onClose = () => {
        bottomSheetRef.current?.close()
        dispatch(clearModal())
    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={modalState.snapPoints.length > 0 ? modalState.snapPoints : ["1%"]}
            index={-1}
            // onClose={onClose}
            handleHeight={40}
            enablePanDownToClose>
            {renderContent()}
        </BottomSheet>
       
       
    )
}

export default Modal
