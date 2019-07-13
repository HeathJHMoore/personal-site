let degree = 0

const degreeChange = () => {
    degree += 1;
    // const backgroundGradient = `linear-gradient(${degree}deg, white, rgba(200, 200, 200, .4), white, rgba(200, 200, 200, .4), white)`;
    const backgroundGradient = `linear-gradient(${degree}deg, rgba(200, 200, 200, .4), white,  white, rgba(200, 200, 200, .4))`;
    // const backgroundGradient = `linear-gradient(${degree}deg, rgb(200,82,111), rgb(80,175,207))`;
    document.getElementById('technologiesContainer').style.background = backgroundGradient
};

export default { degreeChange };
