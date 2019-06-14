// TODO: compute a unique hash for multiple reactified components
const getId = component => {
  return "vue-component-id";
};

export default buildVueInstance => _reactInstance => {
  const id = getId();

  return class Wrapper extends _reactInstance.Component {
    constructor(props) {
      super(props);
      this.myself = _reactInstance.createRef();
    }
    render() {
      return _reactInstance.createElement("div", { ref: this.myself });
    }
    componentDidMount() {
      this.container = document.createElement("div")
      this.myself.current.appendChild(this.container)
      this.vueApp = buildVueInstance(this.props)
      this.vueApp.$mount(this.container)
    }
    componentWillUnmount() {
        this.vueApp.$destroy()
        delete this.container
        delete this.myself
        delete this.vueApp
    }  
  };
};
