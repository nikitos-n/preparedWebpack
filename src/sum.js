const sum = (...args) => 
    args.reduce((current, next) =>
        next + current
        )

export default sum;