import React from "react";

type Props = { toggle: boolean; onClick: () => void, message: string};

function NotifyModal({ toggle, onClick, message }: Props) {
    return (
        <aside
            className={`${
                toggle ? "" : "hidden"
            } rounded-3xl w-[60%] h-[210px] z-20 top-[30%] left-[20%] fixed bg-slate-50 flex flex-col justify-center items-center`}
        >
            <p className="font-medium ">{message}</p>
            <button
                type="reset"
                className="mt-4 text-slate-50 bg-slate-800 rounded-md px-4 py-2 hover:bg-slate-700 transition-all duration-300 ease-in-out"
                onClick={onClick}
            >
                ตกลง
            </button>
        </aside>
    );
}

export default NotifyModal;
