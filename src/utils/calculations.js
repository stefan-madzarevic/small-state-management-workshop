export function increment(state, props) {
    return {
        count: state.count + props.step
    }
}