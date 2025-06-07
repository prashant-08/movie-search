function useDebounce (callback, delay=300) {
    // it takes a callback returns a new modified callback, which executes after some delay
    // arguments of given callback and modified call back should be same
    let timerId = null;
    return (...args) => {
        console.log("var args", args)
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            callback(...args)
        }, delay)
    }

}

export default useDebounce