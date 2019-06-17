"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: compute a unique hash for multiple reactified components
var getId = function getId(component) {
  return "vue-component-id";
};

exports.default = function (buildVueInstance) {
  return function (_reactInstance) {
    var id = getId();

    return function (_reactInstance$Compon) {
      _inherits(Wrapper, _reactInstance$Compon);

      function Wrapper(props) {
        _classCallCheck(this, Wrapper);

        var _this = _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).call(this, props));

        _this.myself = _reactInstance.createRef();
        return _this;
      }

      _createClass(Wrapper, [{
        key: "render",
        value: function render() {
          return _reactInstance.createElement("div", { ref: this.myself });
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.container = document.createElement("div");
          this.myself.current.appendChild(this.container);
          this.vueApp = buildVueInstance(this.props);
          this.vueApp.$mount(this.container);
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.vueApp.$destroy();
          delete this.container;
          delete this.myself;
          delete this.vueApp;
        }
      }]);

      return Wrapper;
    }(_reactInstance.Component);
  };
};
