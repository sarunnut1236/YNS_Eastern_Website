"use client";

import NotifyModal from "@/components/NotifyModal";
import SelectInput from "@/components/SelectInput";
import TextInput from "@/components/TextInput";
import connectDB from "@/lib/connectDb";
import { getCommunityActivities, getDepartments, getMemberLevel, getRegions, getTShirtSizes } from "@/lib/inputLibs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useReducer, useState } from "react";

type Props = {};

type campDate = {
    23: boolean;
    24: boolean;
    25: boolean;
    26: boolean;
    27: boolean;
    28: boolean;
};

type formData = {
    nickname: string;
    firstname: string;
    lastname: string;
    region: string;
    memberLevel: string;
    tShirtSize: string;
    department: string;
    communityActivity: string;
    campDates: campDate;
};

const dateReducer = (state: campDate, action: { type: string }) => {
    try {
        let newState: campDate = { ...state };
        const key = action.type as unknown as keyof campDate;
        newState[key] = !newState[key];
        return newState;
    } catch (e) {
        return state;
    }
};

const Page = (props: Props) => {
    const [campDates, dispatch] = useReducer(dateReducer, {
        23: false,
        24: false,
        25: false,
        26: false,
        27: false,
        28: false,
    });

    const [nickname, setNickname] = useState<string>("");
    const [firstname, setFirstname] = useState<string>("");
    const [lastname, setLastname] = useState<string>("");
    const [region, setRegion] = useState<string>("");
    const [memberLevel, setMemberLevel] = useState<string>("");
    const [tShirtSize, setTShirtSize] = useState<string>("");
    const [department, setDepartment] = useState<string>("");
    const [communityActivity, setCommunityActivity] = useState<string>("");
    const [darkBackground, setDarkBackground] = useState<boolean>(false);
    const [openValidateModal, setOpenValidateModal] = useState<boolean>(false);
    const [openSuccessModal, setOpenSuccessModal] = useState<boolean>(false);

    function validateCampDates(campDates: campDate) {
        for (const date in campDates) {
            console.log(date)
            if (campDates[date as unknown as keyof campDate]) {
                return true;
            }
        }
        return false;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (validateCampDates(campDates) === false) {
            setDarkBackground(true);
            setOpenValidateModal(true);
            return;
        }

        const formData: formData = {
            nickname: nickname,
            firstname: firstname,
            lastname: lastname,
            region: region,
            memberLevel: memberLevel,
            tShirtSize: tShirtSize,
            department: department,
            communityActivity: communityActivity,
            campDates: campDates,
        };
        console.log(JSON.stringify(formData));
    };

    useEffect(() => {
        const fn = async () => {
            await connectDB();
        }
        fn();
    }, []);

    return (
        <>
            <main className="flex flex-col justify-center items-center px-4 xl:px-10 py-5">
                <header className="flex flex-col items-center bg-slate-50 shadow-2xl w-full mx-4 xl:mx-10 py-10 px-10 rounded-3xl">
                    <Image
                        src={"/logo/main_logo.png"}
                        alt={"ASA16"}
                        width={200}
                        height={144.68}
                    />
                    <div className="flex flex-row items-center justify-center gap-2">
                        <p className="font-bold text-2xl">Youth ASA ครั้งที่</p>
                        <p className="font-extrabold text-3xl text-orange-600">
                            16
                        </p>
                    </div>
                    <p className="mt-4">
                        ยินดีต้อนรับสู่ค่ายอาสาของพวกพี่ ๆ นะ
                    </p>
                    <form onSubmit={handleSubmit} className="w-fit mt-8">
                        <p className="font-semibold text-lg">ข้อมูลส่วนตัว</p>
                        <div className="w-full justify-start">
                            <TextInput
                                question={"เธอชื่ออะไรหรอ"}
                                placeholder={"ชื่อเล่น"}
                                className="mt-4"
                                inputClassName="w-full"
                                onChange={(e) => {
                                    setNickname(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mt-4 flex flex-col xl:flex-row gap-4 w-full justify-start">
                            <TextInput
                                question={"ชื่อ"}
                                placeholder={"ยูธ"}
                                className="mt-2"
                                inputClassName="w-full"
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                            />
                            <TextInput
                                question={"นามสกุล"}
                                placeholder={"ฟอร์เน็กซ์สเต็ป"}
                                className="mt-2"
                                inputClassName="w-full"
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mt-4 flex flex-col xl:flex-row gap-4 w-full justify-start">
                            <SelectInput
                                question={"ภาค"}
                                options={getRegions()}
                                className="w-full"
                                onChange={(e) => {
                                    setRegion(e.target.value);
                                }}
                            />
                            <SelectInput
                                question={"ชั้นปี"}
                                options={getMemberLevel()}
                                className="w-full"
                                onChange={(e) => {
                                    setMemberLevel(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mt-4 flex flex-row justify-start items-center gap-2">
                            <SelectInput
                                question={"ไซส์เสื้อ"}
                                options={getTShirtSizes()}
                                className="w-full"
                                onChange={(e) => {
                                    setTShirtSize(e.target.value);
                                }}
                            />
                            <Link
                                href={"/reg/yuedpao_size_chart.jpg"}
                                target="blank"
                                className="text-sm text-slate-50 bg-slate-800 rounded-md pl-4 w-fit"
                            >
                                size chart
                            </Link>
                        </div>

                        <hr className="my-8 border-[1px] rounded-md border-slate-300" />

                        <p className="font-semibold text-lg">
                            ข้อมูลเกี่ยวกับค่ายอาสา
                        </p>
                        <SelectInput
                            question={"ฝ่ายที่อยากทำ"}
                            options={getDepartments(memberLevel)}
                            className="w-full mt-4"
                            onChange={(e) => {
                                setDepartment(e.target.value);
                            }}
                        />
                        <SelectInput
                            question={"กิจกรรมชุมชนที่อยากทำ"}
                            options={getCommunityActivities()}
                            className="w-full mt-4"
                            selectClassName="text-wrap"
                            onChange={(e) => {
                                setCommunityActivity(e.target.value);
                            }}
                        />
                        <p className="mt-1 text-sm text-slate-500">
                            *เราจะมีกิจกรรมลงอาสาสู่ชุมชนในค่ายด้วย
                        </p>
                        <p className="mt-4">
                            มาค่ายวันไหนได้บ้าง (เดือนพฤษภาคม)
                        </p>
                        <div className="mt-4 grid grid-flow-row grid-cols-2 justify-items-stretch xl:flex xl:flex-row gap-2">
                            {[23, 24, 25, 26, 27, 28].map((date) => (
                                <div
                                    key={date}
                                    className={`justify-self-center flex justify-center items-center ${
                                        campDates[date as keyof campDate]
                                            ? "bg-orange-400"
                                            : "bg-orange-300"
                                    } w-[50px] h-[50px] p-3 rounded-full hover:shadow-sm transition-all duration-300 ease-in-out`}
                                    onClick={() => {
                                        dispatch({ type: date.toString() });
                                    }}
                                >
                                    {date.toString()}
                                </div>
                            ))}
                        </div>
                        <button
                            type="submit"
                            className="mt-8 bg-orange-500 hover:bg-orange-600 hover:shadow-md focus:bg-orange-700 focus:shadow-lg text-slate-50 font-medium text-lg w-full py-2 rounded-md transition-all duration-300 ease-in-out"
                        >
                            สมัครค่าย Youth ASA ครั้งที่ 16
                        </button>
                    </form>
                </header>
            </main>

            <aside
                className={`${
                    darkBackground ? "" : "hidden"
                } w-[100dvw] h-[100dvh] inset-0 fixed z-10 bg-slate-800 opacity-50`}
            ></aside>
            <NotifyModal
                toggle={openValidateModal}
                onClick={() => {
                    setOpenValidateModal(false);
                    setDarkBackground(false);
                }}
                message={"กรุณากรอกวันที่สะดวกไปค่าย"}
            />
        </>
    );
};

export default Page;
