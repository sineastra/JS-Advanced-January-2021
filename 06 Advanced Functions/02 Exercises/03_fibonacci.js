function foo() {
    let nums = [0, 0]

    return () => {
        const result = nums[0] + nums[1]
        nums = [nums[1], nums[1] + nums[0] || 1]
        return result || 1
    }
}
