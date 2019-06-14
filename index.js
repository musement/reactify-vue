// TODO: compute a unique hash for multiple reactified components
const getId = component => {
  return "vue-component-id";
};

export default buildVueInstance => _reactInstance => {
  const id = getId();

  return class Wrapper extends _reactInstance.Component {
    render() {
      return _reactInstance.createElement("div", { id });
    }
    componentDidMount() {
      const vueApp = buildVueInstance(this.props)
      vueApp.$mount(`#${id}`);
    }
  };
};
