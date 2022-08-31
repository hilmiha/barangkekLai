export const dateInterpreter_sm = (date) => {
    let smallDate = "";
    if (date !== undefined) {
        smallDate =
            date.getDate() +
            " / " +
            (date.getMonth() + 1) +
            " / " +
            date.getFullYear();
    }

    return smallDate;
};

export const dateInterpreter = (date) => {
    let longDate = "";
    if (date !== undefined) {
        const hari = date.toLocaleDateString("id-ID", { weekday: "long" });
        const bulan = date.toLocaleDateString("id-ID", { month: "long" });
        longDate =
            hari +
            ", " +
            date.getDate() +
            " " +
            bulan +
            " " +
            date.getFullYear();
    }
    return longDate;
};
