var Sayac = React.createClass({
  getInitialState: function () {
    return {sayac: 0};
  },

  artir: function () {
    var suAnkiSayac = this.state.sayac;
    this.setState({sayac: suAnkiSayac + 1});
  },

  render: function () {
    return (
    <div>
      Sayaca {this.state.sayac} kez tıkladınız.
      {10 - this.state.sayac} kez daha tıklamalısınız.
      <button onClick={this.artir}>Sayaç</button>
    </div>
    );
  }
})

React.render(<Sayac/>, document.body);
