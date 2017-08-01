var React = require('react');
var ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div>
        Hello {this.props.name}
      </div>
    );
  }
});

ReactDOM.render(<HelloMessage name="John" />, document.getElementById('root'));
