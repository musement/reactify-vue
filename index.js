
// compute a unique hash for multiple reactified components
const getId = component => {
    return 'vue-component-id'
}

export default (_vueInstance, component) => _reactInstance => {
    const id = getId(component)

    return class Wrapper extends _reactInstance.Component {
        render() {
            return _reactInstance.createElement('div', { id })
        }
        componentDidMount() {
            new _vueInstance({
                el: `#${id}`,
                components: { app: component },
                render: createElement => createElement('app', { props: this.props })
            })
        }
    }
}
