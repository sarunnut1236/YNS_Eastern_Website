import React from "react";

type Props = {
    name?: string;
    className?: string;
    selectClassName?: string;
    question: string;
    options: { key: string; value: string }[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function SelectInput({name, className, selectClassName, question, options, onChange }: Props) {
    return (
        <div className={`flex flex-row items-center gap-4 ${className}`}>
            <p className="text-nowrap">{question}</p>
            <select
                name={name?? ""}
                className={`w-full bg-slate-50 ring-0 focus:outline-orange-500 border border-orange-500 rounded-xl px-3 py-2 ${selectClassName}`}
                onChange={onChange}
                required
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.key}</option>
                ))}
            </select>
        </div>
    );
}

export default SelectInput;
