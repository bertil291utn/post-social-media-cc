import Spinner from '@components/common/Spinner/Spinner.component';
import { COLOR } from 'constants/colors.contants';
import useOutsideElement from 'hooks/use.hook';
import { ReactNode, useEffect, useRef, useState } from 'react';
interface PropTypes {
  children: ReactNode
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
  acceptLabel: string
  cancelLabel?: string
  acceptBtnAction: () => void
  cancelBtnAction?: () => void
  backButton?: boolean
}

const Modal = ({
  children,
  show,
  setShow,
  acceptLabel,
  cancelLabel,
  acceptBtnAction,
  cancelBtnAction,
  backButton = true,

}: PropTypes) => {
  const [loadingLabel, setLoadingLabel] = useState('')
  const handleClose = () => setShow(false);
  const modalRef = useRef(null);
  const [IsOutsideElement] = useOutsideElement(modalRef);
  useEffect(() => {
    if (IsOutsideElement && backButton) {
      handleClose();
    }
  }, [IsOutsideElement]);

  const _acceptBtnAction = () => {
    setLoadingLabel(`${acceptLabel}ing...`)
    acceptBtnAction && acceptBtnAction();
    //TODO:if after 10 seconds doesn't return a value whetjer is error or a 202 value
    //close the modal and display an error
    //TODO: close and display a toast after being saved
    // handleClose();
  };

  const _cancelBtnAction = () => {
    cancelBtnAction && cancelBtnAction();
    handleClose();
  };

  return show ? (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                {children}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                disabled={!!loadingLabel}
                type="button" className={`inline-flex w-full justify-center rounded-md 
                ${COLOR.primary.bg} px-3 py-2 text-sm font-semibold text-white shadow-sm 
                 sm:ml-3 sm:w-auto 
                ${!!loadingLabel ? 'cursor-not-allowed bg-gray-400' : COLOR.primary.hover}`}
                onClick={_acceptBtnAction}
              >
                {loadingLabel &&
                  <>
                    <Spinner />
                    <span>
                      {loadingLabel}
                    </span>
                  </>
                }
                {!loadingLabel && acceptLabel}
              </button>
              {!loadingLabel && <button
                onClick={_cancelBtnAction}
                type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                {cancelLabel || 'Cancel'}
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>

  ) : null;
}

export default Modal;