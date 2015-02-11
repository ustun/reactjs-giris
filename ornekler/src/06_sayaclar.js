var Sayac = React.createClass({

  render: function () {
    return (
    <div>
      Sayaca {this.props.sayac} kez tıkladınız.
      {10 - this.props.sayac} kez daha tıklamalısınız.
      <button onClick={this.props.artir}>Sayaç</button>
    </div>);
  }
});


var Sayaclar = React.createClass({
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
       <div>
        <Sayac sayac={this.state.sayac1} artir={this.sayac1Artir}/>
        <Sayac sayac={this.state.sayac2} artir={this.sayac2Artir}/>
      </div>);
  }
})


React.render(<Sayaclar/>, document.body);
