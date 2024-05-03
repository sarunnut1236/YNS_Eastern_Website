export function getRegions() {
    return [
        { key: "", value: "" },
        { key: "กรุงเทพมหานคร", value: "กรุงเทพมหานคร" },
        { key: "ภาคกลาง", value: "ภาคกลาง" },
        { key: "ภาคตะวันออก", value: "ภาคตะวันออก" },
        { key: "ภาคปริดง", value: "ภาคปริดง" },
    ];
}

export function getMemberLevel() {
    return [
        { key: "", value: "" },
        { key: "ม.4", value: "ม.4" },
        { key: "ม.5", value: "ม.5" },
        { key: "ม.6", value: "ม.6" },
        { key: "ปี1", value: "ปี1" },
        { key: "ปี2", value: "ปี2" },
        { key: "ปี3", value: "ปี3" },
        { key: "ปี4", value: "ปี4" },
        { key: "ปี5", value: "ปี5" },
        { key: "ปี6", value: "ปี6" },
        { key: "ผู้ประสานงาน", value: "ผู้ประสานงาน" },
    ];
}

export function getCommunityActivities() {
    return [
        { key: "", value: "" },
        { key: "ทำกิจกรรมกับเด็กอนุบาล", value: "ทำกิจกรรมกับเด็กอนุบาล" },
        { key: "ทำกิจกรรม UG5 กับประถม", value: "ทำกิจกรรม UG5 กับประถม" },
        {
            key: "พูดคุยกับผู้ปกครองเรื่องการเลี้ยงลูกด้วยโทรศัพท์",
            value: "พูดคุยกับผู้ปกครองเรื่องการเลี้ยงลูกด้วยโทรศัพท์",
        },
    ];
}

export function getDepartments(memberLevel: string) {
    let result: { key: string; value: string }[] = [{ key: "", value: "" }];
    const juniorLevel = ["ม.4", "ม.5", "ม.6"].includes(memberLevel);
    if (juniorLevel) {
        result.push({ key: "น้องค่าย", value: "น้องค่าย" });
    }
    if (
        memberLevel === "ปี1" ||
        memberLevel === "ปี3" ||
        memberLevel === "ผู้ประสานงาน"
    ) {
        result.push({ key: "บุคคล", value: "บุคคล" });
    }
    const isSeniorLevel = [
        "ปี2",
        "ปี3",
        "ปี4",
        "ปี5",
        "ปี6",
        "ผู้ประสานงาน",
    ].includes(memberLevel);

    if (isSeniorLevel) {
        result.push({ key: "กิจกรรม", value: "กิจกรรม" });
        result.push({ key: "ซัพพอร์ต", value: "ซัพพอร์ต" });
    }
    if (memberLevel === "ปี3" || memberLevel === "ผู้ประสานงาน") {
        result.push({ key: "ส่วนกลางค่าย", value: "ส่วนกลางค่าย" });
        result.push({ key: "การเงิน", value: "การเงิน" });
    }
    return result;
}

export function getTShirtSizes() {
    return [
        { key: "", value: "" },
        { key: "S", value: "S" },
        { key: "M", value: "M" },
        { key: "L", value: "L" },
        { key: "XL", value: "XL" },
        { key: "XXL", value: "XXL" },
    ];
}
