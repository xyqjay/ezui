function add<T>(arg1: T, arg2: T): T {
    return arg1 + arg2
}
// function add(arg1: number, arg2: number): number {
//     return arg1 + arg2
// }
// add(1,2)
add<number>(1, 2)