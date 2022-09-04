import { useNavigate } from "react-router-dom";

const LaiModal = ({ messageHead, messageBody, status }) => {
    const navigate = useNavigate();
    const handleKembali = () => {
        navigate(-1);
    };

    return (
        <>
            <input
                type="checkbox"
                id="my-modal-3"
                className="modal-toggle"
                checked={status}
                readOnly
            />
            <div className="modal">
                <div className="modal-box relative border-primary border-2">
                    <label
                        htmlFor="my-modal-3"
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={handleKembali}
                    >
                        ✕
                    </label>
                    <h3 className="text-lg font-bold">{messageHead}</h3>
                    <p className="py-4">{messageBody}</p>
                    <div className="flex justify-end">
                        <button
                            className="btn btn-primary rounded-full px-10 capitalize"
                            onClick={handleKembali}
                        >
                            Kembali
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LaiModal;
