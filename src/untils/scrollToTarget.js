const scrollToTargetAdjusted = (element, offset) => {
    let elementPosition = element.getBoundingClientRect().top;
    let offsetPosition =
        elementPosition + document.getElementById("page").scrollTop - offset;

    document.getElementById("page").scrollTo({
        top: offsetPosition,
        behavior: "smooth",
    });
};

export default scrollToTargetAdjusted;
