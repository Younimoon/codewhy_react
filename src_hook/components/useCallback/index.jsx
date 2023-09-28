function UseCallback(){
    // 缓存需要使用的函数，页面的state改变时避免该函数二次渲染
    // 使用 useCallback 的好处是可以避免在每次重新渲染时都创建新的回调函数，
    // 从而减少不必要的组件重新渲染。尤其是当传递给子组件的回调函数发生更改时，这种优化可以显著提高性能。
    // 该方法接收两个参数 第一个参数表示一个回调函数，第二个表示依赖的数据。
    return (
        <div>useCallback</div>
    )
}
export default UseCallback