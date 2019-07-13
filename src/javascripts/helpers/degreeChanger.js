let degree = 0

const degreeChange = () => {
    degree += 1;
    console.error(degree)
    const backgroundGradient = `linear-gradient(${degree}deg, white, rgba(200, 200, 200, .7), white)`;
    // const backgroundGradient = `linear-gradient(${degree}deg, rgb(200,82,111), rgb(80,175,207))`;
    document.getElementById('technologiesContainer').style.background = backgroundGradient
};

export default { degreeChange };
