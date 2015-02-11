var Sayac = React.createClass({displayName: "Sayac",

  render: function () {
    return (
    React.createElement("div", null, 
      "Sayaca ", this.props.sayac, " kez tıkladınız.", 
      10 - this.props.sayac, " kez daha tıklamalısınız.", 
      React.createElement("button", {onClick: this.props.artir}, "Sayaç")
    ));
  }
});


var Sayaclar = React.createClass({displayName: "Sayaclar",
  getInitialState: function () {
    return {sayac1: 3,  sayac2: 5};
  },

  sayac1Artir: function () {
     this.setState({sayac1: this.state.sayac1 + 1,
                    sayac2: this.state.sayac2 - 1});
  },

  sayac2Artir: function () {
     this.setState({sayac1: this.state.sayac1 - 1,
                    sayac2: this.state.sayac2 + 1});
  },

  render: function () {
     return (
       React.createElement("div", null, 
        React.createElement(Sayac, {sayac: this.state.sayac1, artir: this.sayac1Artir}), 
        React.createElement(Sayac, {sayac: this.state.sayac2, artir: this.sayac2Artir})
      ));
  }
})


React.render(React.createElement(Sayaclar, null), document.body);
