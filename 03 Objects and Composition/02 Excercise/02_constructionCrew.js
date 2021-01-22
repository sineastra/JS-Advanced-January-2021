function foo(obj) {
    if (obj.dizziness === true) {
        obj.levelOfHydrated += 0.1 * obj.weight * obj.experience
        obj.dizziness = false
    }
    return obj
}